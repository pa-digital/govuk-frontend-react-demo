import {
  Header,
  Button,
  DateInput,
  TextCounter,
  RadioButtons,
  TextInput,
  SummaryListItemProps,
  SummaryList
} from "@pa-digital/govuk-frontend-react"
import { useState } from "react"

export interface IForm {
  firstname: string
  lastname: string
  email: string
}

const formDisplayNames: IForm = {
  firstname: "First Name",
  lastname: "Last Name",
  email: "Email Address"
}

const ProtoBuilder = () => {
  const [formData, setFormData] = useState<IForm | null>(null)
  const onChange = (e: any) => {
    console.log(e.target.value)
  }

  const onBlur = (e: any) => {
    console.log(e.target.value)
  }

  const displayFormData = (data: IForm) => {
    const summaryData: SummaryListItemProps[] = []
    if (!data) {
      return summaryData
    } else {
      return Object.entries(data).map(([key, value]) => ({
        key: formDisplayNames[key as keyof IForm],
        value: value
      }))
    }
  }

  const handleSubmit = (e: any) => {
    const form = e.currentTarget
    e.preventDefault()
    e.stopPropagation()
    const formData: IForm = {
      firstname: "",
      lastname: "",
      email: ""
    }
    Object.keys(formData).forEach(key => {
      const input = form.querySelector(`#${key}`) as HTMLInputElement
      if (input) {
        formData[key as keyof IForm] = input.value
      }
    })
    setFormData(formData)
  }

  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full" id="content">
            <Header as="h1">Form Submission</Header>
            <form noValidate onSubmit={handleSubmit}>
              <TextInput
                identifier="firstname"
                label="First name"
                required
                multiQuestion
                onChange={onChange}
                onBlur={onBlur}
              />
            </form>
          </div>
        </div>
        {formData && (
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <Header as="h2">Submitted Data</Header>
              <SummaryList list={displayFormData(formData)} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default ProtoBuilder
