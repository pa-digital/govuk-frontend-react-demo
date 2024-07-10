import {
  Header,
  Content,
  NavLink,
  Tabs,
  Details,
  Inset,
  Table,
  Accordion
} from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import {
  ActionSummaryData,
  PartialOpenAccordionData,
  StandardAccordionData,
  TableHeaderData,
  TableRowData
} from "./FormData"

const SiteContent = () => {
  return (
    <>
      <Helmet>
        <meta name="keywords" content="GOV.UK Design System, accessibility, Content" />
        <meta name="description" content="Content and the GOV.UK Design System" />
        <title>GDS - Content</title>
      </Helmet>
      <div className="govuk-width-container">
        <main className="govuk-main-wrapper">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full" id="content">
              <Header as="h1">Content Components</Header>
              <Content>
                A breakdown of some of the more commonly used GDS components for content.
              </Content>
              <Content>
                GDS has a pattern that it uses for inline errors and error summary messages.
              </Content>
              <Content>
                You can view full implementation details on the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/error-message/"
                  text="error messages"
                  external
                />{" "}
                and the{" "}
                <NavLink
                  to="https://design-system.service.gov.uk/components/error-summary/"
                  text="error summary"
                  external
                />{" "}
                sections of the GDS website.
              </Content>
              <Tabs
                heading="Content Components"
                tabs={[
                  {
                    title: "Headings",
                    children: (
                      <>
                        <Header as="h2">Headings &amp; Copy</Header>
                        <Content>
                          We use standardised heading elements flowing from h1 - h4 and also
                          paragraphed content to give a standard style.
                        </Content>
                        <Content>
                          You can view full typography implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/styles/typography/"
                            text="Typography"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <ul className="govuk-list govuk-list--bullet">
                          <li>
                            <span className="govuk-heading-xl">Heading 1</span>
                          </li>
                          <li>
                            <span className="govuk-heading-l">Heading 2</span>
                          </li>
                          <li>
                            <span className="govuk-heading-m">Heading 3</span>
                          </li>
                          <li>
                            <span className="govuk-heading-s">Heading 4</span>
                          </li>
                          <li>
                            <span className="govuk-body">Paragraphed content</span>
                          </li>
                        </ul>
                      </>
                    )
                  },
                  {
                    title: "Details",
                    children: (
                      <>
                        <Header as="h2">Details</Header>
                        <Content>
                          A details components allows us to keep not necessary information in an
                          accessible format.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/details/"
                            text="Details"
                            assistiveText="implementation information for the details component"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Details title="Help with nationality">
                          We need to know your nationality so we can work out which elections
                          you&apos;re entitled to vote in. If you cannot provide your nationality,
                          you"ll have to send copies of identity documents through the post.
                        </Details>
                      </>
                    )
                  },
                  {
                    title: "Inset",
                    children: (
                      <>
                        <Header as="h2">Inset</Header>
                        <Content>
                          Use the inset text component to differentiate a block of text from the
                          content that surrounds it
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/inset-text/"
                            text="Inset"
                            assistiveText="implementation information for the inset component"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <Inset>
                          It can take up to 8 weeks to register a lasting power of attorney if there
                          are no mistakes in the application.
                        </Inset>
                      </>
                    )
                  },
                  {
                    title: "Tables",
                    children: (
                      <>
                        <Header as="h2">Tables</Header>
                        <Content>
                          Use the table component to make information easier to compare and scan for
                          users. Do not use this for layout.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/table/"
                            text="Table"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <hr />
                        <Table
                          caption="Months and rates"
                          columnHeaders={TableHeaderData}
                          rows={TableRowData}
                        />
                      </>
                    )
                  },
                  {
                    title: "Accordion",
                    children: (
                      <>
                        <Header as="h2">Accordion</Header>
                        <Content>
                          The accordion component lets users show and hide sections of related
                          content on a page.
                        </Content>
                        <Content>
                          You can view full implementation details on the{" "}
                          <NavLink
                            to="https://design-system.service.gov.uk/components/accordion/"
                            text="Accordion"
                            external
                          />{" "}
                          sections of the GDS website.
                        </Content>
                        <hr />
                        <Header as="h3">Standard Implementation</Header>
                        <Content>This accordion has no open elements.</Content>
                        <Accordion
                          id="accordion-standard"
                          elements={StandardAccordionData}
                          expanded={false}></Accordion>
                        <Header as="h3">Partial Open Implementation</Header>
                        <Content>This accordion has specified open elements.</Content>
                        <Accordion
                          id="accordion-partial-open"
                          elements={PartialOpenAccordionData}
                          expanded={false}></Accordion>
                        <Header as="h3">All Open Implementation</Header>
                        <Content>This accordion has all open elements.</Content>
                        <Accordion
                          id="accordion-all-open"
                          elements={StandardAccordionData}
                          expanded={true}></Accordion>
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

export default SiteContent
