import {
  CheckBoxDataProps,
  CheckBoxList,
  Content,
  Header,
  NavLink,
  Tabs,
  Tag,
  mapCheckBoxListToArray
} from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"

import {
  CheckBoxData,
  CompactCheckBoxData,
  ExclusiveCheckBoxData,
  InvalidCheckBoxData,
  NationalityCheckBoxData
} from "./FormData"
import { useState } from "react"

const FormCheckboxes = () => {
  const [checkBoxValues, setCheckBoxValues] = useState<[]>([])

  const handleCheckBoxChange = (values: CheckBoxDataProps[]) => {
    setCheckBoxValues(mapCheckBoxListToArray(values))
  }

  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Checkboxes" />
        <meta name="description" content="Checkboxes and the GOV.UK Design System" />
        <title>GDS - Checkboxes</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Checkboxes</Header>
              <Content>
                Use the checkbox list component to let users select one or more optionst.
              </Content>
              <Content>
                You can view the full implementation details for Checkboxes on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/checkboxes/"
                  text="Checkbox"
                  external
                />{" "}
                section of the GDS website.
              </Content>
              <Tabs
                heading="Checkboxes"
                tabs={[
                  {
                    title: "Standard",
                    children: (
                      <>
                        <Content>Standard implementation</Content>
                        <CheckBoxList
                          identifier="countries"
                          header="Will you be travelling to any of these countries?"
                          data={CheckBoxData}
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Compact",
                    children: (
                      <>
                        <Content>
                          Compact implementation - the sizes of the checkboxes are reduced to allow
                          for smaller screen estates.
                        </Content>
                        <CheckBoxList
                          identifier="organisation-compact"
                          header="Organisation"
                          data={CompactCheckBoxData}
                          compact
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Multi Page Question",
                    children: (
                      <>
                        <Content>
                          When the Checkboxes are not the only question, the heading is removed from
                          the label element
                        </Content>
                        <CheckBoxList
                          identifier="organisation-multi"
                          header="Organisation"
                          data={CompactCheckBoxData}
                          compact
                          multiQuestion
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Hints",
                    children: (
                      <>
                        <Content>
                          Hints can be added to both the Checkbox list and the individual items
                        </Content>
                        <CheckBoxList
                          identifier="nationality"
                          header="What is your nationality?"
                          hint="If you have dual nationality, select all options that are relevant to you."
                          data={NationalityCheckBoxData}
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Exclusive",
                    children: (
                      <>
                        <Content>An exclusive checkbox will clear all others when selected</Content>
                        <CheckBoxList
                          identifier="travelplans"
                          header="Will you be travelling to any of these countries?"
                          hint="Select all countries that apply"
                          data={ExclusiveCheckBoxData}
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Errors",
                    children: (
                      <>
                        <Content>
                          The standard GDS Error display is utilised for the Checkbox list
                        </Content>
                        <CheckBoxList
                          identifier="countries-error"
                          header="Will you be travelling to any of these countries?"
                          hint="Select all countries that apply"
                          data={InvalidCheckBoxData}
                          error='Select countries you will be travelling to, or select "No, I will not be travelling to any of these countries"'
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  },
                  {
                    title: "Toggle All",
                    children: (
                      <>
                        <Content>
                          <Tag>EXTENSION</Tag>
                          <p>
                            This is an extension to the formal GDS library but used frequently and
                            allows a toggle all component to toggle all checkboxes
                          </p>
                        </Content>
                        <CheckBoxList
                          identifier="toggle"
                          header="What is your nationality?"
                          hint="If you have dual nationality, select all options that are relevant to you."
                          data={NationalityCheckBoxData}
                          showToggle={true}
                          onValueChange={handleCheckBoxChange}
                        />
                      </>
                    )
                  }
                ]}
              />
              <Header as="h3">Checkbox data</Header>
              <pre>{JSON.stringify(checkBoxValues, null, 2)}</pre>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default FormCheckboxes
