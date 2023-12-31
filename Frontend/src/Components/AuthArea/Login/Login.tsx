import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/credential-model";
import authService from "../../../Services/auth-service";
import notify from "../../../Utils/Notify";
import "./Login.css";
import { useForm } from "react-hook-form";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notify.success("Welcome back!");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Login Box">
			 <h2>Login</h2>

<form onSubmit={handleSubmit(send)}>

    <label>Username: </label>
    <input type="text" {...register("email", CredentialsModel.emailValidation)} />
    <span className="Err">{formState.errors.email?.message}</span>

    <label>Password: </label>
    <input type="password" {...register("password", CredentialsModel.passwordValidation)} />
    <span className="Err">{formState.errors.password?.message}</span>

    <button>Login</button>

</form>

        </div>
    );
}

export default Login;
