import { AuthActionType, authStore } from "../Redux/AuthRedux";
import CredentialsModel from "../Models/credential-model";
import UserModel from "../Models/user-model";
import appConfig from "../Utils/AppConfig";
import axios from "axios";

class AuthService {

    async register(user: UserModel): Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const token = response.data;
        authStore.dispatch({ type: AuthActionType.Register, payload: token });
    }

    async login(credentials: CredentialsModel): Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const token = response.data;
        authStore.dispatch({ type: AuthActionType.Login, payload: token });
    }

    logout(): void {
        authStore.dispatch({ type: AuthActionType.Logout });
    }

    isLoggedIn(): boolean {
        return authStore.getState().token !== null;
    }
}

const authService = new AuthService();
export default authService;