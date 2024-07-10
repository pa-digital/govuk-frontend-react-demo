import {
  Content,
  Header,
  SummaryList,
  SummaryListItemProps,
  SummaryListProps,
} from "@pa-digital/govuk-frontend-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IQuestionSet } from "./IQuestionSet";
import QuestionSetContainer from "./questionSetContainer";

const Survey = () => {
  let params = useParams();
  const [surveyId] = useState(params.surveyId);
  const [summaryListData, setSummaryListData] = useState<SummaryListProps>();
  const [responseData, setResponseData] = useState<IQuestionSet>();

  const handleOnComplete = (questionSet: IQuestionSet) => {
    setResponseData(questionSet);
  };

  useEffect(() => {
    if (responseData && !summaryListData) {
      const summaryListDataModel: SummaryListProps = {
        list: [],
      };
      responseData.questions.forEach((response) => {
        const item: SummaryListItemProps = {
          key: response.title,
          value: response.value || "",
        };
        summaryListDataModel.list.push(item);
      });
      setSummaryListData(summaryListDataModel);
    }
  }, [surveyId, responseData, summaryListData]);
  return (
    <>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <Header>Survey Header</Header>
          {surveyId && !summaryListData && (
            <>
              <Content>Instructions to complete the survey element.</Content>
              <QuestionSetContainer
                id={surveyId}
                onComplete={handleOnComplete}
              />{" "}
            </>
          )}
          {summaryListData && (
            <>
              <Content>Please find the results shown below.</Content>
              <SummaryList list={summaryListData.list} />
            </>
          )}
        </main>
      </div>
    </>
  );
};

export default Survey;
