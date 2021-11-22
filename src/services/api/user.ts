import { env } from '../../constants';
import { fetchInit, setToken } from './config';
import { ILoginRequest } from '../interfaces/request/login';
import { IUserDataRequest } from '../interfaces/request/userData';
import { INewPasswordRequest } from '../interfaces/request/newPassword';
import { IResetPasswordRequest } from '../interfaces/request/resetPassword';
import { ILoginResponse } from '../interfaces/response/login';
import { IUserDataResponse } from '../interfaces/response/userData';

export const GetUserByEmail = async (
  email: string
): Promise<IUserDataResponse> => {
  const init = fetchInit('GET');
  const response = await fetch(
    `${env.apiUrl}/${env.version}/user/email/${email}`,
    init
  );
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const GetUserList = async (): Promise<IUserDataResponse[]> => {
  const init = fetchInit('GET');
  const response = await fetch(`${env.apiUrl}/${env.version}/user/list`, init);
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const Login = async (
  credentials: ILoginRequest
): Promise<ILoginResponse> => {
  const init = fetchInit('POST', credentials);
  const response = await fetch(`${env.apiUrl}/${env.version}/user/login`, init);
  const parsedResponse = await response.json();
  setToken(parsedResponse.token);
  return parsedResponse;
};

export const DeleteUserByEmail = async (email: string) => {
  const init = fetchInit('GET');
  await fetch(`${env.apiUrl}/${env.version}/user/email/${email}`, init);
};

export const CreateUser = async (user: IUserDataRequest) => {
  const init = fetchInit('POST', user);
  await fetch(`${env.apiUrl}/${env.version}/user/`, init);
};

export const ResetPassword = async (credentials: IResetPasswordRequest) => {
  const init = fetchInit('POST', credentials);
  await fetch(`${env.apiUrl}/${env.version}/user/`, init);
};

export const NewPassword = async (credentials: INewPasswordRequest) => {
  const init = fetchInit('PUT', credentials);
  await fetch(`${env.apiUrl}/${env.version}/user/`, init);
};
