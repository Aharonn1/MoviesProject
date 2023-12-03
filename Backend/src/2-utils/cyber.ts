import { Request } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { AuthenticationError } from "../4-models/client-errors";
import UserModel from "../4-models/user-model";

const secretKey = "4578-86 Students Are Amazing!";

function createNewToken(user: UserModel): string {

    // Remove password: 
    delete user.password;

    // Create container for the user object: 
    const container = { user };

    // Create options:
    const options = { expiresIn: "3h" };

    // Create the token: 
    const token = jwt.sign(container, secretKey, options);

    return token;
}

// Verify if token is valid or not (Header --> authorization: "Bearer the-token")
//                                                            "01234567"
function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {

            // Extract authorization header:
            const header = request.header("authorization");

            // If missing:
            if (!header) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            // Extract token:
            const token = header.substring(7);

            // If missing:
            if (!token) {
                reject(new AuthenticationError("Invalid token"));
                return;
            }

            // Verify:
            jwt.verify(token, secretKey, (err: JsonWebTokenError) => {

                console.log(err);

                // If token not valid: 
                if (err) {
                    reject(new AuthenticationError("Invalid token"));
                    return;
                }

                // Here the token must be valid: 
                resolve(true);
            });

        }
        catch (err: any) {
            reject(err);
        }
    });
}


export default {
    createNewToken,
    verifyToken
};
