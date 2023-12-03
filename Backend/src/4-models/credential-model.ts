import Joi from "joi";
import { ValidationError } from "./client-errors";

class CredentialsModel {

    email: string
    password: string;

    constructor(user: CredentialsModel) {

        this.email = user.email
        this.password = user.password;
    }

    private static validationSchema = Joi.object({
        email: Joi.string().required().min(10).max(50),
        password: Joi.string().required().min(6).max(256)
    })

    public validate(): void {
        const result = CredentialsModel.validationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message)
    }
}

export default CredentialsModel;