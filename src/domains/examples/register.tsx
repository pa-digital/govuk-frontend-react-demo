import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Helmet } from "react-helmet"
import {
  BackLink,
  Header,
  Content,
  TextInput,
  Button,
  Select,
  ErrorSummary,
  PasswordInput,
  CheckBoxList,
  CheckBoxDataProps,
  SelectDataProps
} from "@pa-digital/govuk-frontend-react"
import "../../styling/pret.scss"
import { IRegisterRequest, IRegisterForm, mapFormToRequest } from "./IRegister"

const locations: SelectDataProps[] = [
  {
    text: "Choose a location",
    value: ""
  },
  {
    text: "United Kingdom",
    value: "uk"
  },
  {
    text: "USA",
    value: "usa"
  },
  {
    text: "France",
    value: "france"
  }
]

const marketingOptions: CheckBoxDataProps[] = [
  {
    text: "Email",
    value: "email"
  },
  {
    text: "SMS",
    value: "sms"
  }
]

const defaultValues: IRegisterForm = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  location: []
}

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Enter your first name")
    .max(30, "First name must not exceed 30 characters"),

  lastName: yup
    .string()
    .trim()
    .required("Enter your last name")
    .max(30, "Last name must not exceed 30 characters"),

  phoneNumber: yup
    .string()
    .trim()
    .required("Enter your mobile number")
    .matches(/^[0-9-]{1,15}$/, "Phone number must be a number")
    .max(30, "Phone number must not exceed 30 characters"),

  email: yup
    .string()
    .trim()
    .required("Enter your email address")
    .email("A valid email address is required")
    .max(200, "Email address not exceed 200 characters"),

  password: yup
    .string()
    .trim()
    .required("Enter a password to continue")
    .max(200, "Password not exceed 200 characters"),

  location: yup
    .array()
    .of(
      yup.object().shape({
        text: yup.string().required(),
        value: yup.string().required()
      })
    )
    .nullable()
    .test("at-least-one-valid-location", "Please choose a location", locations =>
      locations?.some(location => location.value.trim() !== "")
    )
    .required("Please choose a location")
})

const PretBranded = () => {
  const [submittedData, setSubmittedData] = useState<IRegisterRequest>()
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: defaultValues
  })

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const selectedLocation = locations.find(loc => loc.value === value) || { text: "", value: "" }
    setValue("location", [selectedLocation])
  }

  const handleLocationBlur = (event: React.FocusEvent<HTMLSelectElement>) => {
    const value = event.target.value
    const selectedLocation = locations.find(loc => loc.value === value) || { text: "", value: "" }
    setValue("location", [selectedLocation])
  }

  const onSubmit = (formData: IRegisterForm) => {
    console.log("Form", JSON.stringify(formData, null, 2))
    //setSubmittedData(mapFormToRequest(formData))
    return false
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Register" />
        <meta name="description" content="Register for a new account" />
        <title>Pret A Manger Branding</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">Pret A Manger Branding</Header>
              <Content>
                Branding of the GDS components can be achieved with care to ensure WCAG Compliance
                remains. Here is an example of a Pret A Manger branded implementation.
              </Content>
              <hr />
            </div>
          </div>
          <div className="pret-brand">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Getting to know you</Header>
                <Content>Tell us a bit about yourself!</Content>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                  <ErrorSummary identifier="error-summary" errors={errors} />
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                      <TextInput
                        identifier="firstName"
                        label="First name"
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
                    name="phoneNumber"
                    render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                      <TextInput
                        identifier="phoneNumber"
                        label="Mobile number"
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
                        label="Email address"
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
                  <Controller
                    control={control}
                    name="location"
                    render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
                      <Select
                        identifier="location"
                        label="Where do you live?"
                        onValueBlur={handleLocationBlur}
                        onValueChange={handleLocationChange}
                        options={locations}
                        error={error?.message}
                      />
                    )}
                  />
                  <Button type="submit">Create account</Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default PretBranded
