import * as yup from "yup"
import { RadioButtonDataProps } from "@pa-digital/govuk-frontend-react"
import { v4 as uuidv4 } from "uuid"

export const questionBuilderSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
  description: yup.string().trim().optional(),
  question: yup.string().trim().required("Question is required"),
  questionType: yup
    .array(
      yup.object({
        text: yup.string().required(),
        value: yup.string().required(),
        hint: yup.string().optional(),
        divider: yup.boolean().optional(),
        checked: yup.boolean().optional()
      })
    )
    .required("Question type is required")
    .test(
      "must be checked",
      "At least one question type must be checked",
      value => value?.some(x => x.checked) || false
    )
})

export interface IQuestions {
  questions: IQuestion[]
}

export interface IQuestion {
  id: string
  title: string
  description: string
  question: string
  questionType: string
  options: string[]
}

export const mapQuestionFormToQuestion = (form: IQuestionForm): IQuestion => {
  const question: IQuestion = {
    id: uuidv4(),
    title: form.question,
    description: form.description || "",
    question: form.question,
    questionType: form.questionType.find(x => x.checked)?.value || "",
    options: []
  }
  return question
}

export interface IQuestionForm {
  title: string
  description?: string
  question: string
  questionType: RadioButtonDataProps[]
}

export const QuestionTypeData: RadioButtonDataProps[] = [
  {
    text: "Text",
    value: "text"
  },
  {
    text: "Long Text",
    value: "textarea"
  },
  {
    text: "Single Option",
    value: "radio"
  },
  {
    text: "Multi Option",
    value: "checkbox"
  }
]

export const optionSchema = yup.object().shape({
  option: yup.string().trim().required("Option is required")
})

export interface IOptionsForm {
  option: string
}
