import { Header, Content, NavLink } from "@pa-digital/govuk-frontend-react";
import { Helmet } from "react-helmet";

const SiteComponents = () => {
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="GOV.UK Design System, accessibility, Components"
        />
        <meta name="description" content="GOV.UK Design System Components" />
        <title>GDS - Components</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Components</Header>
              <Content>
                Here you can also see the correct way to list element links.
              </Content>
              <ul className="govuk-list">
                <li>
                  <NavLink to="/content" text="Written content example" />
                </li>
                <li>
                  <NavLink to="/navigation" text="Navigation example" />
                </li>
                <li>
                  <NavLink to="/buttons" text="Button example" />
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
                <li>
                  <NavLink to="/example" text="Implementation examples" />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default SiteComponents;
