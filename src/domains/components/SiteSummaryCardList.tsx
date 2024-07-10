import { useEffect, useState } from "react"
import {
  Header,
  Content,
  Tabs,
  NavLink,
  SummaryCardList,
  CardListAction
} from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import { CardActionSummaryCards, NoCardActionSummaryCards } from "./FormData"

const SiteSummaryCardList = () => {
  const [summaryCardListValues, setSummaryCardListValues] = useState<CardListAction>()

  const handleSummaryCardList = (values: CardListAction) => {
    setSummaryCardListValues(values)
  }

  useEffect(() => {}, [summaryCardListValues])

  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Content" />
        <meta name="description" content="Lists and the GOV.UK Design System" />
        <title>GDS - Summary Card List</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Summary Card List Component</Header>
              <Content>
                A breakdown of some of the more commonly used GDS components for lists.
              </Content>
              <Tabs
                heading="Content Components"
                tabs={[
                  {
                    title: "Summary Cards",
                    children: (
                      <>
                        <Header as="h2">Summary Cards</Header>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/summary-list/#summary-cards"
                            text="Summary Cards"
                            assistiveText="implementation information for the summary card component"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Content>
                          The Summary Card List implements the Summary List to display the data.
                        </Content>
                        <Header as="h3">Standard Implementation</Header>
                        <Content>This list has no specific actions from the cards.</Content>
                        <SummaryCardList
                          identifier="no-actions"
                          cards={NoCardActionSummaryCards}
                          handleAction={handleSummaryCardList}></SummaryCardList>
                      </>
                    )
                  },
                  {
                    title: "Actions",
                    children: (
                      <>
                        <Content>This list has actions from the cards.</Content>
                        <SummaryCardList
                          identifier="with-actions"
                          cards={CardActionSummaryCards}
                          handleAction={handleSummaryCardList}></SummaryCardList>
                      </>
                    )
                  }
                ]}
              />
              <Header as="h3">Summary Card List Action data</Header>
              <pre>{JSON.stringify(summaryCardListValues, null, 2)}</pre>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default SiteSummaryCardList
