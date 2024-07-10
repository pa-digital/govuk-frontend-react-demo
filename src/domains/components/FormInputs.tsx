import {
  Header,
  Content,
  NavLink,
  Tabs,
  TextInput,
  TextArea,
  TextCounter,
  PasswordInput
} from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"

const FormInputs = () => {
  const handleEvents = (e: any) => {
    console.log(JSON.stringify(e, null, 2))
  }
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, inputs" />
        <meta name="description" content="Inputs and the GOV.UK Design System" />
        <title>GDS - Inputs</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Inputs</Header>
              <Content>
                User inputs for text can come as a standard html input or a text area with various
                properties being set.
              </Content>

              <Tabs
                heading=""
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>
                          Use the text input component when you need to let users enter text
                          that&apos;s no longer than a single line, such as their name or phone
                          number. Inputs can be typed to optimise keyboard layout for numeric or
                          email inputs.
                        </Content>
                        <Content>
                          You can view the full implementation details for the Text Input on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/text-input/"
                            text="Text Input"
                            external
                            assistiveText="Component details for the Text input on the GDS website"
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <TextInput
                          identifier="event-name"
                          label="What is the name of the event?"
                          required
                          onChange={handleEvents}
                          onBlur={handleEvents}
                        />
                      </>
                    )
                  },
                  {
                    title: "Password",
                    children: (
                      <>
                        <Content>
                          This element is now a standalone component and has replaced using the
                          "password" input type.
                        </Content>
                        <Content>
                          You should migrate to this implementation as the "password" has been
                          depreciated and will be removed in the next version.
                        </Content>
                        <PasswordInput
                          identifier="password"
                          label="What is your password?"
                          required
                          onChange={handleEvents}
                          onBlur={handleEvents}
                        />
                      </>
                    )
                  },
                  {
                    title: "Text Area",
                    children: (
                      <>
                        <Content>
                          A Text Area is used for inputs which will take more than one line and can
                          be free form.
                        </Content>
                        <Content>
                          You can view the full implementation details for the Text Area on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/textarea/"
                            text="Text Area"
                            external
                            assistiveText="Component details for the Text Area input on the GDS website"
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <TextArea
                          identifier="more-detail"
                          label="Can you provide more detail?"
                          hint="Do not include personal or financial information, like your National Insurance number or credit card details."
                          required
                          onChange={handleEvents}
                          onBlur={handleEvents}
                        />
                      </>
                    )
                  },
                  {
                    title: "Text Counter",
                    children: (
                      <>
                        <Content>
                          Help users know how much text they can enter when there is a limit on the
                          number of characters.
                        </Content>
                        <Content>
                          You can view the full implementation details for the Text Counter on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/character-count/"
                            text="Character count"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <Content>
                          The counter can be configured to count characters or words and also have a
                          threshold which will mask the countdown until it is reached.
                        </Content>
                        <TextCounter
                          identifier="text-counter"
                          label="Can you provide more detail?"
                          hint="Please provide this information in as much detail as you can"
                          required
                          maxCount={50}
                          counterType="character"
                          onChange={handleEvents}
                          onBlur={handleEvents}
                        />
                      </>
                    )
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the inputs are not the only question, the heading is removed from the
                          label element
                        </Content>
                        <TextInput
                          identifier="more-detail-multi"
                          label="Can you provide more detail?"
                          hint="Do not include personal or financial information, like your National Insurance number or credit card details."
                          required
                          multiQuestion
                          onChange={handleEvents}
                          onBlur={handleEvents}
                        />
                      </>
                    )
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for all the text input elements
                        </Content>
                        <TextInput
                          identifier="more-detail-error"
                          label="Can you provide more detail?"
                          hint="Do not include personal or financial information, like your National Insurance number or credit card details."
                          required
                          error="You must provide more detail"
                          onChange={handleEvents}
                          onBlur={handleEvents}
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

export default FormInputs
