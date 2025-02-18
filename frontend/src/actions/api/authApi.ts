"use server";

import { StatusCodes } from "http-status-codes";

import { signOut } from "@/config/auth";

import { AuthType, LoginRequest, SignUpRequest } from "@/types/user";
import { ResponseType, IErrorResponse } from "@/types/ApiResponse";
import { postFetch } from "./fetch";

export const login = async (req: LoginRequest) => {
  try {
    console.log(req);
    const response = await postFetch({
      path: "auth/login",
      body: req,
    });

    const data = await response.json();
    const status = response.status;
    if (status === StatusCodes.OK) {
      const res: ResponseType<AuthType> = {
        status: status,
        data: data,
      };
      return res;
    }

    const res: ResponseType = {
      status: status,
      errorCode: data.code,
      errorMessage: data.message,
    };
    return res;
  } catch (error) {
    const res: ResponseType = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorCode: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
      errorMessage: `Internet Server Error: ${error}`,
    };
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError?.status?.toString();
    res.errorMessage = fetchError?.statusText;
    return res;
  }
};

export const register = async (req: SignUpRequest) => {
  try {
    const response = await postFetch({
      path: "auth/signup",
      body: req,
    });

    const data = await response.json();
    const status = response.status;
    if (status === StatusCodes.CREATED) {
      const res: ResponseType<AuthType> = {
        status: status,
        data: data,
      };
      return res;
    }

    const res: ResponseType = {
      status: status,
      errorCode: data.code,
      errorMessage: data.message,
    };
    return res;
  } catch (error) {
    const res: ResponseType = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      errorCode: `${StatusCodes.INTERNAL_SERVER_ERROR}`,
      errorMessage: `Internet Server Error: ${error}`,
    };
    const fetchError = error as IErrorResponse;
    res.errorCode = fetchError?.status?.toString();
    res.errorMessage = fetchError?.statusText;
    return res;
  }
};

export const logout = async () => {
  await signOut();
};
