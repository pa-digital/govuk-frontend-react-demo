import { Header, Content, Tabs, SummaryList, NavLink } from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import {
  ActionSummaryData,
  MissingSummaryData,
  PartialActionSummaryData,
  SummaryData
} from "./FormData"

const SiteSummaryList = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Content" />
        <meta name="description" content="Lists and the GOV.UK Design System" />
        <title>GDS - Summary List</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Summary List Component</Header>
              <Content>
                A breakdown of some of the more commonly used GDS components for lists.
              </Content>
              <Tabs
                heading="Content Components"
                tabs={[
                  {
                    title: "Summary List",
                    children: (
                      <>
                        <Header as="h2">Summary List</Header>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/summary-list/"
                            text="Summary List"
                            assistiveText="implementation information for the summary list component"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Header as="h3">Standard Implementation</Header>
                        <Content>A summary allows the user to review what they have done.</Content>
                        <SummaryList list={SummaryData} />
                      </>
                    )
                  },
                  {
                    title: "Partial Actions",
                    children: (
                      <>
                        <Content>A summary list can also contain partial actions.</Content>
                        <SummaryList list={PartialActionSummaryData} />
                      </>
                    )
                  },
                  {
                    title: "Multiple Actions",
                    children: (
                      <>
                        <Content>A summary list can also contain multiple actions.</Content>
                        <SummaryList list={ActionSummaryData} />
                      </>
                    )
                  },
                  {
                    title: "Hidden Borders",
                    children: (
                      <>
                        <Content>A summary list can have the borders hidden.</Content>
                        <SummaryList list={ActionSummaryData} hideBorders />
                      </>
                    )
                  },
                  {
                    title: "Missing Information",
                    children: (
                      <>
                        <Content>
                          A summary list can have the option to prompt a user to add missing
                          information.
                        </Content>
                        <SummaryList list={MissingSummaryData} />
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

export default SiteSummaryList
