import { useEffect, useState } from "react"
import { IQuestionSet } from "./IQuestionSet"
import { useNavigate } from "react-router-dom"
import { getCookie, setCookie } from "react-use-cookie"
import {
  Button,
  Content,
  Header,
  SummaryList,
  SummaryListItemProps,
  TabContent,
  Tabs
} from "@pa-digital/govuk-frontend-react"

const QuestionSetBuilderSummary = () => {
  const navigate = useNavigate()
  const [questionSetData, setQuestionSetData] = useState<IQuestionSet>()
  const [listData, setListData] = useState<SummaryListItemProps[]>([])
  const [tabData, setTabData] = useState<TabContent[]>([])
  const [showData, setShowData] = useState(false)

  const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  const handleAddToQuestionSets = () => {
    if (questionSetData) {
      const questionSets: IQuestionSet[] = []
      const cookieData = getCookie("questionSets")
      if (cookieData) {
        const existing = JSON.parse(cookieData) as unknown as IQuestionSet[]
        existing.forEach(questionSet => {
          questionSets.push(questionSet)
        })
      }
      questionSets.push(questionSetData)
      setCookie("currentQuestionSet", "")
      setCookie("questionSets", JSON.stringify(questionSets))
      return navigate("/builder")
    }
  }

  useEffect(() => {
    if (questionSetData) {
      const summaryList: SummaryListItemProps[] = [
        {
          key: "Title",
          value: questionSetData.title,
          links: [
            {
              to: "/updateQuestionSetBuilder",
              text: "Title"
            }
          ]
        },
        {
          key: "Description",
          value: questionSetData.description,
          links: [
            {
              to: "/updateQuestionSetBuilder",
              text: "Description"
            }
          ]
        },
        {
          key: "Areas",
          value: (
            <ul>
              {questionSetData.areas.map((area, index) => {
                return <li key={index}>{area}</li>
              })}
            </ul>
          ),
          links: [
            {
              to: "/updateQuestionSetBuilder",
              text: "Areas"
            }
          ]
        }
      ]
      setListData(summaryList)
      const tabContent: TabContent[] = []
      questionSetData.questions.forEach((question, index) => {
        let qtValue = capitalizeFirstLetter(question.questionType)
        if (question.required) {
          qtValue += " Required"
        }

        const summaryData: SummaryListItemProps[] = [
          {
            key: "Title",
            value: question.title
          },
          {
            key: "Description",
            value: question.description
          },
          {
            key: "Question Type",
            value: qtValue
          }
        ]
        if (question.required && question.error) {
          summaryData.push({ key: "Error", value: question.error })
        }
        if (question.help) {
          summaryData.push({ key: "Help", value: question.help })
        }
        if (question.options.length > 0) {
          summaryData.push({
            key: "Options",
            value: (
              <>
                <ul>
                  {question.options.map((option, index) => {
                    return <li key={`${option}-${index}`}>{option}</li>
                  })}
                </ul>
              </>
            )
          })
        }

        tabContent.push({
          title: `Q${index + 1}`,
          children: (
            <>
              <SummaryList list={summaryData} />
            </>
          )
        })
      })
      setTabData(tabContent)
    }
  }, [questionSetData])

  useEffect(() => {
    if (listData && listData.length > 0 && tabData && tabData.length > 0) {
      setShowData(true)
    }
  }, [listData, tabData])

  useEffect(() => {
    var cookieData: IQuestionSet = JSON.parse(
      getCookie("currentQuestionSet")
    ) as unknown as IQuestionSet
    setQuestionSetData(cookieData)
  }, [])

  return (
    <>
      {showData && (
        <>
          <div className="govuk-width-container" id="content">
            <main className="govuk-main-wrapper">
              <Header>Question Set builder</Header>
              <Content>
                Please check the configuration for the {questionSetData?.title} question set.
              </Content>
              <SummaryList list={listData} />
              <Tabs heading="Questions" tabs={tabData} />
              <Button onClick={() => handleAddToQuestionSets()}>Add to Question Sets</Button>
            </main>
          </div>
        </>
      )}
    </>
  )
}

export default QuestionSetBuilderSummary
