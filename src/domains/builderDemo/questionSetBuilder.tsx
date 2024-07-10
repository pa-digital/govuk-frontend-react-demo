import {
  Button,
  CheckBoxList,
  Content,
  ErrorSummary,
  Header,
  TextArea,
  TextInput,
} from "@pa-digital/govuk-frontend-react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AreaData,
  IQuestionSet,
  IQuestionSetForm,
  mapQuestionSetFormToQuestionSet,
  questionSetBuilderSchema,
} from "./IQuestionSet";
import { useEffect, useState } from "react";
import { setCookie } from "react-use-cookie";

const QuestionSetBuilder = () => {
  const navigate = useNavigate();
  const [questionSetConstructor, setQuestionSetConstructor] =
    useState<IQuestionSet>();
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IQuestionSetForm>({
    resolver: yupResolver(questionSetBuilderSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      title: "",
      description: "",
      areas: AreaData,
    },
  });

  const onSubmit = (formData: IQuestionSetForm) => {
    const questionSet = mapQuestionSetFormToQuestionSet(formData);
    setQuestionSetConstructor(questionSet);
    return false;
  };

  useEffect(() => {
    if (questionSetConstructor) {
      setCookie("currentQuestionSet", JSON.stringify(questionSetConstructor));
      return navigate("/questionSetQuestions");
    }
  }, [questionSetConstructor, navigate]);

  return (
    <>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <Header>Question Set builder</Header>
          <Content>Construct your question set below.</Content>
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
                  onChange={onChange}
                  onBlur={onBlur}
                  multiQuestion
                />
              )}
            />
            <Controller
              control={control}
              name="buttonText"
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <TextInput
                  identifier="buttonText"
                  label="Button text"
                  value={value}
                  error={error?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  multiQuestion
                  width={10}
                />
              )}
            />
            <Controller
              control={control}
              name="areas"
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <CheckBoxList
                  identifier="areas"
                  header="Areas to apply to"
                  data={value}
                  multiQuestion
                  error={error?.message}
                  compact
                  onValueChange={onChange}
                ></CheckBoxList>
              )}
            />
            <Button type="submit">Add questions</Button>
          </form>
        </main>
      </div>
    </>
  );
};

export default QuestionSetBuilder;
