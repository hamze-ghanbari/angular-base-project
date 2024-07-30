import { IUser } from "./user.interface";

export interface ILogin {
    accessToken: string,
    user: IUser
}