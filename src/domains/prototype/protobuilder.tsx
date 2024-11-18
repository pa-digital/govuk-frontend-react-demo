import {
  Header,
  Button,
  DateInput,
  TextCounter,
  RadioButtons,
  TextInput,
  SummaryListItemProps,
  SummaryList,
  CheckBoxList,
  CheckBoxDataProps,
  RadioButtonDataProps
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

  const InterestsData: CheckBoxDataProps[] = [
    {
      text: "React",
      value: "react"
    },
    {
      text: "Node JS",
      value: "nodejs"
    },
    {
      text: "Astro",
      value: "astro"
    },
    {
      text: "Accessibility",
      value: "accessibility"
    }
  ]

  const WhereDoYouLiveExtData: RadioButtonDataProps[] = [
    {
      text: "England",
      value: "England",
      checked: true
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
    },
    {
      text: "or",
      value: "",
      divider: true
    },
    {
      text: "I am a British citizen living abroad",
      value: "Abroad"
    }
  ]

  const NameChangeData: RadioButtonDataProps[] = [
    {
      text: "Yes",
      value: "True"
    },
    {
      text: "No",
      value: "false"
    }
  ]

  const ExclusiveCheckBoxData: CheckBoxDataProps[] = [
    {
      text: "France",
      value: "France"
    },
    {
      text: "Portugal",
      value: "Portugal"
    },
    {
      text: "Spain",
      value: "Spain"
    },
    {
      text: "or",
      value: "",
      divider: true
    },
    {
      text: "No, I will not be travelling to any of these countries",
      value: "None",
      exclusive: true
    }
  ]

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
              <TextInput
                identifier="lastname"
                label="Last name"
                required
                multiQuestion
                onChange={onChange}
                onBlur={onBlur}
              />

              <TextInput
                identifier="email"
                label="Email address"
                inputType="email"
                required
                multiQuestion
                onChange={onChange}
                onBlur={onBlur}
              />
              <DateInput
                identifier="dateOfBirth"
                label="Date of birth"
                required
                multiQuestion
                onValueChange={onChange}
              />
              <TextCounter
                identifier="text-counter"
                label="Can you provide more detail?"
                hint="Please provide this information in as much detail as you can"
                required
                maxCount={50}
                counterType="character"
                onChange={onChange}
                onBlur={onBlur}
              />
              <CheckBoxList
                identifier="interests"
                header="Which of these interest you"
                hint="Select all that apply"
                data={InterestsData}
                multiQuestion
                onValueChange={onChange}
              />
              <RadioButtons
                identifier="where-are-you-going"
                header="Where are you going on holiday?"
                data={WhereDoYouLiveExtData}
                onValueChange={onChange}
              />
              <Button type="submit">Submit</Button>
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
