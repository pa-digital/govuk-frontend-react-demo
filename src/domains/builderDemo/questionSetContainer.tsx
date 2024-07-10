import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {
  Button,
  Content,
  ErrorSummary,
  Header,
} from "@pa-digital/govuk-frontend-react";
import { useEffect, useState, useMemo } from "react";
import { getCookie } from "react-use-cookie";
import {
  createFormDataModel,
  createJSONSchema,
  JsonItem,
  mapFormData,
  mapQuestionChoicesToCheckBoxList,
  mapQuestionChoicesToRadioButtonList,
  renderQuestion,
} from "./CommonFunctions";
import { IQuestionSet, QuestionSetContainerProps } from "./IQuestionSet";

const QuestionSetContainer = ({
  id,
  onComplete,
}: QuestionSetContainerProps) => {
  const [questionSetData, setQuestionSetData] = useState<IQuestionSet>();
  const formDataModel = useMemo(() => {
    return createFormDataModel(questionSetData);
  }, [questionSetData]);

  const defaultValues = useMemo(() => {
    let data: Record<string, any> = {};
    formDataModel.forEach((element, index) => {
      switch (questionSetData?.questions[index].questionType) {
        case "checkbox": {
          data[element.id] = mapQuestionChoicesToCheckBoxList(
            questionSetData.questions[index].options
          );
          break;
        }
        case "radio": {
          data[element.id] = mapQuestionChoicesToRadioButtonList(
            questionSetData.questions[index].options
          );
          break;
        }
        default: {
          data[element.id] = "";
        }
      }
    });
    return data;
  }, [formDataModel, questionSetData?.questions]);

  const schema = useMemo(() => {
    if (formDataModel) {
      return createJSONSchema(formDataModel);
    }
    return yup.object().shape({});
  }, [formDataModel]);

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<any>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (formData: Record<string, string>) => {
    if (questionSetData) {
      const mappedData = mapFormData(questionSetData, formDataModel, formData);
      onComplete(mappedData);
    }
    return false;
  };

  useEffect(() => {
    var cookieData: IQuestionSet[] = JSON.parse(
      getCookie("questionSets")
    ) as unknown as IQuestionSet[];
    if (cookieData && cookieData.length > 0) {
      const questionSet = cookieData.find((x) => x.id === id);
      if (questionSet) {
        setQuestionSetData(questionSet);
      }
    }
  }, [id]);

  return (
    <>
      {questionSetData && (
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <>
              <Header as="h2">{questionSetData.title}</Header>
              {questionSetData.description && (
                <Content>{questionSetData.description}</Content>
              )}
              <Header as="h3">Questions</Header>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <ErrorSummary identifier="error-summary" errors={errors} />
                {formDataModel.map((question: JsonItem, index) => {
                  return renderQuestion(
                    question,
                    index,
                    control,
                    defaultValues
                  );
                })}
                <Button type="submit">{questionSetData.buttonText}</Button>
              </form>
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionSetContainer;
