import { Header, Content, CTAButton } from "@pa-digital/govuk-frontend-react";
import React, { useEffect, useState } from "react";
import { getCookie } from "react-use-cookie";
import { IQuestions } from "./IQuestion";
import { IQuestionSet } from "./IQuestionSet";
const Builder = () => {
  const [questions, setQuestions] = useState<IQuestions>();
  const [questionSets, setQuestionSets] = useState<IQuestionSet[]>();

  useEffect(() => {}, [questions, questionSets]);

  useEffect(() => {
    var cookieQuestions = getCookie("questions");
    var cookieQuestionSets = getCookie("questionSets");
    if (cookieQuestions) {
      var questionData: IQuestions = JSON.parse(
        cookieQuestions
      ) as unknown as IQuestions;
      setQuestions(questionData);
    }
    if (cookieQuestionSets) {
      var questionSetData: IQuestionSet[] = JSON.parse(
        cookieQuestionSets
      ) as unknown as IQuestionSet[];
      setQuestionSets(questionSetData);
    }
  }, []);

  return (
    <>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <Header>Builder Demo</Header>
          <Content>This is a POC Rapid Development example.</Content>
          <Header as="h2">Questions</Header>
          <Content>
            You currently have {questions?.questions.length || 0} questions.
          </Content>

          <CTAButton to="/questionbuilder">Add question</CTAButton>
          <Header as="h2">Question Sets</Header>
          <Content>
            You currently have {questionSets?.length || 0} question sets.
          </Content>

          <CTAButton to="/questionsetbuilder">Add question set</CTAButton>
          {questionSets && (
            <>
              <Header as="h2">Surveys</Header>
              <Content>
                {questionSets?.map((questionSet) => {
                  return (
                    <React.Fragment key={questionSet.id}>
                      <CTAButton
                        variant="secondary"
                        to={`/survey/${questionSet.id}`}
                      >
                        {`Preview ${questionSet.title}`}
                      </CTAButton>
                      <br />
                    </React.Fragment>
                  );
                })}
              </Content>
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Builder;
