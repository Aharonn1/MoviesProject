import Joi from "joi";
import { ValidationError } from "./client-errors";

class UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(user: UserModel) {
        this.userId = user.userId;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;

    }

    private static validationSchema = Joi.object({
        userId: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().max(30),
        lastName: Joi.string().required().max(30),
        email: Joi.string().required().max(50),
        password: Joi.string().required().max(256),
    })

    public validate(): void {
        const result = UserModel.validationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message)
    }
}

export default UserModel;