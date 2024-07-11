import { RadioButtonDataProps } from "@pa-digital/govuk-frontend-react"
import * as yup from "yup"
export const questionConfigureSchema = yup.object().shape({
  required: yup
    .array()
    .of(
      yup.object().shape({
        text: yup.string().required(),
        value: yup.string().required(),
        hint: yup.string().optional(),
        divider: yup.boolean().optional(),
        checked: yup.boolean().optional()
      })
    )
    .test(
      "must be checked",
      "You must decide if the question is required",
      value => value?.some(x => x.checked) || false
    ),
  help: yup.string().trim().required(),
  error: yup
    .string()
    .trim()
    .when("required", {
      is: (required: RadioButtonDataProps[]) => {
        const selectedValue = required.find(x => x.checked)?.value || ""
        return selectedValue === "true"
      },
      then: schema => schema.required("You must enter an error message"),
      otherwise: schema => schema.optional()
    })
})

export interface IQuestionConfigureForm {
  required: RadioButtonDataProps[]
  error?: string
  help: string
}
