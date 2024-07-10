import {
  Button,
  CheckBoxDataProps,
  CheckBoxList,
  Content,
  Header,
  mapCheckBoxListToArray,
  TextInput,
} from "@pa-digital/govuk-frontend-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie, setCookie } from "react-use-cookie";
import {
  IQuestionSet,
  IQuestionSetQuestionSearchForm,
  questionSetSearchFormSchema,
} from "./IQuestionSet";
import { IQuestions } from "./IQuestion";

const QuestionSetQuestions = () => {
  const navigate = useNavigate();
  const [questionSetData, setQuestionSetData] = useState<IQuestionSet>();
  const [questions, setQuestions] = useState<IQuestions>();
  const [showQuestions, setShowQuestions] = useState(false);
  const [toggleSearchResults, setToggleSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<CheckBoxDataProps[]>([]);
  const [selectedQuestions, setSelectedQuestions] = useState<string[]>([]);
  const { control, handleSubmit } = useForm<IQuestionSetQuestionSearchForm>({
    resolver: yupResolver(questionSetSearchFormSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (formData: IQuestionSetQuestionSearchForm) => {
    const searchTerm = formData.search.toLowerCase();
    const results = questions?.questions.filter((x) => {
      return (
        x.title.toLowerCase().includes(searchTerm) ||
        x.description.toLowerCase().includes(searchTerm) ||
        x.question.toLowerCase().includes(searchTerm)
      );
    });

    const selectableQuestions: CheckBoxDataProps[] = [];
    if (results && results?.length > 0) {
      results?.forEach((question, index) => {
        selectableQuestions.push({
          text: `${question.title} - ${question.questionType}`,
          value: index.toString(),
          hint: question.description,
        });
      });
      setSearchResults(selectableQuestions);
      setShowQuestions(true);
    }
    setToggleSearchResults(!toggleSearchResults);
    return false;
  };

  const handleSearchResultsSelection = (data: CheckBoxDataProps[]) => {
    const selectedValues = mapCheckBoxListToArray(data);
    setSelectedQuestions(selectedValues);
  };

  const handleConfigureQuestions = () => {
    const currentBuilder = JSON.parse(
      getCookie("currentQuestionSet")
    ) as unknown as IQuestionSet;

    if (questions && questions.questions) {
      selectedQuestions.forEach((questionIndex) => {
        const q = questions.questions[parseInt(questionIndex)];
        currentBuilder.questions.push({
          id: q.id,
          title: q.title,
          description: q.description,
          question: q.question,
          questionType: q.questionType,
          options: q.options,
          required: false,
        });
      });
    }

    setCookie("currentQuestionSet", JSON.stringify(currentBuilder));
    return navigate("/questionSetBuilderConfigureQuestions");
  };

  useEffect(() => {}, [toggleSearchResults]);

  useEffect(() => {
    var cookieData: IQuestionSet = JSON.parse(
      getCookie("currentQuestionSet")
    ) as unknown as IQuestionSet;
    const questions = JSON.parse(
      getCookie("questions")
    ) as unknown as IQuestions;
    setQuestionSetData(cookieData);
    setQuestions(questions);
  }, []);

  return (
    <>
      {questionSetData && questions && (
        <>
          <div className="govuk-width-container" id="content">
            <main className="govuk-main-wrapper">
              <Header>Question Set builder</Header>
              <Content>
                Select the questions for the {questionSetData?.title} question
                set.
              </Content>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <Controller
                      control={control}
                      name="search"
                      defaultValue=""
                      render={({
                        field: { value, onChange, onBlur },
                        fieldState: { error },
                      }) => (
                        <TextInput
                          identifier="search"
                          label="Search"
                          value={value}
                          error={error?.message}
                          onChange={onChange}
                          onBlur={onBlur}
                          multiQuestion
                        />
                      )}
                    />
                  </div>
                  <div className="govuk-grid-column-one-quarter">
                    <Button variant="secondary" type="submit">
                      Search
                    </Button>
                  </div>
                </div>
              </form>
              {showQuestions && (
                <>
                  <div className="govuk-grid-row">
                    <div className="govuk-grid-column-full">
                      <CheckBoxList
                        identifier="filteredQuestions"
                        header="Search results"
                        compact
                        data={searchResults}
                        onValueChange={handleSearchResultsSelection}
                      />
                      <Button onClick={() => handleConfigureQuestions()}>
                        Configure questions
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </main>
          </div>
        </>
      )}
    </>
  );
};
export default QuestionSetQuestions;
