import { ExperienceItemProps } from "../Components/ExperienceItem";
import { IconType } from "./icons";

export const heroDetails = {
    name: "Dewansh Rawat",
    subtitle: "Full Stack Engineer | Architect | Dreamer"
}

export interface IconProps {
    name: IconType;
    url: string;
}

export const aboutDetails = {
    title: "About Me",
    content: `I'm a passionate full-stack engineer with a proven ability to design, develop, and implement innovative web and mobile applications. I thrive in fast-paced environments and find immense satisfaction in tackling complex challenges that demand expertise in both front-end and back-end development.
    \n\n
    My skillset encompasses a wide range of technologies, allowing me to excel in both front-end (React Native, ReactJS, HTML, CSS, Javascript) and back-end development (Typescript, Kotlin, Python, Django, Flask). Beyond technical proficiency, I possess strong architectural and design skills, enabling me to conceptualize and implement intricate systems. Integration between various components is a key area of focus for me, ensuring a smooth and seamless user experience.
    \n\n
    Problem-solving and efficiency optimization are my strengths. I have a knack for identifying areas where improvements can be made, proposing effective solutions, and streamlining workflows. This translates to a demonstrably enhanced user experience and a more operationally efficient environment. I'm a strong believer in teamwork and communication, and I have a proven track record of successfully leading and mentoring teams in collaborative settings.
    \n\n
    My experience is diverse, encompassing various domains. In e-commerce, I built and revamped user experiences for different categories within a leading B2B platform. The result? Significant improvements in search latency and operational efficiency. In the media and entertainment sector, I developed a platform for extracting metadata from media content and analyzing viewership data, which ultimately provided valuable insights for a major media company. My experience even extends to the realm of blockchain, where I built a mobile wallet app for a blockchain currency and a Flutter package for interaction within the ecosystem.
    \n\n
    Beyond just technical prowess, I'm driven by a constant thirst for knowledge. I actively seek opportunities to stay abreast of the latest advancements in the tech world, continuously expanding my skillset. This dedication fuels my passion for building meaningful applications that make a positive impact.`
}

const experienceSectionConsts: ExperienceItemProps[] = [
    {
        position: "Software Engineer 1",
        company: "Udaan.com",
        startDate: 1659670200000,
        index: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem eget finibus congue. Aenean sed lectus sit amet lacus consequat pretium. Pellentesque aliquet sem ac maximus convallis. Fusce ultricies turpis tempus facilisis auctor. Nullam eu orci mollis, feugiat magna eu, dapibus libero. Nulla facilisi. Integer ultrices condimentum quam, non sollicitudin lacus vestibulum at. Curabitur id nisi sit amet turpis pellentesque molestie. Aliquam ullamcorper sodales turpis, eget vehicula est."
    },
    {
        position: "Full Stack Intern",
        company: "Sony Research India",
        startDate: 1622518200000,
        endDate: 1659583800000,
        index: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam lorem eget finibus congue. Aenean sed lectus sit amet lacus consequat pretium. Pellentesque aliquet sem ac maximus convallis. Fusce ultricies turpis tempus facilisis auctor. Nullam eu orci mollis, feugiat magna eu, dapibus libero. Nulla facilisi. Integer ultrices condimentum quam, non sollicitudin lacus vestibulum at. Curabitur id nisi sit amet turpis pellentesque molestie. Aliquam ullamcorper sodales turpis, eget vehicula est."
    }
];

export const experienceSection = {
    title: "Experience",
    sections: experienceSectionConsts
}

const socialIcons: IconProps[] = [
    {
        name: "email",
        url: "mailto:dewanshrawat.work@gmail.com"
    },
    {
        name: "telephone",
        url: "tel:+91-9968858476"
    },
    {
        name: "github",
        url: "https://github.com/dewanshrawat15"
    },
    {
        name: "linkedin",
        url: "https://linkedin.com/in/dewanshrawat15"
    },
    {
        name: "spotify",
        url: "https://open.spotify.com/user/dewanshrawat15"
    },
    {
        name: "facebook",
        url: "https://facebook.com/dewanshrawat15"
    },
    {
        name: "instagram",
        url: "https://instagram.com/dewanshrawat15"
    },
    {
        name: "medium",
        url: "http://dewanshrawat15.medium.com/"
    }
];

export const contactDetails = {
    title: "Contact Me",
    subtitle: "Let's chat! I'm always interested in connecting with fellow developers and tackling new challenges. Feel free to reach out via any of your preferred mode of communication",
    socials: socialIcons
}

export const downloadResumeUrl = "https://firebasestorage.googleapis.com/v0/b/portfolio-0011.appspot.com/o/CV%20-%20Post%20Pharma%20Bolt.pdf?alt=media";