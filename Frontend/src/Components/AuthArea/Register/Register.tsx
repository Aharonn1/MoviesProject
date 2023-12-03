import { useForm } from "react-hook-form";
import "./Register.css";
import UserModel from "../../../Models/user-model";
import { useNavigate } from "react-router-dom";
import authService from "../../../Services/auth-service";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            alert("Welcome " + user.firstName);
            navigate("/home");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Register Box">
            <h2>Register</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>First name: </label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)} />
                <span className="Err">{formState.errors.firstName?.message}</span>

                <label>Last name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)} />
                <span className="Err">{formState.errors.lastName?.message}</span>

                <label>Username: </label>
                <input type="text" {...register("email", UserModel.emailValidation)} />
                <span className="Err">{formState.errors.email?.message}</span>

                <label>Password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation)} />
                <span className="Err">{formState.errors.password?.message}</span>

                <button>Register</button>

            </form>

        </div>
    );
}

export default Register;
