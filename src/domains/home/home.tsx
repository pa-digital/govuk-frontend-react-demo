import { Header, Content, NavLink, Tabs } from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GDS, accessibility" />
        <meta name="description" content="Implementing the GDS Design System" />
        <title>Implementing the GOV.UK Design System</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">GOV.UK Design System</Header>
              <Content>
                The GOV.UK Design System is a set of components and styles designed for consistency
                and accessibility. We will refer to it as GDS.
              </Content>
              <Content>
                This project is designed to demonstrate a simple implementation of form elements
                using the GDS component system.
              </Content>
              <Content>
                All examples have links to the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/"
                  external
                  text="GOV.UK Design System website"
                />{" "}
                to view the full implementation instructions.
              </Content>
              <Tabs
                heading="Components and Examples"
                tabs={[
                  {
                    title: "Components",
                    children: (
                      <>
                        {" "}
                        <ul className="govuk-list">
                          <li>
                            <NavLink to="/content" text="Written content example" />
                          </li>
                          <li>
                            <NavLink to="/states" text="State examples" />
                          </li>
                          <li>
                            <NavLink to="/navigation" text="Navigation example" />
                          </li>
                          <li>
                            <NavLink to="/buttons" text="Button example" />
                          </li>
                          <li>
                            <NavLink to="/summary-list" text="Summary List example" />
                          </li>
                          <li>
                            <NavLink to="/summary-card-list" text="Summary Card List example" />
                          </li>
                          <li>
                            <NavLink to="/checkboxes" text="Checkboxes example" />
                          </li>
                          <li>
                            <NavLink to="/radios" text="Radio buttons example" />
                          </li>
                          <li>
                            <NavLink to="/input" text="Standard inputs example" />
                          </li>
                          <li>
                            <NavLink to="/date" text="Date inputs example" />
                          </li>
                          <li>
                            <NavLink to="/select" text="Select inputs example" />
                          </li>
                        </ul>
                      </>
                    )
                  },
                  {
                    title: "Examples",
                    children: (
                      <>
                        <ul className="govuk-list">
                          <li>
                            <NavLink to="/register" text="Registration example" />
                          </li>
                          <li>
                            <NavLink to="/address" text="Address lookup example" />
                          </li>
                          <li>
                            <NavLink to="/credentials" text="Credential entry example" />
                          </li>
                          <li>
                            <NavLink to="/login" text="NIHR branded Login screen example" />
                          </li>
                          <li>
                            <NavLink
                              to="/pretregister"
                              text="Pret A Manger branded Register screen example"
                            />
                          </li>
                          <li>
                            <NavLink to="/builder" text="Question Set Builder example" />
                          </li>
                          <li>
                            <NavLink to="/protoBuilder" text="Rapid Prototype Builder" />
                          </li>
                        </ul>
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
export default Home
