import placeholderIcon from "src/images/otter-icon-nav-white.png";
import { SectionProps } from "../types/accordion";

export const accordionConfig: SectionProps[] = [
  {
    sectionId: "foundry",
    header: {
      position: "Software Engineer @ Foundry Interactive / Hinge Health",
      timeframe: "Feb 2020 - Oct 2022",
    },
    collapse: {
      location: "Boise, ID & San Francisco, CA",
      link: {
        text: "hingehealth.com",

        href: "https://www.hingehealth.com",
      },

      description: [
        "Principal contributor to three repos for hingehealth.com",
        "Hand-rolled animation and user-interaction heavy frontend features in HTML, CSS, and JS/TS without using any third-party dependencies",
        "Overhauled obsolete legacy code and implemented React best practices across the app resulting in increased usability, portability, and reduced load time",
        "Lead developer on greenfielding a new React repository written solely in TS ahead of company rebrand",
        "Wrote unit and E2E tests against components and pages",
        "Collaborated extensively with designers to achieve intuitive UI/UX",
        "Touches to over 150,000 lines of code",
        "Specialized in web accessibility",
      ],
      graphic: placeholderIcon,
      technologies: [
        "TS",
        "JS",
        "React",
        "Gatsby",
        "GraphQL",
        "Contentful",
        "Netlify",
      ],
    },
  },
  {
    sectionId: "dojo",
    header: {
      position: "Assistant Instructor @ Coding Dojo",
      timeframe: "Jan 2020 - March 2020",
    },
    collapse: {
      location: "Boise, ID",
      link: {
        text: "codingdojo.com",

        href: "https://www.codingdojo.com/",
      },

      description: [
        "Created and delivered comprehensive lectures to further student understanding across three stacks",
        "Collaborated with school leadership for the development of new curricular content",
        "Supported student learning on an individual basis with one-on-one tutoring",
      ],
      graphic: placeholderIcon,
      technologies: [
        "Python",
        "C#",
        "TS",
        "JS",
        "Django",
        "ASP.NET",
        "React",
        "Angular",
        "Node",
        "Express",
        "SQL",
        "Mongo",
        "AWS",
      ],
    },
  },
  {
    sectionId: "hills",
    header: {
      position: "Computer Science Teacher @ The Seven Hills School",
      timeframe: "Aug 2018 - Jun 2019",
    },
    collapse: {
      location: "Cincinnati, OH",
      link: {
        text: "7hills.org",

        href: "https://www.7hills.org/",
      },

      description: [
        "Instructed and developed a high school CS curricula in grades 9-12",
        "Developed strong foundational knowledge of CS Algorithms & Data Structures",
        "Computer Architecture & Quantum Computing",
        "Ethics in Technology & Women in Programming",
      ],
      graphic: placeholderIcon,
      technologies: ["Python", "Java", "HTML", "CSS", "JS"],
    },
  },
];
