import { RadioButtonDataProps } from "@pa-digital/govuk-frontend-react";

export interface IPasswordForm {
  password: string;
  enableMFA: RadioButtonDataProps[];
}

export interface IPasswordRequest {
  password: string;
  enableMFA: boolean;
}

export const mapFormToRequest = (formData: IPasswordForm): IPasswordRequest => {
  const radioChoice = formData.enableMFA.find((x) => x.checked);

  const request: IPasswordRequest = {
    password: formData.password,
    enableMFA: radioChoice?.value.toLowerCase() === "yes",
  };
  return request;
};

export const CredentialsRadioData: RadioButtonDataProps[] = [
  {
    text: "Enable MFA",
    value: "Yes",
  },
  {
    text: "Do not enable MFA",
    value: "No",
    hint: "I understand the risk of not doing this",
  },
];
