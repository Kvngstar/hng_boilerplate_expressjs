import { User } from "../models";
import { Request } from "express";

export interface IUserService {
  getUserById(id: string): Promise<User | null>;
  getAllUsers(): Promise<User[]>;
}

export interface IRole {
  role: "super_admin" | "admin" | "user";
}

export interface IUserSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAuthService {
  login(payload: IUserLogin): Promise<unknown>;
  signUp(payload: IUserSignUp, res: unknown): Promise<unknown>;
  verifyEmail(token: string, otp: number): Promise<{ message: string }>;
}

export interface UserRequest extends Request{
  user? : any
}