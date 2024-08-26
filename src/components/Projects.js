import "./Projects.css";

import pythonsvg from "../svg/python.svg";
import tensorflow_svg from "../svg/tensorflow.svg";
import pytorch_svg from "../svg/pytorch-icon.svg";
import ultralytics_svg from "../svg/Ultralytics_YOLO_Logomark_Original.svg";
import java_svg from "../svg/java.svg";

function Projects() {
  const techMap = {
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
  };

  const researchProjects = [
    {
      id: 1,
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

  const projects = [
    {
      id: 1,
      name: "Quizzz",
      context: "Delft University of Technology",
      technologies: ["Java", "JavaFX"],
      githubLink: "link",
      highlights: [
        "Designed and implemented a real-time multiplayer quiz game.",
        "Features dynamic time-limits, scoring systems, and interactive abilities.",
        "Developed a fully functional backend server architecture.",
        "Created a comprehensive UX/UI design for the client application.",
        "Integrated advanced analytics and real-time leaderboards.",
      ],
      completedDate: "Multiplayer Desktop Quiz Game - April 2021",
    },
  ];

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
