import {
  Header,
  Content,
  Tabs,
  NavLink,
  BackLink,
  Breadcrumbs,
  Button,
  Pagination,
  ExitPage
} from "@pa-digital/govuk-frontend-react"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { BreadcrumbLinks, BreadcrumbLinksCollapse } from "./FormData"

const NavigationElements = () => {
  const [standardPaging, setStandardPaging] = useState(3)
  const [firstPaging, setFirstPaging] = useState(1)
  const [lastPaging, setLastPaging] = useState(5)
  const [largePaging, setLargePaging] = useState(6)
  const [smallPaging, setSmallPaging] = useState(2)
  const [currentTab, setCurrentTab] = useState(0)

  const resetPagination = () => {
    setStandardPaging(3)
    setFirstPaging(1)
    setLastPaging(5)
    setLargePaging(6)
    setSmallPaging(2)
  }

  const handleStandardPageChange = (newPage: number) => {
    setStandardPaging(newPage)
  }

  const handleFirstPageChange = (newPage: number) => {
    setFirstPaging(newPage)
  }

  const handleLastPageChange = (newPage: number) => {
    setLastPaging(newPage)
  }

  const handleLargePageChange = (newPage: number) => {
    setLargePaging(newPage)
  }

  const handleSmallPageChange = (newPage: number) => {
    setSmallPaging(newPage)
  }

  useEffect(() => {
    setCurrentTab(2)
  }, [standardPaging, firstPaging, lastPaging, largePaging, smallPaging])

  useEffect(() => {
    setCurrentTab(0)
  }, [])

  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Navigation" />
        <meta name="description" content="Navigation and the GOV.UK Design System" />
        <title>GDS - Navigation</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Navigation Components</Header>
              <Content>
                A breakdown of some of the more commonly used GDS components for navigation.
              </Content>
              <Tabs
                heading="Navigation components"
                tabs={[
                  {
                    title: "Back Link",
                    selected: currentTab === 0,
                    children: (
                      <>
                        <Header as="h2">Backlink</Header>
                        <Content>
                          Use the back link component to help users go back to the previous page in
                          a multi-page transaction.
                        </Content>
                        <Content>
                          You can view the full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/back-link/"
                            text="Back Link"
                            assistiveText="Full details of how to implement the Back Link GDS component"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <BackLink to="/" />
                      </>
                    )
                  },
                  {
                    title: "Nav Link",
                    selected: currentTab === 1,
                    children: (
                      <>
                        <Header as="h2">Navlink</Header>
                        <Content>
                          Whilst not a specific GDS Component.This implements the links to both
                          internal and external sites as specified on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/styles/typography/#links"
                            text="Typography"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <Content>
                          <NavLink to="/" text="Home link" />
                        </Content>
                        <Content>
                          <NavLink
                            to="https://www.google.co.uk"
                            text="Search on Google"
                            assistiveText="Search for your content on Google"
                            external
                          />
                        </Content>
                      </>
                    )
                  },
                  {
                    title: "Breadcrumbs",
                    selected: currentTab === 2,
                    children: (
                      <>
                        <Header as="h2">Breadcrumbs</Header>
                        <Content>
                          The breadcrumbs component helps users to understand where they are within
                          a website&apos;s structure and move between levels.
                        </Content>
                        <Content>
                          You can view the full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/breadcrumbs/"
                            text="Breadcrumbs"
                            assistiveText="Full details of how to implement the Breadcrumbs GDS component"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <hr />
                        <Header as="h3">Standard</Header>
                        <Content>
                          A standard implementation of the Breadcrumb with multiple links
                        </Content>
                        <Breadcrumbs links={BreadcrumbLinks} />
                        <Header as="h3">Collapsible on Mobile</Header>
                        <Content>
                          A collapsible implementation of the Breadcrumb which will only show the
                          root and current link on mobile view
                        </Content>
                        <Breadcrumbs collapseOnMobile links={BreadcrumbLinksCollapse} />
                      </>
                    )
                  },
                  {
                    title: "Pagination",
                    selected: currentTab === 3,
                    children: (
                      <>
                        <Header as="h2">Pagination</Header>
                        <Content>
                          You can view the full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/pagination/"
                            text="Pagination"
                            assistiveText="Full details of how to implement the Pagination GDS component"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <div className="govuk-grid-row">
                          <div className="govuk-grid-column-two-thirds">
                            <Content>
                              These pagination examples are interactive, you can reset them using
                              the reset button.
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-third">
                            <Button variant="secondary" onClick={() => resetPagination()}>
                              Reset
                            </Button>
                          </div>
                        </div>
                        <hr />

                        <div className="govuk-grid-row">
                          <div className="govuk-grid-column-full">
                            <Header as="h3">Standard</Header>
                            <Content>
                              Pagination as standard on a medium amount of pages on first page
                            </Content>
                            <Pagination
                              pageNumbers={5}
                              currentPage={standardPaging}
                              label="results 1"
                              onPageChange={handleStandardPageChange}
                            />
                            <Content>
                              When the first or last page is reached then the relevant Previous and
                              Next are removed
                            </Content>
                          </div>
                          <div className="govuk-grid-column-one-half">
                            <Header as="h4">First</Header>
                            <Pagination
                              pageNumbers={5}
                              currentPage={firstPaging}
                              label="results 2"
                              onPageChange={handleFirstPageChange}
                            />
                          </div>
                          <div className="govuk-grid-column-one-half">
                            <Header as="h4">Last</Header>
                            <Pagination
                              pageNumbers={5}
                              currentPage={lastPaging}
                              label="results 3"
                              onPageChange={handleLastPageChange}
                            />
                          </div>
                        </div>
                        <div className="govuk-grid-row">
                          <div className="govuk-grid-column-full">
                            <Header as="h3">Large Results</Header>
                            <Content>
                              When there are a large number of results to page through, the paging
                              is reduced.
                            </Content>
                            <Pagination
                              pageNumbers={20}
                              currentPage={largePaging}
                              label="results 4"
                              onPageChange={handleLargePageChange}
                            />
                          </div>
                        </div>
                        <div className="govuk-grid-row">
                          <div className="govuk-grid-column-full">
                            <Header as="h3">Small Results</Header>
                            <Content>
                              When there are a a very small number of results to page through, the
                              paging is minimised.
                            </Content>
                            <Pagination
                              pageNumbers={3}
                              currentPage={smallPaging}
                              label="results 5"
                              onPageChange={handleSmallPageChange}
                            />
                          </div>
                        </div>
                      </>
                    )
                  },
                  {
                    title: "Exit Page",
                    children: (
                      <>
                        <Header as="h2">Exit Page</Header>
                        <Content>
                          Give users a way to quickly and safely exit a service, website or
                          application.
                        </Content>
                        <Content>
                          You can view the full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/exit-this-page/"
                            text="Exit this page"
                            assistiveText="Full details of how to implement the Exit this page GDS component"
                            external
                          />{" "}
                          section of the GDS website.
                        </Content>
                        <Content>
                          For service journeys, you must use this component with the pattern to help
                          a user{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/patterns/exit-a-page-quickly/"
                            text="Exit a page quickly"
                            assistiveText="Full details of how to implement the pattern to use the Exit this page GDS component"
                            external
                          />
                          .
                        </Content>
                        <ExitPage text="Exit Page" to="https://www.google.co.uk"></ExitPage>
                        <Content>
                          <p className="margin-bottom-large"></p>
                        </Content>
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

export default NavigationElements
