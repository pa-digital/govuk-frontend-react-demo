import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  BackLink,
  Button,
  ButtonGroup,
  Content,
  ErrorSummary,
  Header,
  TextInput,
  Select,
} from "@pa-digital/govuk-frontend-react";
import { AddressData } from "./AddressData";
import {
  AddressLookupMode,
  IAddressLookupForm,
  IAddressManualForm,
  IAddressRequest,
  mapFormToRequest,
  mapLookupToRequest,
} from "./IAddress";
import { Helmet } from "react-helmet";

const schemaLookup = yup.object().shape({
  lookupAddress: yup
    .string()
    .trim()
    .required("You must select an address or perform a manual entry"),
});

const schemaManual = yup.object().shape({
  addressLine1: yup
    .string()
    .trim()
    .required("Address line 1 is required")
    .max(30, "Address line 1 must not exceed 30 characters"),

  addressLine2: yup
    .string()
    .trim()
    .max(30, "Address line 2 must not exceed 30 characters"),

  town: yup
    .string()
    .trim()
    .required("Town is required")
    .max(20, "Town must not exceed 20 characters"),

  county: yup.string().trim().max(15, "County must not exceed 15 characters"),

  postCode: yup.string().trim().max(7, "Town must not exceed 7 characters"),
});

const Address = () => {
  const [submittedData, setSubmittedData] = useState<IAddressRequest>();
  const [addressMode, setAddressMode] = useState<AddressLookupMode>(
    AddressLookupMode.Auto
  );
  const {
    formState: { errors: lookupErrors },
    control: lookupControl,
    handleSubmit: handleLookupSubmit,
  } = useForm<IAddressLookupForm>({
    resolver: yupResolver(schemaLookup),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const {
    formState: { errors: manualErrors },
    control: manualControl,
    handleSubmit: handleManualSubmit,
  } = useForm<IAddressManualForm>({
    resolver: yupResolver(schemaManual),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onLookupSubmit = (formData: IAddressLookupForm) => {
    setSubmittedData(mapLookupToRequest(formData));
    return false;
  };

  const onManualSubmit = (formData: IAddressManualForm) => {
    setSubmittedData(mapFormToRequest(formData));
    return false;
  };

  useEffect(() => {}, [addressMode]);

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
              <Header as="h1">Example Form - Address Entry</Header>
              <Content>
                The following form shows one of the few examples of where a
                select can be used. A users address can be looked up.
              </Content>
              <hr />
            </div>
          </div>

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h2">Your address</Header>
              {addressMode === AddressLookupMode.Auto ? (
                <form onSubmit={handleLookupSubmit(onLookupSubmit)} noValidate>
                  <>
                    <ErrorSummary
                      identifier="error-summary"
                      errors={lookupErrors}
                    />
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <Content>
                          Please find the results for your post code search for
                          NW1 1AA.
                        </Content>
                        <Controller
                          control={lookupControl}
                          name="lookupAddress"
                          render={({
                            field: { value, onChange, onBlur },
                            fieldState: { error },
                          }) => (
                            <Select
                              identifier="lookupAddress"
                              label="Address"
                              required
                              options={AddressData}
                              value={value}
                              error={error?.message}
                              onValueChange={onChange}
                              onValueBlur={onBlur}
                            />
                          )}
                        />
                        <Button
                          variant="secondary"
                          onClick={() =>
                            setAddressMode(AddressLookupMode.Manual)
                          }
                        >
                          Can&apos;t find your address
                        </Button>
                      </div>
                    </div>
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-full">
                        <Button type="submit">Send</Button>
                      </div>
                    </div>
                  </>
                </form>
              ) : (
                <form onSubmit={handleManualSubmit(onManualSubmit)} noValidate>
                  <>
                    <ErrorSummary
                      identifier="error-summary"
                      errors={manualErrors}
                    />
                    <Controller
                      control={manualControl}
                      name="addressLine1"
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="addressLine1"
                          label="Address line 1"
                          required
                          value={value}
                          multiQuestion
                          error={error?.message}
                          autoComplete="address-line1"
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <Controller
                      control={manualControl}
                      name="addressLine2"
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="addressLine2"
                          label="Address line 2 (optional)"
                          value={value}
                          multiQuestion
                          autoComplete="address-line2"
                          error={error?.message}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <Controller
                      control={manualControl}
                      name="town"
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="town"
                          label="Town or city"
                          required
                          inputClassExt="govuk-!-width-two-thirds"
                          value={value}
                          multiQuestion
                          error={error?.message}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <Controller
                      control={manualControl}
                      name="county"
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="county"
                          label="County (optional)"
                          inputClassExt="govuk-!-width-two-thirds"
                          value={value}
                          multiQuestion
                          error={error?.message}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <Controller
                      control={manualControl}
                      name="postCode"
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="postCode"
                          label="Postcode (optional)"
                          inputClassExt="govuk-input--width-10"
                          value={value}
                          autoComplete="postal-code"
                          multiQuestion
                          error={error?.message}
                          onChange={onChange}
                          onBlur={onBlur}
                        />
                      )}
                    />
                    <ButtonGroup>
                      <Button type="submit">Send</Button>
                      <Button
                        variant="secondary"
                        onClick={() => setAddressMode(AddressLookupMode.Auto)}
                      >
                        Lookup address
                      </Button>
                    </ButtonGroup>
                  </>
                </form>
              )}
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

export default Address;
