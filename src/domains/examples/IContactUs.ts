import {
  DateInputState,
  CheckBoxDataProps,
  mapCheckBoxListToArray,
  errorTypeEnum
} from "@pa-digital/govuk-frontend-react"
import { FieldError } from "react-hook-form"

export interface IContactUsForm {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: DateInputState
  interests: CheckBoxDataProps[]
}

export interface IContactUsRequest {
  firstName: string
  lastName: string
  email: string
  dateOfBirth: Date
  interests: string[]
}

export const mapFormToRequest = (formData: IContactUsForm): IContactUsRequest => {
  const request: IContactUsRequest = {
    firstName: formData.firstName,
    lastName: formData.firstName,
    email: formData.email,
    dateOfBirth: new Date(
      `${formData.dateOfBirth.day}/${formData.dateOfBirth.month}/${formData.dateOfBirth.year}`
    ),
    interests: mapCheckBoxListToArray(formData.interests)
  }
  return request
}

interface DateInputError {
  error: string
  errorType: errorTypeEnum
}

export interface CustomFieldError extends FieldError {
  error?: string
  errorType?: errorTypeEnum
}

export interface IContactUsFormErrors {
  firstName?: { message: string }
  lastName?: { message: string }
  email?: { message: string }
  dateOfBirth?: {
    day?: { message: string }
    month?: { message: string }
    year?: { message: string }
    error?: string
    errorType?: errorTypeEnum
  }
  interests?: { message: string }
}

export const mapYupErrorsToDateTimeErrors = (
  errors: IContactUsFormErrors
): IContactUsFormErrors => {
  const customErrors: IContactUsFormErrors = {}

  console.log("Errors", JSON.stringify(errors, null, 2))

  if (errors.dateOfBirth?.day) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: errors.dateOfBirth.day.message,
      errorType: errorTypeEnum.day
    }
  }

  if (errors.dateOfBirth?.month) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: errors.dateOfBirth.month.message,
      errorType: errorTypeEnum.month
    }
  }

  if (errors.dateOfBirth?.year) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: errors.dateOfBirth.year.message,
      errorType: errorTypeEnum.year
    }
  }

  if (errors.dateOfBirth?.day && errors.dateOfBirth?.month) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: `${errors.dateOfBirth.day.message}, ${errors.dateOfBirth.month.message}`,
      errorType: errorTypeEnum.dayMonth
    }
  }

  if (errors.dateOfBirth?.month && errors.dateOfBirth?.year) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: `${errors.dateOfBirth.month.message}, ${errors.dateOfBirth.year.message}`,
      errorType: errorTypeEnum.monthYear
    }
  }

  if (errors.dateOfBirth?.day && errors.dateOfBirth?.year) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: `${errors.dateOfBirth.day.message}, ${errors.dateOfBirth.year.message}`,
      errorType: errorTypeEnum.dayYear
    }
  }

  if (errors.dateOfBirth?.day && errors.dateOfBirth?.month && errors.dateOfBirth?.year) {
    customErrors.dateOfBirth = {
      ...customErrors.dateOfBirth,
      error: `${errors.dateOfBirth.day.message}, ${errors.dateOfBirth.month.message}, ${errors.dateOfBirth.year.message}`,
      errorType: errorTypeEnum.all
    }
  }

  return { ...errors, ...customErrors }
}
