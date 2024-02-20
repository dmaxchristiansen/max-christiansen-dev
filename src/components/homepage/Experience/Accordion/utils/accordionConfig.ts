import melaleucaIcon from "src/images/Accordion/melaleuca-icon.png";
import hhIcon from "src/images/Accordion/hh-icon.png";
import codingDojoIcon from "src/images/Accordion/coding-dojo-icon.png";
import sevenHillsIcon from "src/images/Accordion/seven-hills-icon.jpg";
import { SectionProps } from "../types/accordion";

export const accordionConfig: SectionProps[] = [
  {
    sectionId: "melaleuca",
    header: {
      position: "Sr. Software Engineer - Melaleuca: The Wellness Company",
      timeframe: {
        begin: "2023",
        end: "Current",
      },
    },
    collapse: {
      location: "Idaho Falls, ID",
      link: {
        text: "melaleuca.com",

        href: "https://www.melaleuca.com",
      },

      description: [
        "Vue.js frontend developer collaborating extensively with backend, services, and design on an ecommerce app that spans 7 global markets",
        "Increased local dev build time from 1-3 minutes to 3-6 seconds within first two weeks in role through global overhaul to webpack config",
        "Greenfielded new Cypress repo for first-time implementation of QA Regression Automation",
        "Acting Cypress SME",
        "Pushed-for and authored Node.js version updates to dependencies across 7 projects",
        "Consulting with C-Suite level stakeholders for implementation of best practices and prioritization of tech-debt work",
      ],
      graphic: {
        src: melaleucaIcon,
        altText: "Melaleuca",
      },
      technologies: [
        "JS",
        "Vue",
        "SaSS",
        "PatternLab",
        "HBS",
        "Webpack",
        "Cypress",
        "C#",
        "ASP.NET",
        "Sitecore",
        "Azure",
      ],
    },
  },
  {
    sectionId: "foundry",
    header: {
      position: "Software Engineer - Hinge Health via Foundry Interactive",
      timeframe: {
        begin: "2020",
        end: "2022",
      },
    },
    collapse: {
      location: "Boise, ID & San Francisco, CA",
      link: {
        text: "hingehealth.com",

        href: "https://www.hingehealth.com",
      },

      description: [
        "Principal contributor to three repos",
        "Hand-rolled frontend features in HTML, CSS, and JS/TS without any dependencies",
        "Overhauled legacy code and implemented React best practices",
        "Increased code usability, portability, and reduced load time",
        "Greenfielded a new React repo written in TS ahead of company rebrand",
        "Wrote unit and E2E tests against components and pages",
        "Collaborated extensively with designers to achieve intuitive UI/UX",
        "Touches to over 150,000 lines of code",
        "Specialized in web accessibility",
      ],
      graphic: {
        src: hhIcon,
        altText: "Hinge Health",
      },
      technologies: [
        "TS",
        "JS",
        "React",
        "Gatsby",
        "Styled-Components",
        "Storybook",
        "Jest",
        "Cypress",
        "GraphQL",
        "Contentful",
        "Netlify",
        "GitHub",
      ],
    },
  },
  {
    sectionId: "dojo",
    header: {
      position: "Assistant Instructor - Coding Dojo",
      timeframe: {
        begin: "2019",
        end: "2020",
      },
    },
    collapse: {
      location: "Boise, ID",
      link: {
        text: "codingdojo.com",

        href: "https://www.codingdojo.com/",
      },

      description: [
        "Furthered student understanding across three stacks",
        "Created and delivered comprehensive lectures",
        "Collaborated with school leadership",
        "Developed new curricular content",
        "Supported student learning on an individual basis",
      ],
      graphic: {
        src: codingDojoIcon,
        altText: "Coding Dojo",
      },
      technologies: [
        "Python",
        "C#",
        "TS",
        "JS",
        "Django",
        "ASP.NET",
        "React",
        "Angular",
        "AWS",
        "Node",
        "Express",
        "SQL",
        "Mongo",
      ],
    },
  },
  {
    sectionId: "hills",
    header: {
      position: "Computer Science Teacher - The Seven Hills School",
      timeframe: {
        begin: "2018",
        end: "2019",
      },
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
      graphic: {
        src: sevenHillsIcon,
        altText: "Seven Hills School",
      },
      technologies: ["Python", "Java", "HTML", "CSS", "JS"],
    },
  },
];
