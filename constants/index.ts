export const storageKeys = {
  USER_COLOR_PREF: "userColorPref",
  USER_ACCESS_TOKEN: "userAccessToken",
  USER_REFRESH_TOKEN: "userRefreshToken",
  USER_ID: "userId",
};

export const feedNavbar = [
  {
    id: 1,
    name: "public",
    link: "/feed",
  },
  {
    id: 2,
    name: "private",
    link: "/feed/private",
  },
  {
    id: 3,
    name: "mentions",
    link: "/feed/mentions",
  },
  {
    id: 4,
    name: "activity",
    link: "/feed/activity",
  },
];

export const clubhouseNavbar = [
  {
    id: 1,
    name: "pinned",
    link: "/clubhouse",
  },
  {
    id: 2,
    name: `clubhouses i'm part of`,
    link: "/clubhouse/myclubhouses",
  },
  {
    id: 3,
    name: "join a clubhouse",
    link: "/clubhouse/otherclubhouses",
  },
  {
    id: 4,
    name: "my clubhouses",
    link: "/clubhouse/createdclubhouses",
  },
];

export const coachingNavbar = [
  {
    id: 1,
    name: "1:1 coaching",
    link: "/learn",
  },
  {
    id: 2,
    name: "my sessions",
    link: "/learn/mysessions",
  },
  {
    id: 3,
    name: "courses",
    link: "/learn/courses",
  },
];

export const superconnectionNavbar = [
  {
    id: 1,
    name: "recommendations",
    link: "/superconnections",
  },
  {
    id: 2,
    name: "my network",
    link: "/superconnections/mynetwork",
  },
  {
    id: 3,
    name: "messages",
    link: "/superconnections/messages",
  },
];

export const myNetworkNavbar = [
  {
    id: 1,
    name: "sent",
    link: "/superconnections/mynetwork",
  },
  {
    id: 2,
    name: "received",
    link: "/superconnections/mynetwork/received",
  },
];

export const messageNavbar = [
  {
    id: 1,
    name: "chats",
    link: "/superconnections/messages",
  },
  {
    id: 2,
    name: "message requests",
    link: "/superconnections/messages/messagereq",
  },
];

export const experiencesNavbar = [
  {
    id: 1,
    name: "upcoming",
    link: "/experiences",
  },
  {
    id: 2,
    name: "booked",
    link: "/experiences/booked",
  },
  {
    id: 3,
    name: "podcasts and videos",
    link: "/experiences/archives",
  },
];

export const sidebarItems = [
  {
    id: 1,
    name: "feed",
    link: "/feed",
  },
  {
    id: 2,
    name: "clubhouse",
    link: "/clubhouse",
  },
  {
    id: 3,
    name: "superconnections",
    link: "/superconnections",
  },
  {
    id: 4,
    name: "experiences",
    link: "/experiences",
  },
  {
    id: 5,
    name: "learn",
    link: "/learn",
  },
];

export const ChTags = [
  "all",
  "fun",
  "entrepreneurs",
  "health & wellness",
  "technology",
  "groups",
  "food & drinks",
  "investing & finance",
  "professional",
  "gender",
  "cities",
  "career growth",
  "self-growth",
  "sales & marketing",
];

export const ExpTags = [
  `all`,
  `masterclass`,
  `experiences`,
  `clubhouse huddles`,
  `online`,
  `offline`,
];

export const Filters = [`all`, `bengaluru`, `delhi ncr`, `mumbai`, `other`];

export const Sorts = [
  `alphabetical`,
  `price: low to high`,
  `price: high to low`,
];

export const Packages = [
  {
    cost: 5000,
    popular: false,
    preTaxCost: 5000,
    sessionCount: 1,
    _id: "1",
  },
  {
    cost: 15000,
    popular: true,
    preTaxCost: 15000,
    sessionCount: 3,
    _id: "2",
  },
  {
    cost: 25000,
    popular: false,
    preTaxCost: 25000,
    sessionCount: 5,
    _id: "3",
  },
  {
    cost: 50000,
    popular: false,
    preTaxCost: 50000,
    sessionCount: 10,
    _id: "4",
  },
];

export const companies = [
  "airbnb",
  "zomato",
  "netflix",
  "google",
  "cred",
  "apple",
  "bumble",
  "dropbox",
  "sony",
  "leap.club",
  "nike",
  "paytm",
  "amazon",
  "samsung",
];

export const ProfileDetail = {
  headline: "agency partnerships manager at google. ",
  image: "/assets/images/Ragini.png",
  name: "mahalaxmi krishnamoorthy",
  industryTags: [
    "internet & tech",
    "product & tech",
    "sales & marketing, partnerships",
  ],
  city: "netherlands",
  connected: true,
  connectionsCount: 500,
  experience: "",
  leader: "michelle obama",
  currentCompany: "zomato",
  companyAdmire: ["netflix", "airbnb", "bumble"],
  undergrad: "DTU, delhi",
  postgrad: "Jai hind",
  topSkills: ["data analytics", "brand & marketing", "operations"],
  hobbies: "food & cooking, cocktails & wine, travel",
  introduction:
    "changing the 0-1 journey for new product, and building a company in the ed-tech space since the past 5 years.",
  chList: [
    "all",
    "fun",
    "entrepreneurs",
    "health & wellness",
    "technology",
    "groups",
    "food & drinks",
    "investing & finance",
    "professional",
    "gender",
    "cities",
    "career growth",
    "self-growth",
    "sales & marketing",
  ],
};

export const searchFilterTags = {
  industryTags: [
    "advertising & marketing",
    "design",
    "e-commerce",
    "education, edtech",
    "f&b",
    "fmcg",
    "founders",
    "health & wellness",
    "hospitality",
    "hr, recruitment",
    "internet & tech",
    "law",
    "looking for investors, co-founders, advisors",
    "looking for mentors",
    "media",
    "operations",
    "pr, communications",
    "product & tech",
    "retail",
    "sales & marketing, partnerships",
    "social impact",
    "strategy & consulting",
    "telecom",
    "vc & fin services",
  ],
  skillTags: [
    "strategy",
    "data analytics",
    "sales & business development",
    "brand & marketing",
    "team management",
    "the 0-1 journey/new business",
    "content creation & communication",
    "design",
    "digital marketing",
    "sports/sports management",
    "operations",
    "startups",
    "project management",
    "finance and accounting",
  ],
  workExperienceTags: [
    "0 - 3 years",
    "3 - 6 years",
    "6 - 9 years",
    "9 - 12 years",
    "12 - 15 years",
    "15 - 18 years",
    "18 years and above",
  ],
  cityTags: ["gurgaon", "mumbai", "bangalore", "global", "remote", "other"],
};

export const prompts = [
  {
    title: "a life goal of mine",
    value: "",
  },
  {
    title: "apparently, my life’s soundtrack is",
    value: "",
  },
  {
    title: "biggest risk i’ve taken",
    value: "",
  },
  {
    title: "give me travel tips for",
    value: "",
  },
  {
    title: "most spontaneous thing i’ve done",
    value: "",
  },
  {
    title: "my most controversial opinion is",
    value: "",
  },
  {
    title: "never have i ever",
    value: "",
  },
  {
    title: "two truths and a lie",
    value: "",
  },
  {
    title: "what i order for the table",
    value: "",
  },
  {
    title: "superconnect with me for...",
    value: "",
  },
  {
    title: "i feel empowered when...",
    value: "",
  },
  {
    title: "a passion project i am working on now is...",
    value: "",
  },
  {
    title: "i am confused about...",
    value: "",
  },
];