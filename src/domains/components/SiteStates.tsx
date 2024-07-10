import {
  Header,
  Content,
  Tabs,
  NavLink,
  Phase,
  Tag,
  Panel,
  Notification,
  Warning
} from "@pa-digital/govuk-frontend-react";
import { Helmet } from "react-helmet";

const SiteStates = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GOV.UK Design System, accessibility, states"
        />
        <meta
          name="description"
          content="States and the GOV.UK Design System"
        />
        <title>GDS - States</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">State Components</Header>
              <Content>
                A breakdown of some of the more commonly used GDS components for
                status.
              </Content>
              <Tabs
                heading="Status Components"
                tabs={[
                  {
                    title: "Phase",
                    children: (
                      <>
                        <Header as="h2">Phase</Header>
                        <Content>
                          Use the phase banner component to show users your
                          service is still being worked on.
                        </Content>
                        <Content>
                          You can view full typography implementation details on
                          the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/phase-banner/"
                            text="Phase banner"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Phase phase="ALPHA">
                          <>
                            This is a new service – your{" "}
                            <NavLink
                              to="https://www.google.co.uk"
                              text="feedback"
                              external
                            />{" "}
                            will help us to improve it.
                          </>
                        </Phase>
                      </>
                    ),
                  },
                  {
                    title: "Tags",
                    children: (
                      <>
                        <Header as="h2">Tag</Header>
                        <Content>
                          Use the tag component to show users the status of
                          something.
                        </Content>
                        <Content>
                          You can view full typography implementation details on
                          the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/tag/"
                            text="Tag"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Tag>COMPLETED</Tag>
                        <hr />
                        <Content>
                          You can also theme the tags but remember you must not
                          infer meaning by colour alone.
                        </Content>
                        <div className="govuk-grid-row">
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag>COMPLETED</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="grey">INACTIVE</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="green">NEW</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="turquoise">ACTIVE</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="blue">PENDING</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="purple">RECEIVED</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="pink">SENT</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="red">REJECTED</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="orange">DECLINED</Tag>
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-quarter">
                            <Content>
                              <Tag state="yellow">DELAYED</Tag>
                            </Content>
                          </div>
                        </div>
                      </>
                    ),
                  },
                  {
                    title: "Notification",
                    children: (
                      <>
                        <Header as="h2">Notification</Header>
                        <Content>
                          Use a notification banner to tell the user about
                          something they need to know about, but that&apos;s not
                          directly related to the page content.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/notification-banner/"
                            text="Notification"
                            assistiveText="implementation information for the notification component"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Notification
                          identifier="notification"
                          heading="Important"
                          content={[
                            {
                              text: "You have 7 days left to send your application.",
                              link: {
                                to: "#",
                                text: "View application",
                                assistiveText:
                                  "View full details and progress of your application",
                              },
                            },
                          ]}
                        />
                      </>
                    ),
                  },
                  {
                    title: "Panels",
                    children: (
                      <>
                        <Header as="h2">Panels</Header>
                        <Content>
                          The panel component is a visible container used on
                          confirmation or results pages to highlight important
                          content.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/panel/"
                            text="Panel"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <hr />
                        <Panel heading="Application complete">
                          <>
                            Your reference number
                            <br />
                            <strong>HDJ2123F</strong>
                          </>
                        </Panel>
                      </>
                    ),
                  },
                  {
                    title: "Warning",
                    children: (
                      <>
                        <Header as="h2">Warning Text</Header>
                        <Content>
                          Use the warning text component when you need to warn users about something important, such as legal consequences of an action, or lack of action, that they might take.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/warning-text/"
                            text="Warning Text"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <hr />
                         <Warning>This is the warning</Warning>
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

export default SiteStates;
