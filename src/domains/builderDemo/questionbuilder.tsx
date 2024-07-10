import {
  Button,
  Content,
  ErrorSummary,
  Header,
  RadioButtons,
  TextArea,
  TextInput,
} from "@pa-digital/govuk-frontend-react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AnswerBuilder from "./answerbuilder";
import {
  IQuestion,
  IQuestionForm,
  mapQuestionFormToQuestion,
  questionBuilderSchema,
  QuestionTypeData,
} from "./IQuestion";
import { useEffect, useState } from "react";
import { setCookie } from "react-use-cookie";

const QuestionBuilder = () => {
  const navigate = useNavigate();
  const [questionConstructor, setQuestionConstructor] = useState<IQuestion>();
  const [showOptions, setShowOptions] = useState(false);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IQuestionForm>({
    resolver: yupResolver(questionBuilderSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      question: "",
    },
  });

  const onSubmit = (formData: IQuestionForm) => {
    const question = mapQuestionFormToQuestion(formData);
    setQuestionConstructor(question);
    return false;
  };

  const onSaveOptions = (options: string[]) => {
    const currentQuestion = questionConstructor;
    if (currentQuestion) {
      currentQuestion.options = options;
      if (options.length >= 1) {
        setCookie("currentQuestion", JSON.stringify(currentQuestion));
        return navigate("/questionSummary");
      }
    }
  };

  useEffect(() => {
    if (questionConstructor) {
      if (
        questionConstructor.questionType === "text" ||
        questionConstructor.questionType === "textarea"
      ) {
        setCookie("currentQuestion", JSON.stringify(questionConstructor));
        return navigate("/questionSummary");
      } else {
        setShowOptions(true);
      }
    }
  }, [showOptions, questionConstructor, navigate]);

  useEffect(() => {}, [questionConstructor]);

  return (
    <>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <Header>Question builder</Header>
          <Content>Construct your question below.</Content>
          {!showOptions && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ErrorSummary identifier="error-summary" errors={errors} />
              <Controller
                control={control}
                name="title"
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <TextInput
                    identifier="title"
                    label="Title"
                    value={value}
                    error={error?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    multiQuestion
                  />
                )}
              />

              <Controller
                control={control}
                name="description"
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <TextArea
                    identifier="description"
                    label="Description"
                    value={value}
                    error={error?.message}
                    hint="Not visible but will be used to help searching for questions"
                    onChange={onChange}
                    onBlur={onBlur}
                    multiQuestion
                  />
                )}
              />

              <Controller
                control={control}
                name="question"
                render={({
                  field: { value, onChange, onBlur },
                  fieldState: { error },
                }) => (
                  <TextInput
                    identifier="question"
                    label="Question"
                    value={value}
                    error={error?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    multiQuestion
                  />
                )}
              />

              <Controller
                control={control}
                name="questionType"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <RadioButtons
                    identifier="questionType"
                    header="Question type"
                    multiQuestion
                    error={error?.message}
                    compact
                    data={QuestionTypeData}
                    onValueChange={onChange}
                  />
                )}
              />
              <Button type="submit">Build</Button>
            </form>
          )}

          {showOptions && <AnswerBuilder onSave={onSaveOptions} />}
        </main>
      </div>
    </>
  );
};
export default QuestionBuilder;
