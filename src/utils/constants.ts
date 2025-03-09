import { ProfessionalExperience, ProjectCard, URLProps } from "./models";

export const defaultWorkingExperience: ProfessionalExperience[] = [
  {
    position: "Founding Engineer",
    company: "Highstock",
    startDate: new Date("2025-01-08T08:00:00+05:30"),
    description:
      "Engineer in founding team at Highstock, my work revolves around building a b2b marketplace for inventory liquidation",
  },
  {
    position: "Software Engineer / Software Engineer 2",
    company: "Udaan",
    startDate: new Date("2022-08-08T08:00:00+05:30"),
    endDate: new Date("2024-12-31T18:00:00+05:30"),
    description: "",
  },
  {
    position: "Full Stack Intern",
    company: "Sony Research India",
    startDate: new Date("2021-06-01T08:00:00+05:30"),
    endDate: new Date("2022-08-02T18:00:00+05:30"),
    description: "",
  },
  {
    position: "Mobile Dev Intern",
    company: "Paycrunch",
    startDate: new Date("2021-04-08T08:00:00+05:30"),
    endDate: new Date("2021-06-01T18:00:00+05:30"),
    description: "",
  },
  {
    position: "Flutter Intern",
    company: "Tezsure",
    startDate: new Date("2020-10-05T08:00:00+05:30"),
    endDate: new Date("2021-02-05T18:00:00+05:30"),
    description: "",
  },
  {
    position: "Research Intern",
    company: "IIIT Allahabad",
    startDate: new Date("2020-06-15T08:00:00+05:30"),
    endDate: new Date("2020-08-15T18:00:00+05:30"),
    description: "",
  },
  {
    position: "Intern",
    company: "IIT Delhi",
    startDate: new Date("2019-06-11T08:00:00+05:30"),
    endDate: new Date("2019-07-28T18:00:00+05:30"),
    description: "",
  },
];

export const defaultSocialMediaLinks: URLProps[] = [
  {
    url: "https://facebook.com/dewanshrawat15",
    type: "facebook",
  },
  {
    url: "https://github.com/dewanshrawat15",
    type: "github",
  },
  {
    url: "https://linkedin.com/in/dewanshrawat15",
    type: "linkedin",
  },
  {
    url: "https://instagram.com/dewanshrawat15",
    type: "instagram",
  },
  {
    url: "https://open.spotify.com/user/dewanshrawat15",
    type: "spotify",
  },
  {
    url: "mailto:dewanshrawat.work@gmail.com",
    type: "mail",
  },
];

export const defaultProjectsData: ProjectCard[] = [
  {
    github: "https://github.com/dewanshrawat15/Tinder-Bot",
    id: 7,
    projectTitle: "Tinder Bot",
    projectTagline:
      "A bot that uses facebook auth to login and find matches on Tinder.",
  },
  {
    id: 5,
    projectTagline:
      "Made a portfolio website for students to be able to update their portfolio from an app.",
    github: "https://github.com/dscbvppune/folio-app",
    projectTitle: "Folio",
  },
  {
    github: "https://github.com/dewanshrawat15/Heart-Disease-Prediction",
    id: 8,
    projectTagline:
      "Built a machine learning model to classify patients having Heart diseases or not from given dataset.",
    projectTitle: "Heart Disease Prediction",
  },
  {
    projectTitle: "Historia",
    projectTagline:
      "A ReactJS based chrome extension to keep track of Visual Browser History.",
    github: "https://github.com/historia-inout",
    id: 1,
  },
  {
    id: 9,
    projectTagline:
      "A smart attendance management system that reduces paperwork.",
    github: "https://github.com/dewanshrawat15/Scan-Q",
    projectTitle: "ScanQ",
  },
  {
    id: 2,
    projectTitle: "NPTEL Downloader",
    github: "https://github.com/dewanshrawat15/NPTEL-downloader",
    projectTagline:
      "Download NPTEL course page videos using the NPTEL Downloader Script",
  },
  {
    projectTitle: "Cats vs Dogs Classifier",
    id: 3,
    projectTagline:
      "Cats vs Dogs classifier based on Transfer Learning approach.",
    github: "https://github.com/dewanshrawat15/Cats-vs-Dogs-Classifier",
  },
  {
    projectTagline:
      "A mobile app using which you can control basic MacOS functions.",
    id: 4,
    github: "https://github.com/dewanshrawat15/Jack",
    projectTitle: "Jack",
  },
  {
    github: "https://github.com/dewanshrawat15/Alfred",
    projectTitle: "Alfred",
    id: 6,
    projectTagline:
      "A mobile app predicts the genres of TV Shows/Movies by their poster.",
  },
];
