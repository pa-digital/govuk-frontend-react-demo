import FormButtons from "domains/components/FormButtons"
import FormCheckboxes from "domains/components/FormCheckBoxes"
import FormDateInputs from "domains/components/FormDateInputs"
import FormInputs from "domains/components/FormInputs"
import FormRadios from "domains/components/FormRadios"
import FormSelect from "domains/components/FormSelect"
import NavigationElements from "domains/components/NavigationElements"
import SiteComponents from "domains/components/SiteComponents"
import SiteContent from "domains/components/SiteContent"
import SiteStates from "domains/components/SiteStates"
import Address from "domains/examples/address"
import ContactUs from "domains/examples/contactUs"
import Examples from "domains/examples/examples"
import Login from "domains/examples/login"
import Credentials from "domains/examples/password"
import Home from "domains/home/home"
import Builder from "domains/builderDemo/builder"
import QuestionBuilder from "domains/builderDemo/questionbuilder"
import QuestionSetBuilder from "domains/builderDemo/questionSetBuilder"
import QuestionSetBuilderQuestionsConfigure from "domains/builderDemo/questionSetBuilderQuestionsConfigure"
import QuestionSetBuilderSummary from "domains/builderDemo/questionSetBuilderSummary"
import QuestionSetQuestions from "domains/builderDemo/questionSetQuestions"
import QuestionSummary from "domains/builderDemo/questionSummary"
import { SkipLink } from "@pa-digital/govuk-frontend-react"
import { Routes, Route } from "react-router-dom"
import Header from "./header"
import Survey from "domains/builderDemo/survey"
import ProtoBuilder from "domains/prototype/protobuilder"
import NIHRBranded from "domains/examples/nihrBranded"
import PretRegister from "domains/examples/register"
import SiteSummaryCardList from "domains/components/SiteSummaryCardList"
import SiteSummaryList from "domains/components/SiteSummaryList"

const RouteTable = () => {
  return (
    <>
      <SkipLink />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<SiteContent />} />
        <Route path="/states" element={<SiteStates />} />
        <Route path="/components" element={<SiteComponents />} />
        <Route path="/buttons" element={<FormButtons />} />
        <Route path="/summary-list" element={<SiteSummaryList />} />
        <Route path="/summary-card-list" element={<SiteSummaryCardList />} />
        <Route path="/checkboxes" element={<FormCheckboxes />} />
        <Route path="/radios" element={<FormRadios />} />
        <Route path="/input" element={<FormInputs />} />
        <Route path="/date" element={<FormDateInputs />} />
        <Route path="/select" element={<FormSelect />} />
        <Route path="/navigation" element={<NavigationElements />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/register" element={<ContactUs />} />
        <Route path="/address" element={<Address />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pretregister" element={<PretRegister />} />
        <Route path="/nihr" element={<NIHRBranded />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/questionbuilder" element={<QuestionBuilder />} />
        <Route path="/questionSummary" element={<QuestionSummary />} />
        <Route path="/questionSetBuilder" element={<QuestionSetBuilder />} />
        <Route path="/survey/:surveyId" element={<Survey />} />
        <Route path="/questionSetBuilderSummary" element={<QuestionSetBuilderSummary />} />
        <Route
          path="/questionSetBuilderConfigureQuestions"
          element={<QuestionSetBuilderQuestionsConfigure />}
        />
        <Route path="/questionSetQuestions" element={<QuestionSetQuestions />} />
        <Route path="/protoBuilder" element={<ProtoBuilder />} />
      </Routes>
    </>
  )
}

export default RouteTable
