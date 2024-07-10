import {
  CheckBoxDataProps,
  CheckBoxList,
  RadioButtonDataProps,
  RadioButtons,
  TextArea,
  TextInput,
} from "@pa-digital/govuk-frontend-react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { IQuestionSet } from "./IQuestionSet";
import { createYupSchema } from "./yupSchemaFuncs";
import { Controller } from "react-hook-form";
import React, { ReactNode } from "react";

export const mapQuestionChoicesToRadioButtonList = (
  options: string[]
): RadioButtonDataProps[] => {
  const retVal: RadioButtonDataProps[] = [];

  options.forEach((option) => {
    retVal.push({
      text: option,
      value: option,
    });
  });
  return retVal;
};

export const mapQuestionChoicesToCheckBoxList = (
  options: string[]
): CheckBoxDataProps[] => {
  const retVal: CheckBoxDataProps[] = [];

  options.forEach((option) => {
    retVal.push({
      text: option,
      value: option,
    });
  });
  return retVal;
};

interface yupValidation {
  type: string;
  params: string[];
}

export interface JsonItem {
  id: string;
  label: string;
  required: boolean;
  multi: boolean;
  validationType?: string;
  validations?: yupValidation[];
  questionType: string;
  error: string;
}

const getAlpha = (index: number): string => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (index > 25) {
    const loc = 25 % index;
    return alphabet[loc];
  }
  return alphabet[index];
};

const generateCheckBoxSchema = (question: JsonItem) => {
  let schema: Record<string, any> = {};
  schema[question.id] = yup
    .mixed<CheckBoxDataProps[]>()
    .test(
      "must be checked",
      question.error,
      (value: CheckBoxDataProps[] | undefined) => {
        if (value && value.findIndex((x) => x.checked) >= 0) {
          return true;
        }
        return false;
      }
    );
  return schema;
};

const generateRadioButtonSchema = (question: JsonItem) => {
  let schema: Record<string, any> = {};
  schema[question.id] = yup
    .mixed<RadioButtonDataProps[]>()
    .test(
      "must be checked",
      question.error,
      (value: RadioButtonDataProps[] | undefined) => {
        if (value && value.findIndex((x) => x.checked) >= 0) {
          return true;
        }
        return false;
      }
    );
  return schema;
};

export const createFormDataModel = (
  questionSet: IQuestionSet | undefined
): JsonItem[] => {
  const jsonObj: JsonItem[] = [];
  if (questionSet && questionSet.questions) {
    const multiQuestion = questionSet.questions.length > 1;

    questionSet.questions.forEach((question, index) => {
      const item: JsonItem = {
        id: `${getAlpha(index)}-${uuidv4()}-${index}`,
        label: question.title,
        required: questionSet.questions[index].required,
        multi: multiQuestion,
        questionType: questionSet.questions[index].questionType,
        error: questionSet.questions[index].error || "",
      };
      if (
        question.questionType === "text" ||
        question.questionType === "textarea"
      ) {
        item.validationType = "string";
        if (question.required) {
          item.validations = [
            {
              type: "trim",
              params: [],
            },
            {
              type: "required",
              params: [questionSet.questions[index].error || ""],
            },
          ];
        }
      }
      jsonObj.push(item);
    });
  }
  return jsonObj;
};

export const createJSONSchema = (jsonData: JsonItem[] | undefined) => {
  if (jsonData && jsonData.length > 0) {
    let merged = {};
    const nonMixed: JsonItem[] = [];
    const radios: JsonItem[] = [];
    const checks: JsonItem[] = [];

    jsonData.forEach((item) => {
      if (item.questionType === "radio" && item.required) {
        radios.push(item);
      } else if (item.questionType === "checkbox" && item.required) {
        checks.push(item);
      } else if (item.required) {
        nonMixed.push(item);
      }
    });

    const nonMixedSchema = nonMixed.reduce(createYupSchema, {});
    merged = { ...nonMixedSchema };

    checks.forEach((checkbox) => {
      const checkBoxSchema = generateCheckBoxSchema(checkbox);
      merged = { ...merged, ...checkBoxSchema };
    });

    radios.forEach((radio) => {
      const radioButtonSchema = generateRadioButtonSchema(radio);
      merged = { ...merged, ...radioButtonSchema };
    });

    return yup.object().shape(merged);
  }
  return yup.object().shape({});
};

export const renderQuestion = (
  question: JsonItem,
  index: number,
  control: any,
  defaults: Record<string, any>
) => {
  let inputElement: ReactNode;
  switch (question.questionType) {
    case "text": {
      inputElement = (
        <Controller
          control={control}
          name={`${question.id}`}
          defaultValue={defaults[question.id]}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <TextInput
              identifier={`${question.id}`}
              label={question.label}
              multiQuestion={question.multi}
              error={error?.message}
              value={value}
              required={question.required}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      );
      break;
    }
    case "textarea": {
      inputElement = (
        <Controller
          control={control}
          name={`${question.id}`}
          defaultValue={defaults[question.id]}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <TextArea
              identifier={`${question.id}`}
              label={question.label}
              multiQuestion={question.multi}
              error={error?.message}
              value={value}
              required={question.required}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}
        />
      );
      break;
    }
    case "radio": {
      inputElement = (
        <Controller
          control={control}
          name={`${question.id}`}
          defaultValue={defaults[question.id]}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <RadioButtons
              identifier={`${question.id}`}
              header={question.label}
              multiQuestion={question.multi}
              error={error?.message}
              onValueChange={onChange}
              data={value}
            />
          )}
        />
      );
      break;
    }
    case "checkbox": {
      inputElement = (
        <Controller
          control={control}
          name={`${question.id}`}
          defaultValue={defaults[question.id]}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <CheckBoxList
              identifier={`${question.id}`}
              header={question.label}
              multiQuestion={question.multi}
              error={error?.message}
              data={value}
              onValueChange={onChange}
            />
          )}
        />
      );
      break;
    }
    default: {
      inputElement = <React.Fragment />;
    }
  }
  return <React.Fragment key={index}>{inputElement}</React.Fragment>;
};

export const mapFormData = (
  questionSet: IQuestionSet,
  formDataModel: JsonItem[],
  formData: Record<string, string>
): IQuestionSet => {
  formDataModel.forEach((element, index) => {
    if (
      element.questionType === "text" ||
      element.questionType === "textarea"
    ) {
      questionSet.questions[index].value = formData[element.id];
    } else if (element.questionType === "radio") {
      const data = formData[element.id] as unknown as RadioButtonDataProps[];
      const checked = data.filter((x) => x.checked);
      let retVal = "";
      checked.forEach((check) => {
        retVal += `${check.text},`;
      });
      questionSet.questions[index].value = retVal.substring(
        0,
        retVal.length - 1
      );
    } else {
      const data = formData[element.id] as unknown as CheckBoxDataProps[];
      const checked = data.filter((x) => x.checked);
      let retVal = "";
      checked.forEach((check) => {
        retVal += `${check.text},`;
      });
      questionSet.questions[index].value = retVal.substring(
        0,
        retVal.length - 1
      );
    }
  });

  return questionSet;
};

// export const visualiseFormData = (
//   formData: Record<string, string>,
//   formDataModel: JsonItem[]
// ): string[] => {
//   const submittedData: string[] = [];

//   formDataModel.forEach((element, index) => {
//     let visualiser = formDataModel[index].label;
//     if (
//       element.questionType === "text" ||
//       element.questionType === "textarea"
//     ) {
//       visualiser += `: ${formData[element.id]}`;
//     } else if (element.questionType === "radio") {
//       const data = formData[element.id] as unknown as RadioButtonDataProps[];
//       const checked = data.filter((x) => x.checked);
//       let retVal = "";
//       checked.forEach((check) => {
//         retVal += `${check.text},`;
//       });
//       visualiser += `: ${retVal.substring(0, retVal.length - 1)}`;
//     } else {
//       const data = formData[element.id] as unknown as CheckBoxDataProps[];
//       const checked = data.filter((x) => x.checked);
//       let retVal = "";
//       checked.forEach((check) => {
//         retVal += `${check.text},`;
//       });
//       visualiser += `: ${retVal.substring(0, retVal.length - 1)}`;
//     }
//     submittedData.push(visualiser);
//   });

//   return submittedData;
// };
