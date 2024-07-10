import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet";
import {
  IContactUsForm,
  IContactUsRequest,
  mapFormToRequest,
} from "./IContactUs";
import { useState } from "react";
import {
  BackLink,
  Button,
  CheckBoxDataProps,
  Content,
  DateInput,
  DateInputState,
  ErrorSummary,
  Header,
  TextInput,
  CheckBoxList,
} from "@pa-digital/govuk-frontend-react";

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
    .mixed<DateInputState>()
    .test(
      "required_validation",
      "You must enter a date",
      (value: DateInputState | undefined) => {
        if (
          value &&
          value.day === "" &&
          value.month === "" &&
          value.year === ""
        ) {
          return false;
        }
        return true;
      }
    )
    .test(
      "day_validation",
      "You must enter a valid day",
      (value: DateInputState | undefined) => {
        if (
          value &&
          value.day &&
          parseInt(value.day) > 0 &&
          parseInt(value.day) <= 31
        ) {
          return true;
        }
        return false;
      }
    )
    .test(
      "month_validation",
      "You must enter a valid month",
      (value: DateInputState | undefined) => {
        if (
          value &&
          value.month &&
          parseInt(value.month) > 0 &&
          parseInt(value.month) <= 12
        ) {
          return true;
        }
        return false;
      }
    )
    .test(
      "year_validation",
      "You must enter a valid year",
      (value: DateInputState | undefined) => {
        if (
          value &&
          value.year &&
          parseInt(value.year) > 0 &&
          parseInt(value.year) <= new Date().getFullYear()
        ) {
          return true;
        }
        return false;
      }
    ),

  interests: yup
    .array<CheckBoxDataProps>()
    .test(
      "interest_validation",
      "You must select at least one interest",
      (value: CheckBoxDataProps[] | undefined) => {
        if (value && value.filter((x) => x.checked).length > 0) {
          return true;
        }
        return false;
      }
    ),
});

const InterestsData: CheckBoxDataProps[] = [
  {
    text: "React",
    value: "react",
  },
  {
    text: "Node JS",
    value: "nodejs",
  },
  {
    text: "Astro",
    value: "astro",
  },
  {
    text: "Accessibility",
    value: "accessibility",
  },
];

const ContactUs = () => {
  const [submittedData, setSubmittedData] = useState<IContactUsRequest>();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IContactUsForm>({
    resolver: yupResolver(schema),
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
        year: "",
      },
      interests: InterestsData,
    },
  });

  const onSubmit = (formData: IContactUsForm) => {
    setSubmittedData(mapFormToRequest(formData));
    return false;
  };

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Contact us, get in touch" />
        <meta
          name="description"
          content="Get in touch to register your interests"
        />
        <title>Register your interests</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">Example Form - Registration</Header>
              <Content>
                The following form shows how a user is validated on registering.
                The succesful data is shown after completion.
              </Content>
              <hr />
            </div>
          </div>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Header as="h2">Register</Header>
                <Content>
                  Please register your interest using the form below.
                </Content>
                <ErrorSummary identifier="error-summary" errors={errors} />
                <Controller
                  control={control}
                  name="firstName"
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
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
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
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
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
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
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <DateInput
                      identifier="dateOfBirth"
                      label="Date of birth"
                      required
                      multiQuestion
                      error={error?.message}
                      value={value}
                      onValueChange={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="interests"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
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
                <Content as="pre">
                  {JSON.stringify(submittedData, null, 2)}
                </Content>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default ContactUs;
