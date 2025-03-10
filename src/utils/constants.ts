import {
  BlogPost,
  ProfessionalExperience,
  ProjectCard,
  URLProps,
} from "./models";

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

export const defaultBlogPosts: BlogPost[] = [
  {
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/blogs%2FAutomation%20with%20Python.jpeg?alt=media&token=955dabd2-4aa5-4ac6-ab1e-ab8ae4ab167c",
    description:
      "DSC BVP Pune organised Automation with Python, a workshop to help the participants get started with automating things on the web. The workshop ran over for two hours and covered everything from writing your first Hello World program in python to using Selenium to browse a particular link. The participants were able to write they're first program that enabled them to fetch profile pictures of Instagram users using selenium. The number of participants who attended the workshop were above 50 of which 10–15 were girls. All of them were fully energetic and had an expression of willingness to learn. Overall this workshop was a great experience for me as it was the first time I delivered a workshop. The participants applauded for the speaker and thanked DSC for taking this initiative and requested to organize more such events in future.",
    title: "Automation with Python",
    workshop: "true",
    date: "2019-02-18",
    slug: "automation-with-python",
  },
  {
    imgURL: "",
    workshop: "false",
    date: "2020-02-29",
    description:
      "Hey there! I’ll be covering mostly how you can get started into web app development. If you are totally new to development and are a bit unsure about what you should start with, I’d recommend browsing through different options available.  You can start with writing simple HTML pages or with designing UI with Flutter or writing Node.JS services or making your own social media network. Most of the people start out by learning with HTML and CSS after which they proceed forward to learn JavaScript. Try designing a few basic web pages using different HTML tags, different CSS properties and enabling different functionalities through JavaScript. If you’re sure this feels right, and you’d like to continue working with webpages or UI designing, you can try your hand with different JavaScript frameworks like VueJS, ReactJS or AngularJS.  If your appeal is more towards making things function more than creating good layouts, I would recommend working with Django, Node.JS or Flask. Django and Flask are python based frameworks that make designing backend services very easy. Django is more flexible for heavy weight applications whereas Flask can be used to design lightweight services or applications. Node.JS is a JavaScript based framework that can be used to design light weight server instances. Backend services can basically be used to handle stuff like registering / logging in users, maintaining blogs, contact us forms, etc.  If you have some background with basic HTML and you’re thinking to work with mobile app development, you should try working with React Native. It’s one of the most popular frameworks to develop cross platform mobile apps. Most of the properties used to style different elements in the mobile app in React Native are similar to CSS properties. React Native also uses npm, so people who are a bit familiar with npm already can work with it.  However, designing React Native apps tend to become a bit tedious due to the unavailability of useful elements. If you feel so, you can try shifting your approach towards Flutter. Flutter is a cross platform UI designing framework. Using Flutter, mobile apps for both Android and iOS phones can be made pretty easily. Not only that, UI’s for Desktops, Embedded Systems and websites can be made pretty easily with a single codebase. That means you can basically design a website, a mobile app, a desktop app and the UI of any device using the same code! Amazing, isn’t it? Flutter is a dart based framework. So, it’s perfect for people who have some background with C++ or Java.  If you’re a designer, I recommend trying your hand on Adobe XD. Supernova Studio is a design to code platform. This means you can design interfaces and create code just like that. You can load your XD or Sketch files into Supernova Studio and you can export code for Android, iOS, React Native and Flutter. Just like that. Adobe XD is also going to release a design to Flutter code plugin pretty soon.  So, that’s all I have to say about different web frameworks that are available. It’s a good practice to work with at least 2-3 projects to learn a particular framework or language. Pick up a framework or language, try coding whatever stuff you learn simultaneously and when in doubt, ask someone to sort you out. With that, I end, wishing you the best!",
    title: "Dipping your toes into the field of Development",
    slug: "dipping-your-toes-into-the-field-of-development",
  },
  {
    imgURL: "",
    title: "Flutter Interact Viewing Party",
    description:
      "The Flutter Team organised a global party for Flutter, and we at DSC BVP Pune organised one. On December 13th, we organised a Flutter Interact Viewing Party where we shared a variety of news and updates about Flutter. The event spanned about for 3 hours. After having discussed the keynote, I demonstrated how a basic Hello World structure could be implemented. After that, we discussed about the various tools that already dominated the industry and how Flutter gives competition to these existing frameworks. By the end of the day, the attendees were very enthusiastic to learn Flutter and were thankful to DSC BVP Pune for having organised such a workshop.",
    workshop: "true",
    date: "2019-12-13",
    slug: "flutter-interact-viewing-party",
  },
  {
    workshop: "true",
    imgURL:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/blogs%2FHacktoberfest%20in%20Bharati%20Vidyapeeth%20Pune.jpeg?alt=media&token=4e09f504-9ec6-43ce-99c7-0992626d0680",
    title: "Hacktoberfest in Bharati Vidyapeeth Pune",
    description:
      "DSC BVP Pune organised Hacktoberfest in Bharati Vidyapeeth Pune, an event to celebrate the spirit of Open Source Development and encourage more students to work with various Open Source Organisations. I spoke about open source, GitHub, Digital Ocean and Hacktoberfest. After that, I helped the participants to install git bash. I then talked about varioud basic git commands like git — status, push, add, commit. Having demonstrated each of they're features, the participants were given some time to implement and try these commands by thereselves. A practical hands on session was organised where the attendees created they're first repository. Just for fun, the name suggested by GitHub was kept as the repository name (like Bassoning-Baboon). Here different users published a \"Hello World\" code in different languages. I then talked about how git — branch, origin, merge, reset, clone, init, checkout works. A practical hands on session was conducted for the same. The attendees were then asked to git clone the \"Hacktoberfest\" repository from DSC BVP Pune's account. There were 3 different folders in the repository. In one folder people had to add their name, photos and social media links to the website. Another was where the attendees could get they're mobile app ready by just making a few tweaks. The third one had was all about fixing bugs and raising issues. The event was attended by 50+ attendees, all of whom were able to understand the basics of Version Control and the importance of Open Source Development.",
    date: "2019-10-07",
    slug: "hacktoberfest-in-bharati-vidyapeeth-pune",
  },
  {
    workshop: "true",
    title: "Hands on with Flutter",
    imgURL: "",
    description:
      "DSC BVP Pune organised Hands on with Flutter, a workshop to help the participants get started with writing they're first cross platform mobile application. The workshop ran over for two hours and covered everything from spinning up your first cross platform mobile app to adding multiple dependencies and working with them. The participants were able to design they're first cross platform mobile app. I helped the participants setup Flutter without having to install Android Studio as I wanted to provide a way for students to be able to use Flutter without having to put much load on they're machine. The number of participants who attended the workshop were above 80 out of which 30-35 were girls. All of them were fully energetic and had an expression of willingness to learn. It was a great experience for me as it was the first time I spoke about Flutter.",
    date: "2019-08-24",
    slug: "hands-on-with-flutter",
  },
];
