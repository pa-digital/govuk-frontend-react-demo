import {
  Button,
  Content,
  ErrorSummary,
  Header,
  RadioButtons,
  TextArea,
} from "@pa-digital/govuk-frontend-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie, setCookie } from "react-use-cookie";
import { IQuestionSet, RadioYesNo } from "./IQuestionSet";
import {
  IQuestionConfigureForm,
  questionConfigureSchema,
} from "./IQuestionsConfigure";

const QuestionSetBuilderQuestionsConfigure = () => {
  const navigate = useNavigate();
  const [questionSetData, setQuestionSetData] = useState<IQuestionSet>();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm<IQuestionConfigureForm>({
    resolver: yupResolver(questionConfigureSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      required: RadioYesNo,
      help: "",
      error: "",
    },
  });

  const onSubmit = (formData: IQuestionConfigureForm) => {
    const currentQuestionSetData = questionSetData;
    if (currentQuestionSetData && currentQuestionSetData.questions) {
      currentQuestionSetData.questions[currentQuestion - 1].required =
        formData.required.find((x) => x.checked)?.value === "true";
      currentQuestionSetData.questions[currentQuestion - 1].help =
        formData.help;
      currentQuestionSetData.questions[currentQuestion - 1].error =
        formData.error;
      setQuestionSetData(currentQuestionSetData);
      setValue("required", RadioYesNo);
      setValue("help", "");
      setValue("error", "");
      setCookie("currentQuestionSet", JSON.stringify(currentQuestionSetData));
      if (currentQuestion < currentQuestionSetData?.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        return navigate("/questionSetBuilderSummary");
      }
    }

    return false;
  };

  useEffect(() => {}, [questionSetData]);

  useEffect(() => {
    var cookieData: IQuestionSet = JSON.parse(
      getCookie("currentQuestionSet")
    ) as unknown as IQuestionSet;
    setQuestionSetData(cookieData);
  }, []);

  return (
    <>
      {questionSetData && (
        <>
          <div className="govuk-width-container" id="content">
            <main className="govuk-main-wrapper">
              <Header>Question Set builder</Header>
              <Content>
                Configure the questions for the {questionSetData?.title}{" "}
                question set.
              </Content>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Header as="h2">
                  Question {currentQuestion} of{" "}
                  {questionSetData.questions.length}.
                </Header>
                {questionSetData.questions[currentQuestion - 1].description && (
                  <Content>
                    {questionSetData.questions[currentQuestion - 1].description}
                  </Content>
                )}
                <ErrorSummary identifier="error-summary" errors={errors} />
                <Controller
                  control={control}
                  name="required"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <RadioButtons
                      identifier="required"
                      header="Required"
                      data={value}
                      multiQuestion
                      error={error?.message}
                      onValueChange={onChange}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="error"
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <TextArea
                      identifier="errorMessage"
                      label="Error message"
                      multiQuestion
                      value={value}
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="help"
                  render={({
                    field: { value, onChange, onBlur },
                    fieldState: { error },
                  }) => (
                    <TextArea
                      identifier="helpText"
                      label="Help text"
                      multiQuestion
                      value={value}
                      error={error?.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <Button type="submit">Save configuration</Button>
              </form>
            </main>
          </div>
        </>
      )}
    </>
  );
};
export default QuestionSetBuilderQuestionsConfigure;
