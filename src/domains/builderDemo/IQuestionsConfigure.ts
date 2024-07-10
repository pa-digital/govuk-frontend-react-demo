import { RadioButtonDataProps } from "@pa-digital/govuk-frontend-react";
import * as yup from "yup";
export const questionConfigureSchema = yup.object().shape({
  required: yup
    .mixed<RadioButtonDataProps[]>()
    .test(
      "must be checked",
      "You must decide if the question is required",
      (value: RadioButtonDataProps[] | undefined) => {
        if (value && value.findIndex((x) => x.checked) >= 0) {
          return true;
        }
        return false;
      }
    ),
  help: yup.string().trim(),
  error: yup
    .string()
    .trim()
    .when("required", (required, field) => {
      const values: RadioButtonDataProps[] =
        required as unknown as RadioButtonDataProps[];
      const selectedValue = values.find((x) => x.checked)?.value || "";
      return selectedValue === "true"
        ? field.required("You must enter an error message")
        : field;
    }),
});

export interface IQuestionConfigureForm {
  required: RadioButtonDataProps[];
  error?: string;
  help: string;
}
