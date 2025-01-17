import { NavigationLink, ServiceNavigation } from "@pa-digital/govuk-frontend-react"

const Header = () => {
  const navLinks: NavigationLink[] = [
    {
      to: "/",
      text: "Home"
    },
    {
      to: "/content",
      text: "Content"
    },
    {
      to: "/states",
      text: "States"
    },
    {
      to: "/navigation",
      text: "Navigation"
    },
    {
      to: "/buttons",
      text: "Buttons"
    },
    {
      to: "/summary-list",
      text: "Summary Lists"
    },
    {
      to: "/summary-card-list",
      text: "Summary Card Lists"
    },
    {
      to: "/checkboxes",
      text: "Checkboxes"
    },
    {
      to: "/radios",
      text: "Radio Buttons"
    },
    {
      to: "/input",
      text: "Inputs"
    },
    {
      to: "/date",
      text: "Date Inputs"
    },
    {
      to: "/select",
      text: "Selects"
    },
    {
      to: "/examples",
      text: "Examples",
      assistiveText: "Some examples of the implementation of the GDS Frameworks"
    }
  ]
  return (
    <ServiceNavigation
      links={navLinks}
      identifier="header-nav"
      serviceNameDetails={{
        to: "/",
        text: "Service name",
        assistiveText: "link to service home page"
      }}
    />
  )
}

export default Header
