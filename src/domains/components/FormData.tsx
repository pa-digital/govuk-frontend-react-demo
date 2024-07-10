import {
  SummaryListItemProps,
  BreadcrumbLink,
  CheckBoxDataProps,
  RadioButtonDataProps,
  SelectDataProps,
  TableCellDataProps,
  TableRowDataProps,
  Content,
  SummaryCardListCardProps,
  AccordionElement
} from "@pa-digital/govuk-frontend-react"

export const SummaryData: SummaryListItemProps[] = [
  {
    key: "Name",
    value: "Sarah Philips"
  },
  {
    key: "Date of birth",
    value: "5 January 1978"
  },
  {
    key: "Contact details",
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    )
  }
]

export const PartialActionSummaryData: SummaryListItemProps[] = [
  {
    key: "Name",
    value: "Sarah Philips"
  },
  {
    key: "Date of birth",
    value: "5 January 1978",
    links: [
      {
        to: "/update-dob",
        text: "Change"
      }
    ]
  },
  {
    key: "Contact details",
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    ),
    links: [
      {
        to: "/update-details",
        text: "Change",
        assistiveLinkText: "Change your phone number or email address"
      }
    ]
  }
]

export const ActionSummaryData: SummaryListItemProps[] = [
  {
    key: "Name",
    value: "Sarah Philips",
    links: [
      {
        to: "/update-name",
        text: "Change"
      }
    ]
  },
  {
    key: "Date of birth",
    value: "5 January 1978",
    links: [
      {
        to: "/update-dob",
        text: "Change"
      }
    ]
  },
  {
    key: "Contact details",
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    ),
    links: [
      {
        to: "/add-details",
        text: "Add",
        assistiveLinkText: "Add your phone number or email address"
      },
      {
        to: "/update-details",
        text: "Change",
        assistiveLinkText: "Change your phone number or email address"
      }
    ]
  }
]

export const MissingSummaryData: SummaryListItemProps[] = [
  {
    key: "Name",
    value: "Sarah Philips",
    links: [
      {
        to: "/update-name",
        text: "Change"
      }
    ]
  },
  {
    key: "Date of birth",
    value: "5 January 1978",
    links: [
      {
        to: "/update-dob",
        text: "Change"
      }
    ]
  },
  {
    key: "Contact details",
    value: {
      to: "/enter-contact-info",
      text: "Enter contact information"
    },
    links: []
  }
]

export const NoCardActionSummaryCards: SummaryCardListCardProps[] = [
  {
    title: "Lead tenant",
    summaryList: [
      {
        key: "Age",
        value: "38",
        links: [
          {
            to: "/update-age",
            text: "Change"
          }
        ]
      },
      {
        key: "Nationality",
        value: "UK national resident in UK",
        links: [
          {
            to: "/update-nationality",
            text: "Change"
          }
        ]
      },
      {
        key: "Working situation",
        value: "Part time – less than 30 hours a week",
        links: [
          {
            to: "/update-working",
            text: "Change"
          }
        ]
      }
    ]
  },
  {
    title: "Person 2",
    summaryList: [
      {
        key: "Details known",
        value: "Yes",
        links: [
          {
            to: "/update-details-known",
            text: "Change"
          }
        ]
      },
      {
        key: "Relationship to lead tenant",
        value: "Partner",
        links: [
          {
            to: "/update-relationship",
            text: "Change"
          }
        ]
      },
      {
        key: "Age",
        value: "42",
        links: [
          {
            to: "/update-age",
            text: "Change"
          }
        ]
      },
      {
        key: "Working situation",
        value: "Unable to work because of long-term sickness or disability",
        links: [
          {
            to: "/update-working",
            text: "Change"
          }
        ]
      }
    ]
  },
  {
    title: "Person 3",
    summaryList: [
      {
        key: "Details known",
        value: "Yes",
        links: [
          {
            to: "/update-details-known",
            text: "Change"
          }
        ]
      },
      {
        key: "Relationship to lead tenant",
        value: "Child",
        links: [
          {
            to: "/update-relationship",
            text: "Change"
          }
        ]
      },
      {
        key: "Age",
        value: "7",
        links: [
          {
            to: "/update-age",
            text: "Change"
          }
        ]
      },
      {
        key: "Working situation",
        value: "Child under 16",
        links: [
          {
            to: "/update-working",
            text: "Change"
          }
        ]
      }
    ]
  }
]

export const CardActionSummaryCards: SummaryCardListCardProps[] = [
  {
    title: "University of Gloucestershire",
    summaryList: [
      {
        key: "Course",
        value: (
          <>
            English (3DMD)
            <br />
            PGCE with QTS full time
          </>
        )
      },
      {
        key: "Location",
        value: (
          <>
            School name
            <br />
            Road, City, SW1 1AA
          </>
        )
      }
    ],
    cardActions: [
      {
        text: "Delete choice",
        extendedText: "of University of Gloucestershire (University of Gloucestershire)",
        action: "delete"
      },
      {
        text: "Withdraw",
        extendedText: "from University of Gloucestershire (University of Gloucestershire)",
        action: "withdraw"
      }
    ]
  },
  {
    title: "University of Bristol",
    summaryList: [
      {
        key: "Course",
        value: (
          <>
            English (Q3X1)
            <br />
            PGCE with QTS full time
          </>
        )
      },
      {
        key: "Location",
        value: (
          <>
            School name
            <br />
            Road, City, SW2 1AA
          </>
        )
      }
    ],
    cardActions: [
      {
        text: "Delete choice",
        extendedText: "of University of Bristol (University of Bristol)",
        action: "delete"
      },
      {
        text: "Withdraw",
        extendedText: "from University of Bristol (University of Bristol)",
        action: "withdraw"
      }
    ]
  }
]

export const BreadcrumbLinks: BreadcrumbLink[] = [
  {
    text: "GDS Compliance",
    to: "/"
  },
  {
    text: "Components",
    to: "/components"
  },
  {
    text: "Inputs",
    to: "/inputs",
    assistiveText: "standard inputs for a form"
  }
]

export const BreadcrumbLinksCollapse: BreadcrumbLink[] = [
  {
    text: "GDS Compliance",
    to: "/"
  },
  {
    text: "Get In Touch",
    to: "#"
  },
  {
    text: "Online Form",
    to: "/contact",
    assistiveText: "an interactive contact us form"
  }
]

export const CheckBoxData: CheckBoxDataProps[] = [
  {
    text: "France",
    value: "France"
  },
  {
    text: "Portugal",
    value: "Portugal"
  },
  {
    text: "Spain",
    value: "Spain"
  },
  {
    text: "or",
    value: "",
    divider: true
  },
  {
    text: "No, I will not be travelling to any of these countries",
    value: "None"
  }
]

export const ExclusiveCheckBoxData: CheckBoxDataProps[] = [
  {
    text: "France",
    value: "France"
  },
  {
    text: "Portugal",
    value: "Portugal"
  },
  {
    text: "Spain",
    value: "Spain"
  },
  {
    text: "or",
    value: "",
    divider: true
  },
  {
    text: "No, I will not be travelling to any of these countries",
    value: "None",
    exclusive: true
  }
]

export const InvalidCheckBoxData: CheckBoxDataProps[] = [
  {
    text: "France",
    value: "France",
    checked: true
  },
  {
    text: "Portugal",
    value: "Portugal"
  },
  {
    text: "Spain",
    value: "Spain"
  },
  {
    text: "or",
    value: "",
    divider: true
  },
  {
    text: "No, I will not be travelling to any of these countries",
    value: "None",
    checked: true
  }
]

export const CompactCheckBoxData: CheckBoxDataProps[] = [
  {
    text: "HM Revenue and Customs (HMRC)",
    value: "hmrc"
  },
  {
    text: "Employment Tribunal",
    value: "employment-tribunal"
  },
  {
    text: "Ministry of Defence",
    value: "MOD"
  },
  {
    text: "Department for Transport",
    value: "DfT"
  }
]

export const NationalityCheckBoxData: CheckBoxDataProps[] = [
  {
    text: "British",
    value: "British",
    hint: "including English, Scottish, Welsh and Northern Irish"
  },
  {
    text: "Irish",
    value: "Irish"
  },
  {
    text: "Citizen of another country",
    value: "other"
  }
]

export const WhereDoYouLiveData: RadioButtonDataProps[] = [
  {
    text: "England",
    value: "England"
  },
  {
    text: "Scotland",
    value: "Scotland"
  },
  {
    text: "Wales",
    value: "Wales"
  },
  {
    text: "Northern Ireland",
    value: "NIreland"
  }
]

export const NameChangeData: RadioButtonDataProps[] = [
  {
    text: "Yes",
    value: "Yes"
  },
  {
    text: "No",
    value: "No"
  }
]

export const PreSelectedNameChangeData: RadioButtonDataProps[] = [
  {
    text: "Yes",
    value: "Yes"
  },
  {
    text: "No",
    value: "No",
    checked: true
  }
]

export const SignInData: RadioButtonDataProps[] = [
  {
    text: "Sign in with Government Gateway",
    value: "GovGateway",
    hint: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
  },
  {
    text: "Sign in with GOV.UK Verify",
    value: "GovVerify",
    hint: "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
  }
]

export const WhereDoYouLiveExtData: RadioButtonDataProps[] = [
  {
    text: "England",
    value: "England"
  },
  {
    text: "Scotland",
    value: "Scotland"
  },
  {
    text: "Wales",
    value: "Wales"
  },
  {
    text: "Northern Ireland",
    value: "NIreland"
  },
  {
    text: "or",
    value: "",
    divider: true
  },
  {
    text: "I am a British citizen living abroad",
    value: "Abroad"
  }
]

export const UnSelectedData: SelectDataProps[] = [
  {
    text: "Recently published",
    value: "published"
  },
  {
    text: "Recently updated",
    value: "updated"
  },
  {
    text: "Most views",
    value: "views"
  },
  {
    text: "Most comments",
    value: "comments"
  }
]

export const PreSelectedData: SelectDataProps[] = [
  {
    text: "Recently published",
    value: "published"
  },
  {
    text: "Recently updated",
    value: "updated"
  },
  {
    text: "Most views",
    value: "views"
  },
  {
    text: "Most comments",
    value: "comments"
  }
]

export const LocationData: SelectDataProps[] = [
  {
    text: "Choose location",
    value: "choose"
  },
  {
    text: "East Midlands",
    value: "eastmidlands"
  },
  {
    text: "East of England",
    value: "eastofengland"
  },
  {
    text: "London",
    value: "london"
  },
  {
    text: "North East",
    value: "northeast"
  },
  {
    text: "North West",
    value: "northwest"
  },
  {
    text: "South East",
    value: "southeast"
  },
  {
    text: "South West",
    value: "southwest"
  },
  {
    text: "West Midlands",
    value: "westmidlands"
  },
  {
    text: "Yorkshire and the Humber",
    value: "yorkshire"
  }
]

export const TableHeaderData: TableCellDataProps[] = [
  {
    value: "Month you apply"
  },
  {
    value: "Rate for bicycles",
    dataType: "numeric"
  },
  {
    value: "Rate for vehicles",
    dataType: "numeric"
  }
]

export const TableRowData: TableRowDataProps[] = [
  {
    cells: [
      {
        value: "January"
      },
      {
        value: "£85",
        dataType: "numeric"
      },
      {
        value: "£95",
        dataType: "numeric"
      }
    ]
  },
  {
    cells: [
      {
        value: "February"
      },
      {
        value: "£75",
        dataType: "numeric"
      },
      {
        value: "£55",
        dataType: "numeric"
      }
    ]
  },
  {
    cells: [
      {
        value: "March"
      },
      {
        value: "£165",
        dataType: "numeric"
      },
      {
        value: "£125",
        dataType: "numeric"
      }
    ]
  }
]

export const StandardAccordionData: AccordionElement[] = [
  {
    title: "Writing well for the web",
    expanded: false,
    content: (
      <>
        <Content>This is the content for Writing well for the web.</Content>
      </>
    )
  },
  {
    title: "Writing well for the specialists",
    expanded: false,
    content: (
      <>
        <Content>This is the content for Writing well for the specialists.</Content>
      </>
    )
  },
  {
    title: "Know your audience",
    expanded: false,
    content: (
      <>
        <Content>This is the content for Know your audience.</Content>
      </>
    )
  },
  {
    title: "How people read",
    expanded: false,
    content: (
      <>
        <Content>This is the content for How people read.</Content>
      </>
    )
  }
]

export const PartialOpenAccordionData: AccordionElement[] = [
  {
    title: "Writing well for the web",
    expanded: false,
    content: (
      <>
        <Content>This is the content for Writing well for the web.</Content>
      </>
    )
  },
  {
    title: "Writing well for the specialists",
    expanded: true,
    content: (
      <>
        <Content>This is the content for Writing well for the specialists.</Content>
      </>
    )
  },
  {
    title: "Know your audience",
    expanded: false,
    content: (
      <>
        <Content>This is the content for Know your audience.</Content>
      </>
    )
  },
  {
    title: "How people read",
    expanded: false,
    content: (
      <>
        <Content>This is the content for How people read.</Content>
      </>
    )
  }
]
