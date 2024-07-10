import {
  DateInputState,
  CheckBoxDataProps,
  mapCheckBoxListToArray,
} from "@pa-digital/govuk-frontend-react";

export interface IContactUsForm {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: DateInputState;
  interests: CheckBoxDataProps[];
}

export interface IContactUsRequest {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: Date;
  interests: string[];
}

export const mapFormToRequest = (
  formData: IContactUsForm
): IContactUsRequest => {
  const request: IContactUsRequest = {
    firstName: formData.firstName,
    lastName: formData.firstName,
    email: formData.email,
    dateOfBirth: new Date(
      `${formData.dateOfBirth.day}/${formData.dateOfBirth.month}/${formData.dateOfBirth.year}`
    ),
    interests: mapCheckBoxListToArray(formData.interests),
  };
  return request;
};
