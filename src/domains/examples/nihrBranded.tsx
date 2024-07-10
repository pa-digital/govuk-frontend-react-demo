import {
  BackLink,
  Header,
  Content,
  TextInput,
  Button,
  TextArea,
  RadioButtons,
  CheckBoxList,
  DateInput,
  Details,
  Inset,
  Notification,
  Select,
  NavLink
} from "@pa-digital/govuk-frontend-react"
import { Helmet } from "react-helmet"
import caseStudy1 from "../../assets/nihr/diploma_mad_case_study_website.jpg"
import pills from "../../assets/nihr/cap_it_mad_case_study_website_crop.jpg"
import pregnancy from "../../assets/nihr/pregnancy-sickness.jpg"

const NIHRBranded = () => {
  const handler = (e: any) => {}

  return (
    <>
      <Helmet>
        <meta name="keywords" content="Login" />
        <meta name="description" content="Log in to your account" />
        <title>NIHR Branding</title>
      </Helmet>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <BackLink to="/" />
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h1">NIHR Branding</Header>
              <Content>
                Branding of the GDS components can be achieved with care to ensure WCAG Compliance
                remains. Here is an example of an NIHR branded implementation.
              </Content>
              <hr />
            </div>
          </div>
          <div className="nihr-brand">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Buttons</Header>
                <div className="govuk-button-group">
                  <Button type="button">Default</Button>
                  <Button type="button" variant="secondary">
                    Secondary
                  </Button>
                  <Button type="button" variant="warning">
                    Warning
                  </Button>
                  <Button type="button" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Text Inputs</Header>
                <TextInput
                  identifier="standard"
                  label="Text"
                  multiQuestion
                  onChange={handler}
                  onBlur={handler}
                />
                <TextInput
                  identifier="standard"
                  label="Text"
                  multiQuestion
                  error="Error"
                  onChange={handler}
                  onBlur={handler}
                />
                <TextInput
                  identifier="email"
                  label="Email"
                  inputType="email"
                  multiQuestion
                  onChange={handler}
                  onBlur={handler}
                />
                <TextInput
                  identifier="password"
                  label="Password"
                  inputType="password"
                  multiQuestion
                  onChange={handler}
                  onBlur={handler}
                />
                <TextArea
                  identifier="textarea"
                  label="Text area"
                  multiQuestion
                  onBlur={handler}
                  onChange={handler}
                />
                <DateInput
                  identifier="date-input"
                  label="Date of birth"
                  multiQuestion
                  onValueChange={handler}
                />
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Details</Header>
                <Details title="Details title">
                  Content that is placed within the expandable details element
                </Details>
                <Header as="h2">Inset</Header>
                <Inset>This has content within it</Inset>
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Notifications</Header>
                <Notification
                  content={[
                    {
                      link: {
                        text: "first link text",
                        to: "/firstlink"
                      },
                      text: "first paragraph text"
                    },
                    {
                      link: {
                        assistiveText: "Search via Google",
                        external: true,
                        text: "search via Google",
                        to: "https://www.google.co.uk"
                      },
                      text: "second paragraph text"
                    }
                  ]}
                  heading="Notification heading"
                  identifier="Notification"
                />
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Radio Buttons</Header>
                <RadioButtons
                  data={[
                    {
                      text: "England",
                      value: "England"
                    },
                    {
                      text: "Scotland",
                      value: "Scotland"
                    },
                    {
                      text: "Wales",
                      value: "Wales"
                    },
                    {
                      text: "Northern Ireland",
                      value: "NIreland"
                    }
                  ]}
                  header="Radio button list"
                  identifier="radiobuttons"
                  multiQuestion
                  onValueChange={handler}
                />
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Checkbox List</Header>
                <CheckBoxList
                  data={[
                    {
                      text: "British",
                      value: "British"
                    },
                    {
                      text: "Irish",
                      value: "Irish"
                    },
                    {
                      text: "Citizen of another country",
                      value: "Other"
                    }
                  ]}
                  multiQuestion
                  header="Which countries have you visited?"
                  identifier="checkboxlist"
                  onValueChange={handler}
                />
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <Header as="h2">Select List</Header>
                <Select
                  identifier="select"
                  label="Select your address"
                  onValueBlur={function noRefCheck() {}}
                  onValueChange={function noRefCheck() {}}
                  options={[
                    {
                      text: "--- Select your address ---",
                      value: ""
                    },
                    {
                      text: "1 Street Name, Town, County NW1 1AA",
                      value: "1 Street Name,Town,County,NW1 1AA"
                    },
                    {
                      text: "2 Street Name, Second Address Line, Town, County NW1 1AA",
                      value: "2 Street Name,Second Address Line,Town,County,NW1 1AA"
                    },
                    {
                      text: "3 Street Name, Town, County NW1 1AA",
                      value: "3 Street Name,Town,County,NW1 1AA"
                    },
                    {
                      text: "4 Street Name, Second Address Line, Town, County NW1 1AA",
                      value: "4 Street Name,Second Address Line,Town,County,NW1 1AA"
                    },
                    {
                      text: "5 Street Name, Town, County NW1 1AA",
                      value: "5 Street Name,Town,County,NW1 1AA"
                    }
                  ]}
                />
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-half">
                <div className="nihr-card">
                  <div className="nihr-card-img">
                    <img src={caseStudy1} className="img-fluid" alt="Case study" />
                  </div>
                  <div className="nihr-card-body-wrapper">
                    <div className="nihr-card-body">
                      <Header as="h3">
                        <NavLink
                          to="/"
                          text="NHS programme linked to 20% reduction in risk of diabetes"
                        />
                      </Header>
                      <Content>
                        An NIHR-funded evaluation showed referring people with pre-diabetes to the
                        NHS Diabetes Prevention Programme cut their risk by 20%.
                      </Content>
                    </div>
                  </div>
                </div>
              </div>
              <div className="govuk-grid-column-one-half">
                <div className="nihr-card">
                  <div className="nihr-card-img">
                    <img src={pills} className="img-fluid" alt="Pills" />
                  </div>
                  <div className="nihr-card-body-wrapper">
                    <div className="nihr-card-body">
                      <Header as="h3">
                        <NavLink
                          to="/"
                          text="Children’s treatment time for pneumonia halved in antibiotic research"
                        />
                      </Header>
                      <Content>
                        The CAP-IT trial of antibiotic use in young children with pneumonia has
                        delivered practice-changing results, showing the length of treatment can be
                        reduced.
                      </Content>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <div className="nihr-hero">
                  <div className="nihr-hero-text">
                    <Header as="h2">
                      Study discovers cause of pregnancy sickness and potential treatment
                    </Header>
                    <Content>
                      A new study supported by NIHR Cambridge Biomedical Research Centre (BRC) has
                      shown why many women experience nausea and vomiting during pregnancy and why
                      some women become so sick they need to be admitted to hospital.
                    </Content>
                    <NavLink to="/" text="Read the full news story" />
                  </div>
                  <div className="nihr-hero-image">
                    <img src={pregnancy} alt="Pregnant lady" />
                  </div>
                </div>
              </div>
            </div>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <div className="nihr-stack">
                  <div className="nihr-stack-text-wrapper">
                    <div className="nihr-stack-text">
                      <Header as="h2">
                        Study discovers cause of pregnancy sickness and potential treatment
                      </Header>
                      <Content>
                        A new study supported by NIHR Cambridge Biomedical Research Centre (BRC) has
                        shown why many women experience nausea and vomiting during pregnancy and why
                        some women become so sick they need to be admitted to hospital.
                      </Content>
                      <NavLink to="/" text="Read the full news story" />
                    </div>
                  </div>

                  <div className="nihr-stack-image">
                    <img src={pregnancy} alt="Pregnant lady" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default NIHRBranded
