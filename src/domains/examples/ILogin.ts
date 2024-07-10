export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export const mapFormToRequest = (formData: ILoginForm): ILoginRequest => {
  const request: ILoginRequest = {
    email: formData.email,
    password: formData.password,
  };
  return request;
};
