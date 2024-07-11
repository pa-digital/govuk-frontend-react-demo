import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Helmet } from "react-helmet"
import { ILoginForm, ILoginRequest, mapFormToRequest } from "./ILogin"
import { useState } from "react"
import "../../styling/nihr.scss"
import {
  BackLink,
  Header,
  Content,
  ErrorSummary,
  TextInput,
  PasswordInput,
  Button
} from "@pa-digital/govuk-frontend-react"

const schema = yup.object().shape({
  email: yup
    .string()
    .email("A valid email address is required")
    .trim()
    .required("Email login is required")
    .max(100, "First name must not exceed 100 characters"),

  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(12, "Password must be more than 12 characters")
})

const Login = () => {
  const [submittedData, setSubmittedData] = useState<ILoginRequest>()
  const {
    formState: { errors },
    control,
    handleSubmit
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (formData: ILoginForm) => {
    setSubmittedData(mapFormToRequest(formData))
    return false
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Login" />
        <meta name="description" content="Log in to your account" />
        <title>Online Account Login</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">Branding</Header>
              <Content>
                Branding of the GDS components can be achieved with care to ensure WCAG Compliance
                remains. Here is an example of an NIHR branded implementation.
              </Content>
              <hr />
            </div>
          </div>
          <div className="govuk-grid-row nihr-brand">
            <div className="govuk-grid-column-full">
              <Header as="h2">Login</Header>
              <Content>Please login to your online account.</Content>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <ErrorSummary identifier="error-summary" errors={errors} />
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
                  name="password"
                  render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                    <PasswordInput
                      identifier="password"
                      label="Password"
                      required
                      multiQuestion
                      value={value}
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Button type="submit">Login</Button>
              </form>
            </div>
          </div>
          {submittedData && (
            <>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-full">
                  <Header as="h2">Login Request</Header>
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

export default Login
