import {
  Header,
  Content,
  NavLink,
  Tabs,
  RadioButtons,
} from "@pa-digital/govuk-frontend-react";
import { Helmet } from "react-helmet";
import {
  WhereDoYouLiveData,
  WhereDoYouLiveExtData,
  NameChangeData,
  PreSelectedNameChangeData,
  SignInData,
} from "./FormData";

const FormRadios = () => {
  const onChange = (e: any) => {};

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GOV.UK Design System, accessibility, Radio Buttons"
        />
        <meta
          name="description"
          content="Radio Buttons and the GOV.UK Design System"
        />
        <title>GDS - Radio Buttons</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Radio Buttons</Header>
              <Content>
                Use the radios component when users can only select one option
                from a list.
              </Content>
              <Content>
                You can view the full implementation details for Radio buttons
                on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/radios/"
                  text="Radios"
                  external
                />{" "}
                section of the GDS website.
              </Content>
              <Tabs
                heading="Radio buttons"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>Standard implementation</Content>
                        <RadioButtons
                          identifier="where-do-you-live"
                          header="Where do you live?"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Divider",
                    children: (
                      <>
                        <Content>
                          A divider can be used to separate a different answer
                          from the others, normally for when no others apply
                        </Content>
                        <RadioButtons
                          identifier="sign-in-choice"
                          header="Where do you live?"
                          data={WhereDoYouLiveExtData}
                          onValueChange={onChange}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Compact",
                    children: (
                      <>
                        <Content>
                          Compact implementation - the sizes of the radio
                          buttons are reduced to allow for smaller screen
                          estates.
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-compact"
                          header="Where do you live?"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                          compact
                        />
                      </>
                    ),
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the Radio buttons are not the only question, the
                          heading is removed from the label element
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-multi"
                          header="Where do you live?"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                          multiQuestion
                        />
                      </>
                    ),
                  },
                  {
                    title: "Inline",
                    children: (
                      <>
                        <Content>
                          The Radio buttons can be styled to appear horizontal.
                          This will revert to vertical on smaller screens.
                        </Content>
                        <RadioButtons
                          identifier="name-changed"
                          header="Have you changed your name?"
                          data={NameChangeData}
                          onValueChange={onChange}
                          render="inline"
                        />
                      </>
                    ),
                  },
                  {
                    title: "Selected",
                    children: (
                      <>
                        <Content>A value can be pre-selected</Content>
                        <RadioButtons
                          identifier="name-changed-preselected"
                          header="Have you changed your name?"
                          data={PreSelectedNameChangeData}
                          onValueChange={onChange}
                          render="inline"
                        />
                      </>
                    ),
                  },
                  {
                    title: "Hints",
                    children: (
                      <>
                        <Content>
                          Hints can be added to both the Radio buttons and the
                          individual items
                        </Content>
                        <RadioButtons
                          identifier="sign-in-choice-hints"
                          header="How do you want to sign in?"
                          hint="You'll need an account to prove your identity and complete your Self Assessment."
                          data={SignInData}
                          onValueChange={onChange}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for the
                          Radio buttons
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-error"
                          header="Where do you live?"
                          error="Select the country where you live"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                          required
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

export default FormRadios;
