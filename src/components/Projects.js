import "./Projects.css";

import pythonsvg from "../svg/python.svg";
import tensorflow_svg from "../svg/tensorflow.svg";
import pytorch_svg from "../svg/pytorch-icon.svg";
import ultralytics_svg from "../svg/Ultralytics_YOLO_Logomark_Original.svg";
import java_svg from "../svg/java.svg";
import geniusWeb_png from "../svg/geniusWeb.svg";
import javaFx_svg from "../svg/javaFx.svg";
import react_svg from "../svg/react.svg";
import electron_svg from "../svg/electron.svg";
import javascript_svg from "../svg/javascript.svg";
import html_svg from "../svg/html-5.svg";
import css_svg from "../svg/css-3.svg";
import cpp_svg from "../svg/cpp.svg";
import nodeJS_svg from "../svg/nodejs.svg";
import discord_svg from "../svg/discord-icon.svg";
import replit_svg from "../svg/replit.svg";
import netlify_svg from "../svg/netlify-icon.svg";
import spring_svg from "../svg/spring-icon.svg";

function Projects() {
  const techMap = {
    Discord: {
      svg: discord_svg,
      link: "https://discordpy.readthedocs.io/en/stable/",
    },
    Replit: {
      svg: replit_svg,
      link: "https://replit.com/",
    },
    Python: {
      svg: pythonsvg,
      link: "https://www.python.org/",
    },
    TensorFlow: {
      svg: tensorflow_svg,
      link: "https://www.tensorflow.org/",
    },
    PyTorch: {
      svg: pytorch_svg,
      link: "https://pytorch.org/",
    },
    Ultralytics: {
      svg: ultralytics_svg,
      link: "https://www.ultralytics.com/",
    },
    Java: {
      svg: java_svg,
      link: "https://www.java.com/en/",
    },
    JavaFX: {
      svg: javaFx_svg,
      link: "https://openjfx.io/",
    },
    GeniusWeb: {
      svg: geniusWeb_png,
      link: "https://tracinsy.ewi.tudelft.nl/pubtrac/GeniusWeb/wiki/WikiStart#Protocol",
    },
    React: {
      svg: react_svg,
      link: "https://react.dev/",
    },
    Electron: {
      svg: electron_svg,
      link: "https://www.electronjs.org/",
    },
    Javascript: {
      svg: javascript_svg,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    NodeJS: {
      svg: nodeJS_svg,
      link: "https://nodejs.org/en",
    },
    HTML: {
      svg: html_svg,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    CSS: {
      svg: css_svg,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    Netlify: {
      svg: netlify_svg,
      link: "https://www.netlify.com/",
    },
    Spring: {
      svg: spring_svg,
      link: "https://spring.io/",
    },
  };

  /* Lists are reversed so add latest projects at the end */
  const researchProj = [
    {
      name: "AgentQT",
      context: "Delft University of Technology",
      technologies: ["Python", "GeniusWeb"],
      githubLink:
        "https://github.com/JyotiradityaaJaiman/CAI-Negotiation/tree/main",
      paperLink: "/assets/Group59_report.pdf",
      highlights: [
        "Analysed existing negotiation and bidding strategies to optimize decision-making.",
        "Designed and implemented a strategic & adaptable bidding algorithm.",
        "Evaluated the agent's performance through extensive simulations.",
        "Delivered a competitive negotiation agent for the Automated Negotiation League.",
      ],
      completedDate: "Collaborative AI: Negotiation - April 2024",
    },
    {
      name: "EnsembAudit (EA)",
      context: "Delft University of Technology",
      technologies: ["Python", "PyTorch", "TensorFlow", "Ultralytics"],
      githubLink: "https://github.com/zeri27/EnsembAudit",
      paperLink:
        "https://repository.tudelft.nl/record/uuid:1181a5fc-1d6e-4c3c-99b7-13499b9ec044",
      highlights: [
        "Analysed existing issues and solutions in labelling datasets.",
        "Developed a framework for identifying labelling errors.",
        "Performed experiments on artificially modded datasets.",
        "Achieved 20% error detection and rectification on noisy datasets.",
      ],
      completedDate: "Bachelor Thesis - June 2024",
    },
  ];

  const softwareProjects = [
    {
      name: "Quizzz",
      context: "Delft University of Technology",
      technologies: ["Java", "JavaFX"],
      githubLink:
        "https://gitlab.ewi.tudelft.nl/cse1105/2021-2022/team-repositories/oopp-group-55/repository-template",
      highlights: [
        "Designed and implemented a real-time multiplayer quiz game.",
        "Features dynamic time-limits, scoring systems, and interactive abilities.",
        "Developed a fully functional backend server architecture.",
        "Created a comprehensive UX/UI design for the client application.",
        "Integrated advanced analytics and real-time leaderboards.",
      ],
      completedDate: "Multiplayer Desktop Quiz Game - April 2021",
    },
    {
      name: "OrganiZer",
      context: "Independent Development",
      technologies: ["Spring", "Java"],
      githubLink: "https://github.com/zeri27/OrganiZer",
      highlights: [
        "Designed and developed a backend service architecture.",
        "Features Gitlab style collaboration: Companies, users, projects & tasks",
        "Used REST APIs to handle and smooth interactions between entities",
      ],
      completedDate: "February 2023",
    },
    {
      name: "Harumi: Discord Bot",
      context: "Independent Development",
      technologies: ["Python", "Discord", "Replit"],
      githubLink: "https://github.com/zeri27/HarumiDiscordBot",
      highlights: [
        "Versatile Discord bot with diverse command functionalities.",
        "Engages in natural language conversations.",
        "Translates messages to English seamlessly.",
        "Operates continuously with reliable uptime.",
      ],
      completedDate: "March 2023",
    },
    {
      name: "KeyVisual",
      context: "MIP.Labor, Freie Universität Berlin",
      technologies: [
        "React",
        "Electron",
        "NodeJS",
        "Javascript",
        "HTML",
        "CSS",
      ],
      githubLink:
        "https://gitlab.ewi.tudelft.nl/cse2000-software-project/2022-2023-q4/ta-cluster/cluster-18/sp-18c/mip-labor-keyvisual-18c",
      highlights: [
        "Designed and developed a comprehensive desktop application.",
        "Incorporates advanced image generation and customization features.",
        "Created a highly intuitive UI/UX design.",
        "Implemented scalable and interactive components: grids, overlays, and text.",
        "Effectively addressed the company's needs for streamlined workflows.",
      ],
      completedDate: "Internship - June 2023",
    },
    {
      name: "Portfolio Website",
      context: "Independent Development",
      technologies: ["React", "Netlify", "Javascript", "HTML", "CSS"],
      githubLink: "https://github.com/zeri27/ZA-PRFL",
      highlights: [
        "You are on this website right now!",
        "Designed, developed and deployed my portfolio website.",
        "Website effectively showcases portfolio, projects and skills.",
      ],
      completedDate: "August 2024",
    },
  ];

  const researchProjects = researchProj
    .reverse()
    .map((project, index) => ({ id: index + 1, ...project }));

  const projects = softwareProjects
    .reverse()
    .map((project, index) => ({ id: index + 1, ...project }));

  var right = true;

  const research = researchProjects.map((resProj) => (
    <li key={resProj.id} className="timeline">
      {resProj.id % 2 === 0 ? (right = false) : (right = true)}
      <div className={right ? "resTimeRight" : "resTimeLeft"}>
        <h3 className="projName">{resProj.name}</h3>
        <h3 className="projDet">{resProj.context}</h3>
        <h3 className="projDet">{resProj.completedDate}</h3>
        <a
          href={resProj.paperLink}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Research Paper
        </a>
        <a
          href={resProj.githubLink}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Research Code
        </a>
      </div>
      <div className={right ? "next-resTimeLeft" : "next-resTimeRight"}>
        <div className="tech-icons">
          {resProj.technologies.map((tech, index) => {
            const techData = techMap[tech];
            return techData ? (
              <a
                key={index}
                href={techData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={techData.svg} alt={tech} className="tech-icon" />
              </a>
            ) : null;
          })}
        </div>
        <div>
          <ul className="highlights-list">
            {resProj.highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  ));

  const softwareProj = projects.map((softProj) => (
    <li key={softProj.id} className="timeline">
      {softProj.id % 2 === 0 ? (right = false) : (right = true)}
      <div className={right ? "resTimeRight" : "resTimeLeft"}>
        <h3 className="projName">{softProj.name}</h3>
        <h3 className="projDet">{softProj.context}</h3>
        <h3 className="projDet">{softProj.completedDate}</h3>
        <a
          href={softProj.githubLink}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Link
        </a>
      </div>
      <div className={right ? "next-resTimeLeft" : "next-resTimeRight"}>
        <div className="tech-icons">
          {softProj.technologies.map((tech, index) => {
            const techData = techMap[tech];
            return techData ? (
              <a
                key={index}
                href={techData.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={techData.svg} alt={tech} className="tech-icon" />
              </a>
            ) : null;
          })}
        </div>
        <div>
          <ul className="highlights-list">
            {softProj.highlights.map((highlight, index) => (
              <li key={index} className="highlight-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  ));

  return (
    <div className="projects">
      <nav className="#projects">
        <h1>Projects</h1>
        <h2>Research Experience</h2>
        <ul>{research}</ul>
        <h2>Software Projects</h2>
        <ul>{softwareProj}</ul>
      </nav>
    </div>
  );
}

export default Projects;
