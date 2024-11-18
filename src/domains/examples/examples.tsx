import { Header, Content, NavLink } from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"

const Examples = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Examples" />
        <meta name="description" content="GOV.UK Design System Examples" />
        <title>GDS - Examples</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Examples</Header>
              <Content>
                Here you can also see some implementations of the GDS Framework being implemented.
              </Content>
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
                  <NavLink to="/login" text="Branded Login example" />
                </li>
                <li>
                  <NavLink to="/nihr" text="NIHR Branded example" />
                </li>
                <li>
                  <NavLink to="/pretregister" text="Pret A Manger Branded example" />
                </li>
                <li>
                  <NavLink to="/builder" text="Question Set Builder example" />
                </li>
                <li>
                  <NavLink to="/protoBuilder" text="Rapid Prototype Builder" />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Examples
