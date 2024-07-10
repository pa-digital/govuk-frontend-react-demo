import {
  Header,
  Content,
  NavLink,
  Tabs,
  DateInput,
  errorTypeEnum,
} from "@pa-digital/govuk-frontend-react";
import { Helmet } from "react-helmet";

const FormDateInputs = () => {
  const onValueChange = (e: any) => {};

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GOV.UK Design System, accessibility, date inputs"
        />
        <meta
          name="description"
          content="Date Inputs and the GOV.UK Design System"
        />
        <title>GDS - Date Inputs</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Date Inputs</Header>
              <Content>
                Use the date input component to help users enter a memorable
                date or one they can easily look up.
              </Content>
              <Content>
                You can view the full implementation details for selects on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/date-input/"
                  text="Date Input"
                  external
                />{" "}
                section of the GDS website.
              </Content>
              <Tabs
                heading="Date inputs"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>Standard implementation</Content>
                        <DateInput
                          identifier="passport-issued"
                          label="When was your passport issued?"
                          hint="For example, 27 3 2007"
                          onValueChange={onValueChange}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the Date input is not the only question, the
                          heading is removed from the label element
                        </Content>
                        <DateInput
                          identifier="passport-issued-multi"
                          label="When was your passport issued?"
                          hint="For example, 27 3 2007"
                          multiQuestion
                          onValueChange={onValueChange}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Date Input Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for the
                          Date input and can be for all elements or individual
                        </Content>
                        <DateInput
                          identifier="passport-issued-1"
                          label="When was your passport issued?"
                          hint="For example, 27 3 2007"
                          error="You must enter the date your passport was issued"
                          errorType={errorTypeEnum.all}
                          onValueChange={onValueChange}
                        />
                        <DateInput
                          identifier="passport-issued-2"
                          label="When was your passport issued?"
                          hint="For example, 27 3 2007"
                          error="You must enter a valid year"
                          errorType={errorTypeEnum.year}
                          value={{ day: "21", month: "3", year: "xxxx" }}
                          onValueChange={onValueChange}
                        />
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FormDateInputs;
