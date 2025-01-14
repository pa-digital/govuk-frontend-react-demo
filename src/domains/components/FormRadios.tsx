import { Header, Content, NavLink, Tabs, RadioButtons } from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import {
  WhereDoYouLiveData,
  WhereDoYouLiveExtData,
  NameChangeData,
  PreSelectedNameChangeData,
  SignInData,
  ConditionalContact,
  ConditionalContactWithDivider,
  PrePopulatedConditionalContact,
  ConditionalContactWithHint,
  PrefixedConditionalContact,
  SuffixedConditionalContact,
  ErrorConditionalContact
} from "./FormData"

const FormRadios = () => {
  const onChange = (e: any) => {}

  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Radio Buttons" />
        <meta name="description" content="Radio Buttons and the GOV.UK Design System" />
        <title>GDS - Radio Buttons</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Radio Buttons</Header>
              <Header as="h2">Standard Implementation</Header>
              <Content>
                Use the radios component when users can only select one option from a list.
              </Content>
              <Content>
                You can view the full implementation details for Radio buttons on the{" "}
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
                    )
                  },
                  {
                    title: "Divider",
                    children: (
                      <>
                        <Content>
                          A divider can be used to separate a different answer from the others,
                          normally for when no others apply
                        </Content>
                        <RadioButtons
                          identifier="sign-in-choice"
                          header="Where do you live?"
                          data={WhereDoYouLiveExtData}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Compact",
                    children: (
                      <>
                        <Content>
                          Compact implementation - the sizes of the radio buttons are reduced to
                          allow for smaller screen estates.
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-compact"
                          header="Where do you live?"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                          compact
                        />
                      </>
                    )
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the Radio buttons are not the only question, the heading is removed
                          from the label element
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-multi"
                          header="Where do you live?"
                          data={WhereDoYouLiveData}
                          onValueChange={onChange}
                          multiQuestion
                        />
                      </>
                    )
                  },
                  {
                    title: "Inline",
                    children: (
                      <>
                        <Content>
                          The Radio buttons can be styled to appear horizontal. This will revert to
                          vertical on smaller screens.
                        </Content>
                        <RadioButtons
                          identifier="name-changed"
                          header="Have you changed your name?"
                          data={NameChangeData}
                          onValueChange={onChange}
                          render="inline"
                        />
                      </>
                    )
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
                    )
                  },
                  {
                    title: "Hints",
                    children: (
                      <>
                        <Content>
                          Hints can be added to both the Radio buttons and the individual items
                        </Content>
                        <RadioButtons
                          identifier="sign-in-choice-hints"
                          header="How do you want to sign in?"
                          hint="You'll need an account to prove your identity and complete your Self Assessment."
                          data={SignInData}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for the Radio buttons
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
                    )
                  }
                ]}
              />
              <Header as="h2">Conditional Input Implementation</Header>
              <Content>
                Conditional inputs are used when you want the user to expand on their selection
                using a more context driven question.
              </Content>
              <Content>
                This can often be done for example for selecting a phone number or email address,
                depending on their contact preferences.
              </Content>
              <Tabs
                heading="Conditional Radio buttons"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>Standard Conditional implementation</Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you"
                          header="How should we contact you?"
                          data={ConditionalContact}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Divider",
                    children: (
                      <>
                        <Content>
                          A divider can be used to separate a different answer from the others,
                          normally for when no others apply
                        </Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you-divider"
                          header="How should we contact you?"
                          data={ConditionalContactWithDivider}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Compact",
                    children: (
                      <>
                        <Content>
                          Compact implementation - the sizes of the radio buttons are reduced to
                          allow for smaller screen estates.
                        </Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you-compact"
                          header="How should we contact you?"
                          data={ConditionalContact}
                          compact
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the Radio buttons are not the only question, the heading is removed
                          from the label element. The Conditional inputs are always set as Muti
                          Question to avoid H1 clashes.
                        </Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you-multi"
                          header="How should we contact you?"
                          data={ConditionalContact}
                          compact
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Selected",
                    children: (
                      <>
                        <Content>
                          A value can be pre-selected as well as the data in the conditional inputs
                        </Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you-populated"
                          header="How should we contact you?"
                          data={PrePopulatedConditionalContact}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Hints",
                    children: (
                      <>
                        <Content>
                          Hints can be added to both the Radio buttons and the individual items and
                          conditional inputs
                        </Content>
                        <RadioButtons
                          identifier="how-should-we-contact-you-hints"
                          header="How should we contact you?"
                          hint="You will need to select the option you used when signing up for the service."
                          data={ConditionalContactWithHint}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Prefix",
                    children: (
                      <>
                        <Content>
                          Prefixes and/or suffixes can be added to conditional inputs
                        </Content>
                        <RadioButtons
                          identifier="how-would-you-like-to-pay"
                          header="What currency would you like to pay using?"
                          data={PrefixedConditionalContact}
                          onValueChange={onChange}
                        />
                        <RadioButtons
                          identifier="how-would-you-record-speed"
                          header="What currency would you like to record the speed?"
                          data={SuffixedConditionalContact}
                          onValueChange={onChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The GDS Error display applies to the conditional item in the Radio Button
                          when it is used.
                        </Content>
                        <RadioButtons
                          identifier="where-do-you-live-error"
                          header="Where do you live?"
                          error="Select the country where you live"
                          data={ErrorConditionalContact}
                          onValueChange={onChange}
                          required
                        />
                      </>
                    )
                  }
                ]}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default FormRadios
