# GOV.UK Design System React Demo User Guide

This demo is designed to be a developers guide to implementing the GOV.UK Design System React npm package which can be found <a href="https://github.com/pa-digital/govuk-frontend-react" target="_blank">here on PA-Digital</a>.

There is a storybook implementation to show a basic guide that can be found <a href="https://pa-digital.github.io/govuk-frontend-react" target="_blank" rel="noopener">here</a>

You can find the Gov Uk design system references at the <a href="https://design-system.service.gov.uk/" target="_blank" rel="noreferrer">GOV.UK Design System</a> website.

## Developer use

```bash
Clone the repository from GitHub
npm install # installs all necessary modules
npm run start # runs the developer portal and you can view all the components and more complex examples
```

## Components

These can be found in the src > domains > components folder and show a detailed example for rendering all components along with example data structures

## Examples

There are a number of examples and forms. They use Yup and React Hook Forms but could be swapped out as required.

1. Registration - _Shows a standard registration and how to validate the DateTime and Checkboxes components_
2. Address Lookup - _Shows how to implement an address lookup with a manual entry fallback_
3. Credential Entry - _An example of a credential entry screen with the GDS Password control and Radio Buttons_
4. Branded Login - _An example of a login screen using NIHR as an example_
5. Complete NIHR Branding - _An example of how to override the stylesheet, example using NIHR with the stylesheet in the styling folder_
6. Complete Pret Branding - _An example of how to override the stylesheet, example using Pret with the stylesheet in the styling folder_
7. Question Set Builder - _This is an example of how the controls and validation can all be constructed to produce a simple survey which is stored in a JSON format, for simplicity it is written to a cookie but could be stored._
8. Rapid Prototype Builder - _This is a developer playground for instant results_
