import {
  Header,
  Content,
  NavLink,
  Tabs,
  ButtonGroup,
  Button,
  CTAButton,
} from "@pa-digital/govuk-frontend-react";
import { Helmet } from "react-helmet";

const FormButtons = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GOV.UK Design System, accessibility, Buttons"
        />
        <meta
          name="description"
          content="Buttons and the GOV.UK Design System"
        />
        <title>GDS - Buttons</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Button Components</Header>
              <Content>
                Use the button component to help users carry out an action like
                starting an application (Call to action) or saving their
                information (Standard).
              </Content>
              <Content>
                Both Buttons and Call to Actions can take three themes as well
                as being in a disabled state.
              </Content>
              <Content>
                You can view the full implementation details for Buttons on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/button/"
                  text="Button"
                  external
                />{" "}
                section of the GDS website.
              </Content>
              <Tabs
                heading="Button components"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <ButtonGroup>
                          <Button>default</Button>
                          <Button variant="secondary">secondary</Button>
                          <Button variant="warning">warning</Button>
                          <Button disabled>disabled</Button>
                        </ButtonGroup>
                      </>
                    ),
                  },
                  {
                    title: "Call To Action",
                    children: (
                      <>
                        <ButtonGroup>
                          <CTAButton to="/">default</CTAButton>
                          <CTAButton to="/" variant="secondary">
                            secondary
                          </CTAButton>
                          <CTAButton
                            to="/"
                            variant="warning"
                            assistiveText="A warning of what this will do"
                          >
                            warning
                          </CTAButton>
                          <CTAButton to="/" disabled>
                            disabled
                          </CTAButton>
                        </ButtonGroup>
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

export default FormButtons;
