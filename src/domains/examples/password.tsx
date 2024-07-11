import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  BackLink,
  Button,
  Content,
  ErrorSummary,
  Header,
  PasswordInput,
  RadioButtonDataProps,
  RadioButtons
} from "@pa-digital/govuk-frontend-react"
import {
  CredentialsRadioData,
  IPasswordForm,
  IPasswordRequest,
  mapFormToRequest
} from "./IPassword"
import { Helmet } from "react-helmet"

const schemaCredentials = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .max(30, "Password must not exceed 30 characters"),
  enableMFA: yup
    .mixed<RadioButtonDataProps[]>()
    .required("Decision on Multi Factor Authentication is required")
})

const Credentials = () => {
  const [submittedData, setSubmittedData] = useState<IPasswordRequest>()
  const {
    formState: { errors },
    control,
    handleSubmit
  } = useForm<IPasswordForm>({
    resolver: yupResolver(schemaCredentials),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      password: ""
    }
  })

  const onSubmit = (formData: IPasswordForm) => {
    setSubmittedData(mapFormToRequest(formData))
    return false
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Enter your address" />
        <meta name="description" content="Please let us know your address" />
        <title>Enter your address</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">Example Form - Credentials</Header>
              <Content>
                The following form shows how a password and radio button combination can be used.
              </Content>
              <hr />
            </div>
          </div>

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h2">Credential Options</Header>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <>
                  <ErrorSummary identifier="error-summary" errors={errors} />
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                      <PasswordInput
                        identifier="password"
                        label="Password"
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
                    name="enableMFA"
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                      <RadioButtons
                        identifier="enableMFA"
                        header="Do you want to enable MFA?"
                        multiQuestion
                        error={error?.message}
                        data={CredentialsRadioData}
                        onValueChange={onChange}
                      />
                    )}
                  />

                  <Button type="submit">Send</Button>
                </>
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

export default Credentials
