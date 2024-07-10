import * as yup from "yup";
import {
  CheckBoxDataProps,
  mapCheckBoxListToArray,
  RadioButtonDataProps,
} from "@pa-digital/govuk-frontend-react";
import { IQuestion } from "./IQuestion";
import { v4 as uuidv4 } from "uuid";

export interface QuestionSetContainerProps {
  id: string;
  onComplete: (data: IQuestionSet) => void;
}

export interface IQuestionSet {
  id: string;
  title: string;
  description: string;
  areas: string[];
  buttonText: string;
  questions: IQuestionSetQuestion[];
}

export interface IQuestionSetQuestion extends IQuestion {
  required: boolean;
  help?: string;
  error?: string;
  value?: string;
}

export const RadioYesNo: RadioButtonDataProps[] = [
  {
    text: "Yes",
    value: "true",
  },
  { text: "No", value: "false" },
];

export const AreaData: CheckBoxDataProps[] = [
  {
    text: "Area 1",
    value: "area1",
    hint: "including sub areas 1a, 1b, 1c",
  },
  {
    text: "Area 2",
    value: "area2",
  },
  {
    text: "Area 3",
    value: "area3",
  },
  {
    text: "or",
    value: "",
    divider: true,
  },
  {
    text: "Apply to all areas",
    value: "all",
  },
];

export const questionSetBuilderSchema = yup.object().shape({
  title: yup.string().trim().required("Title is required"),
  description: yup.string().trim(),
  buttonText: yup
    .string()
    .trim()
    .required("Button text is required")
    .max(10, "Only 10 characters are allowed"),
  areas: yup
    .mixed<CheckBoxDataProps[]>()
    .test(
      "at least one",
      "At least one area is required",
      (value: CheckBoxDataProps[] | undefined) => {
        if (value && value.findIndex((x) => x.checked) >= 0) {
          return true;
        }
        return false;
      }
    ),
});

export interface IQuestionSetForm {
  title: string;
  description: string;
  buttonText: string;
  areas: CheckBoxDataProps[];
}

export const mapQuestionSetFormToQuestionSet = (
  form: IQuestionSetForm
): IQuestionSet => {
  const questionSet: IQuestionSet = {
    id: uuidv4(),
    title: form.title,
    buttonText: form.buttonText,
    description: form.description || "",
    areas: mapCheckBoxListToArray(form.areas),
    questions: [],
  };
  return questionSet;
};

export interface IQuestionSetQuestionSearchForm {
  search: string;
}

export const questionSetSearchFormSchema = yup.object().shape({
  search: yup.string().trim().required("Search text is required"),
});
