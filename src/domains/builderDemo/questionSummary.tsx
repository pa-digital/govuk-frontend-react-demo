import {
  Header,
  Content,
  SummaryListItemProps,
  SummaryList,
  Button
} from "@pa-digital/govuk-frontend-react"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { IQuestion, IQuestions } from "./IQuestion"
import { getCookie, setCookie } from "react-use-cookie"

const QuestionSummary = () => {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>()
  const [listData, setListData] = useState<SummaryListItemProps[]>([])

  const handleAddToQuestions = () => {
    const currentQuestionsCookieData = getCookie("questions")
    const newQuestions: IQuestions = { questions: [] }

    if (currentQuestionsCookieData) {
      var currentQuestions: IQuestions = JSON.parse(
        currentQuestionsCookieData
      ) as unknown as IQuestions
      currentQuestions.questions.forEach(question => {
        newQuestions.questions.push(question)
      })
    }
    if (currentQuestion) {
      newQuestions.questions.push(currentQuestion)
    }
    setCookie("currentQuestion", "")
    setCookie("questions", JSON.stringify(newQuestions))
    return navigate("/builder")
  }

  useEffect(() => {
    var cookieData: IQuestion = JSON.parse(getCookie("currentQuestion")) as unknown as IQuestion
    const summaryList: SummaryListItemProps[] = [
      {
        key: "Title",
        value: cookieData.title,
        links: [
          {
            to: "/updateCurentQuestion",
            text: "Title"
          }
        ]
      },
      {
        key: "Description",
        value: cookieData.description,
        links: [
          {
            to: "/updateCurentQuestion",
            text: "Description"
          }
        ]
      },
      {
        key: "Question",
        value: cookieData.question,
        links: [
          {
            to: "/updateCurentQuestion",
            text: "Question"
          }
        ]
      },
      {
        key: "Question type",
        value: cookieData.questionType,
        links: [
          {
            to: "/updateCurentQuestion",
            text: "Question type"
          }
        ]
      }
    ]
    if (cookieData.options.length >= 1) {
      summaryList.push({
        key: "Options",
        value: (
          <ul>
            {cookieData.options.map((option, index) => {
              return <li key={index}>{option}</li>
            })}
          </ul>
        ),
        links: [
          {
            to: "/updateCurentQuestion",
            text: "Options"
          }
        ]
      })
    }
    setListData(summaryList)
    setCurrentQuestion(cookieData)
  }, [])

  return (
    <>
      <div className="govuk-width-container" id="content">
        <main className="govuk-main-wrapper">
          <Header>Question summary</Header>
          <Content>Please check your question below.</Content>
          {listData && (
            <>
              <SummaryList list={listData} />
              <Button onClick={() => handleAddToQuestions()}>Add to questions</Button>
            </>
          )}
        </main>
      </div>
    </>
  )
}

export default QuestionSummary
