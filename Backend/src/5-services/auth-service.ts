import { AuthenticationError, ValidationError } from '../4-models/client-errors';
import CredentialsModel from '../4-models/credential-model';
import UserModel from "../4-models/user-model";
import cyber from '../2-utils/cyber';
import { OkPacket } from 'mysql';
import dal from '../2-utils/dal';

async function register(user: UserModel): Promise<string> {

    if(await isUsernameTaken(user.email)) throw new ValidationError(`Email ${user.email} already taken`);
    const sql = `INSERT INTO users VALUES(
        DEFAULT,
        '${user.firstName}',
        '${user.lastName}',
        '${user.email}',
        '${user.password}')`;

    const result: OkPacket = await dal.execute(sql);
    user.userId = result.insertId;
    const token = cyber.createNewToken(user);
    return token;
}

async function login(credentials: CredentialsModel): Promise<string> {
    const sql = `SELECT * FROM users WHERE email = '${credentials.email}' AND password = '${credentials.password}'`;
    const users = await dal.execute(sql);
    const user = users[0];
    if(!user) throw new AuthenticationError("Incorrect email or password");
    const token = cyber.createNewToken(user);
    return token;
}

async function isUsernameTaken(email: string): Promise<boolean> {
    const sql = `SELECT EXISTS(SELECT email FROM users WHERE email = '${email}') as isExist`;
    const arr = await dal.execute(sql);
    const count = +arr[0].isExist;
    return count === 1;
}

export default {
    register,
    login
};