import { Header, Content, NavLink, Tabs, Select } from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import { UnSelectedData, PreSelectedData, LocationData } from "./FormData"

const FormSelect = () => {
  const onChange = (e: any) => {
    console.log("Change:", e.target.value)
  }
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Select" />
        <meta name="description" content="Selects and the GOV.UK Design System" />
        <title>GDS- Selects</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Selects</Header>
              <Content>
                The select component should only be used as a last resort in public-facing services
                because research shows that some users find selects very difficult to use.
              </Content>
              <Content>
                You can view the full implementation details for selects on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/select/"
                  text="Select"
                  external
                />{" "}
                section of the GDS website.
              </Content>
              <Tabs
                heading="Selects"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>Standard implementation</Content>
                        <Select
                          identifier="SortBy"
                          label="Sort by"
                          options={UnSelectedData}
                          onValueChange={onChange}
                          onValueBlur={onChange}></Select>
                      </>
                    )
                  },
                  {
                    title: "Pre-Selected",
                    children: (
                      <>
                        <Content>
                          The select list can be pre-polulated with a selected value
                        </Content>
                        <Select
                          identifier="SortBySelected"
                          label="Sort by"
                          options={PreSelectedData}
                          value="updated"
                          onValueChange={onChange}
                          onValueBlur={onChange}></Select>
                      </>
                    )
                  },
                  {
                    title: "Hint",
                    children: (
                      <>
                        <Content>A hint can be applied to assist the user</Content>
                        <Select
                          identifier="Location"
                          label="Choose location"
                          hint="This can be different to where you went before"
                          options={LocationData}
                          onValueChange={onChange}
                          onValueBlur={onChange}></Select>
                      </>
                    )
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for the select list
                        </Content>
                        <Select
                          identifier="LocationError"
                          label="Choose location"
                          error="You must select where you have been before"
                          options={LocationData}
                          onValueChange={onChange}
                          onValueBlur={onChange}></Select>
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

export default FormSelect
