import { Controller, Resolver, ResolverResult, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Helmet } from "react-helmet"
import {
  CustomFieldError,
  IContactUsForm,
  IContactUsFormErrors,
  IContactUsRequest,
  mapFormToRequest,
  mapYupErrorsToDateTimeErrors
} from "./IContactUs"
import { useState } from "react"
import {
  BackLink,
  Button,
  CheckBoxDataProps,
  Content,
  DateInput,
  ErrorSummary,
  Header,
  TextInput,
  CheckBoxList
} from "@pa-digital/govuk-frontend-react"

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("First name is required")
    .max(30, "First name must not exceed 30 characters"),

  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .max(30, "Last name must not exceed 30 characters"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("A valid email address is required")
    .max(100, "Last name must not exceed 100 characters"),

  dateOfBirth: yup
    .object()
    .shape({
      day: yup
        .string()
        .required("Day is required")
        .matches(/^[0-9]+$/, "Day must be a number")
        .test("day_validation", "You must enter a valid day", (value, context) => {
          const { month, year } = context.parent
          const parsedValue = parseInt(value, 10)
          if (!parsedValue) return false
          const maxDays = new Date(year, parseInt(month, 10), 0).getDate()
          return parsedValue > 0 && parsedValue <= maxDays
        }),
      month: yup
        .string()
        .required("Month is required")
        .matches(/^[0-9]+$/, "Month must be a number")
        .test("month_validation", "You must enter a valid month", value => {
          const parsedValue = parseInt(value, 10)
          return parsedValue > 0 && parsedValue <= 12
        }),
      year: yup
        .string()
        .required("Year is required")
        .matches(/^[0-9]+$/, "Year must be a number")
        .test("year_validation", "You must enter a valid year", value => {
          const parsedValue = parseInt(value, 10)
          return parsedValue > 0 && parsedValue <= new Date().getFullYear()
        })
    })
    .required("Date of birth is required"),

  interests: yup
    .array(
      yup.object().shape({
        text: yup.string().required(),
        value: yup.string().required(),
        hint: yup.string(),
        divider: yup.boolean(),
        exclusive: yup.boolean(),
        checked: yup.boolean()
      })
    )
    .test(
      "interest_validation",
      "You must select at least one interest",
      value => value?.some(x => x.checked) || false
    )
    .required("Interests are required")
})

const InterestsData: CheckBoxDataProps[] = [
  {
    text: "React",
    value: "react"
  },
  {
    text: "Node JS",
    value: "nodejs"
  },
  {
    text: "Astro",
    value: "astro"
  },
  {
    text: "Accessibility",
    value: "accessibility"
  }
]

const ContactUs = () => {
  const [submittedData, setSubmittedData] = useState<IContactUsRequest>()
  const customYupResolver: Resolver<IContactUsForm> = async (data, context, options) => {
    const resolverResult = await yupResolver(schema)(data, context, options)

    return {
      values: resolverResult.values,
      errors: mapYupErrorsToDateTimeErrors(resolverResult.errors as IContactUsFormErrors)
    } as ResolverResult<IContactUsForm>
  }
  const {
    formState: { errors },
    control,
    handleSubmit
  } = useForm<IContactUsForm>({
    resolver: customYupResolver,
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      dateOfBirth: {
        day: "",
        month: "",
        year: ""
      },
      interests: InterestsData
    }
  })

  const onSubmit = (formData: IContactUsForm) => {
    setSubmittedData(mapFormToRequest(formData))
    return false
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Contact us, get in touch" />
        <meta name="description" content="Get in touch to register your interests" />
        <title>Register your interests</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">Example Form - Registration</Header>
              <Content>
                The following form shows how a user is validated on registering. The succesful data
                is shown after completion.
              </Content>
              <hr />
            </div>
          </div>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Header as="h2">Register</Header>
                <Content>Please register your interest using the form below.</Content>
                <ErrorSummary identifier="error-summary" errors={errors} />
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                    <TextInput
                      identifier="firstName"
                      label="First name"
                      required
                      value={value}
                      multiQuestion
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                    <TextInput
                      identifier="lastName"
                      label="Last name"
                      required
                      multiQuestion
                      value={value}
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                    <TextInput
                      identifier="email"
                      label="Email"
                      inputType="email"
                      required
                      multiQuestion
                      value={value}
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="dateOfBirth"
                  render={({ field: { value, onChange }, fieldState: { error } }) => {
                    const customError = error as CustomFieldError
                    return (
                      <DateInput
                        identifier="dateOfBirth"
                        label="Date of birth"
                        required
                        multiQuestion
                        error={customError?.error}
                        errorType={customError?.errorType}
                        value={value}
                        onValueChange={onChange}
                      />
                    )
                  }}
                />
                <Controller
                  control={control}
                  name="interests"
                  render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <CheckBoxList
                      identifier="interests"
                      header="Which of these interest you"
                      hint="Select all that apply"
                      data={value}
                      multiQuestion
                      error={error?.message}
                      onValueChange={onChange}
                    />
                  )}
                />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
          {submittedData && (
            <>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                  <Header as="h2">Submitted Request</Header>
                  <Content>The following information was submitted.</Content>
                </div>
              </div>
              <div className="govuk-grid-column-full">
                <Content as="pre">{JSON.stringify(submittedData, null, 2)}</Content>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default ContactUs
