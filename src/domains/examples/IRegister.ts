import {
  CheckBoxDataProps,
  mapCheckBoxListToArray,
  SelectDataProps
} from "@pa-digital/govuk-frontend-react"

export interface IRegisterForm {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  location: SelectDataProps[]
}

export interface IRegisterRequest {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  location: string
}

export const mapFormToRequest = (formData: IRegisterForm): IRegisterRequest => {
  const request: IRegisterRequest = {
    firstName: formData.firstName,
    lastName: formData.firstName,
    phoneNumber: formData.phoneNumber,
    email: formData.email,
    password: formData.password,
    location: (formData.location.find(loc => loc.value !== "") || { text: "", value: "" }).value
  }
  return request
}

export interface IRegisterFormErrors {
  firstName?: { message: string }
  lastName?: { message: string }
  phoneNumber?: { message: string }
  email?: { message: string }
  password?: { message: string }
  location?: { message: string }
}
