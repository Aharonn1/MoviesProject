import express, { Request, Response, NextFunction } from "express";
import dal from "../2-utils/dal";
import UserModel from "../4-models/user-model";
import authService from "../5-services/auth-service";
import isEmailTaken from "../5-services/auth-service";
import CredentialsModel from "../4-models/credential-model";
const router = express.Router(); // Capital R

// POST http://localhost:4000/api/auth/register
router.post("/auth/register", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        const token = await authService.register(user);
        response.status(201).json(token);
    }
    catch (err: any) {
        next(err);
    }
})

// POST http://localhost:4000/api/auth/register
router.post("/auth/login", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const credentials = new CredentialsModel(request.body);
        const token = await authService.login(credentials);
        response.json(token);
    }
    catch (err: any) {
        next(err);
    }
})


export default router;
