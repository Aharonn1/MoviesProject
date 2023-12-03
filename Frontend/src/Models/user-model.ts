import { RegisterOptions } from "react-hook-form";

class UserModel {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    static firstNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing first name" },
        minLength: { value: 2, message: "First name must be minimum 2 chars" },
        maxLength: { value: 30, message: "First name can't exceeds 30 chars" }
    };

    static lastNameValidation: RegisterOptions = {
        required: { value: true, message: "Missing last name" },
        minLength: { value: 2, message: "Last name must be minimum 2 chars" },
        maxLength: { value: 30, message: "Last name can't exceeds 30 chars" }
    };

    static emailValidation: RegisterOptions = {
        required: { value: true, message: "Missing email" },
        minLength: { value: 4, message: "email must be minimum 4 chars" },
        maxLength: { value: 30, message: "email can't exceeds 30 chars" }
    };

    static passwordValidation: RegisterOptions = {
        required: { value: true, message: "Missing password" },
        minLength: { value: 4, message: "Password must be minimum 4 chars" },
        maxLength: { value: 30, message: "Password can't exceeds 30 chars" }
    };
}
export default UserModel
