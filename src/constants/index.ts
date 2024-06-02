import oraroo from '../assets/images/oraroo.png';
import react from '../assets/icons/react.svg';
import typescript from '../assets/icons/typescript.svg';
import java from '../assets/icons/java.svg';
import kotlin from '../assets/icons/kotlin.svg';
import python from '../assets/icons/python.svg';
import postgresql from '../assets/icons/postgresql.svg';
import javascript from '../assets/icons/javascript.svg';
import html from '../assets/icons/html.svg';
import css from '../assets/icons/css.svg';
import git from '../assets/icons/git.svg';
import redux from '../assets/icons/redux.svg';
import motion from '../assets/icons/motion.svg';
import mui from '../assets/icons/mui.svg';
import sass from '../assets/icons/sass.svg';
import tailwindcss from '../assets/icons/tailwindcss.svg';
import web_responsive from '../assets/icons/web_responsive.svg';
import camunda from '../assets/icons/camunda.svg';
import kafka from '../assets/icons/kafka.svg';
import keycloak from '../assets/icons/keycloak.svg';
import docker from '../assets/icons/docker.svg';
import photoshop from '../assets/icons/photoshop.svg';
import jhipster from '../assets/icons/jhipster.svg';
import gitlab from '../assets/icons/gitlab.svg';
import github from '../assets/icons/github.svg';
import spring from '../assets/icons/spring.svg';
import contact from '../assets/icons/contact.svg';
import linkedin from '../assets/icons/linkedin.svg';
import aws from '../assets/icons/aws.svg';
import firebase from '../assets/icons/firebase.svg';
import webpack from '../assets/icons/webpack.svg';
import postman from '../assets/icons/postman.svg';
import npm from '../assets/icons/npm.svg';
import flask from '../assets/icons/flask.svg';
import figma from '../assets/icons/figma.svg';

export const skills = [
    {
        imageUrl: react,
        name: "React",
        type: "Frontend"
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend"
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend"
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend"
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend"
    },
    {
        imageUrl: spring,
        name: "Spring",
        type: "Backend"
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend"
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management"
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps"
    },
    {
        imageUrl: camunda,
        name: "Camunda BPMN",
        type: "Backend"
    },
    {
        imageUrl: kafka,
        name: "Apache Kafka",
        type: "Backend"
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend"
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend"
    },
    {
        imageUrl: sass,
        name: "SASS",
        type: "Frontend"
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend"
    },
    {
        imageUrl: web_responsive,
        name: "Responsive Web Design",
        type: "Frontend"
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control"
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control"
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control"
    },
    {
        imageUrl: flask,
        name: "Flask",
        type: "Backend"
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Frontend"
    },
    {
        imageUrl: aws,
        name: "Amazon Web Services (AWS)",
        type: "Cloud Computing"
    },
    {
        imageUrl: npm,
        name: "npm",
        type: "Package Manager"
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend"
    },
    {
        imageUrl: webpack,
        name: "Webpack",
        type: "Build Tool"
    },
    {
        imageUrl: jhipster,
        name: "JHipster",
        type: "Backend"
    },
    {
        imageUrl: keycloak,
        name: "Keycloak",
        type: "Backend"
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Design"
    },
    {
        imageUrl: photoshop,
        name: "Photoshop",
        type: "Design"
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "API Testing"
    },
];


export const experiences = [
    {
        title: "Full stack Developer",
        company_name: "Oraroo",
        icon: oraroo,
        iconBg: "#cef2db",
        date: "August 2021 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export interface IProject {
    id: string;
    title: string;
    mobile: string;
    tumbnail: string;
    desktop: string;
    website: string;
    social: string;
    owner: string;
    description: string;
}

export const projects: IProject[] = [
    {
        id: '1',
        title: 'Oraroo',
        tumbnail: 'https://i.ibb.co/qgCqw4C/oraroo-web.png',
        mobile: 'https://i.ibb.co/RHqzj6K/oraroo-mobile.png',
        desktop: 'https://i.ibb.co/s1Z4D95/oraroo-desktop.png',
        website: 'https://www.oraroo.eu',
        social: 'https://www.linkedin.com/company/oraroo/posts/?feedView=all',
        owner: 'joined the team and contributed to the application',
        description: `Oraroo is a comprehensive platform designed to streamline and 
        automate HR and project management processes for companies. 
        It offers solutions for employee time tracking, project billing, 
        and workforce management, allowing businesses to optimize efficiency 
        and improve employee satisfaction. The platform provides features like 
        flexible scheduling, expense approvals, and integration with payroll systems, 
        making it easier for companies to manage their operations and enhance productivity.`
    },
    {
        id: '2',
        title: 'Finalitico',
        tumbnail: 'https://i.ibb.co/1rWLWGX/fin.png',
        mobile: 'https://i.ibb.co/5TX4yg9/fin-mobile.png',
        desktop: 'https://i.ibb.co/BTQDHS0/fin-desktop.png',
        website: 'https://www.finalitico.eu',
        social: '',
        owner: 'Developed the POC version of the application',
        description: `Finalitico is a financial management platform designed for 
        entrepreneurs and small to medium-sized businesses (SMEs). 
        The website offers advanced financial analysis tools that simplify 
        financial management and decision-making. It provides features like 
        detailed balance sheets and cash flow forecasts, aiming to make financial 
        data clear and actionable. The platform is built to support business growth 
        by providing intuitive and up-to-date technology that enhances financial 
        visibility and control.`
    },
    {
        id: '3',
        title: 'PanniBakery',
        tumbnail: 'https://i.ibb.co/D91BLTx/panni.png',
        mobile: 'https://i.ibb.co/RNDHrQZ/panni-mobile.png',
        desktop: 'https://i.ibb.co/xH5tpFt/panni-desktop.png',
        website: 'https://pannibakery.md',
        social: 'https://www.instagram.com/pannibakery_md',
        owner: 'Build from scratch: simple, fast, and mobile-friendly',
        description: `Panni Bakery is an artisan bakery in Moldova that offers a 
        variety of freshly baked goods. Their products include traditional bread, 
        pastries, and cakes, all made with high-quality ingredients. The bakery emphasizes 
        handmade techniques and authentic recipes to ensure a rich and delicious taste. 
        Panni Bakery also provides custom cake orders for special occasions.`,
    },
    {
        id: '4',
        title: 'Old Portfolio',
        tumbnail: 'https://i.ibb.co/W5nGHjs/portfolio.png',
        mobile: 'https://i.ibb.co/sRwqKHp/portfolio-mobile.png',
        desktop: 'https://i.ibb.co/m67SpWV/portfolio-desktop.png',
        website: 'https://banica-daniel.netlify.app',
        social: '',
        owner: 'old presentation website',
        description: `This website showcases my first portfolio, 
        created before I got a job. It includes mini projects 
        I built on my road to learning web development, highlighting my 
        skills, projects, and experience. The site features my resume, 
        project samples, and contact information, providing a comprehensive 
        view of my expertise and accomplishments.`,
    },
];
// iconUrl: react,
// theme: 'btn-back-red',
// description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
// link: '',