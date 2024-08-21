import "./About.css";
import {
  FaGraduationCap,
  FaClock,
  FaMapMarkerAlt,
  FaUniversity,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";

function About() {
  const education = [
    {
      id: 0,
      degree: "High School Diploma",
      time: "2014 - 2021",
      institute: "Sunrise English Private School",
      location: "Abu Dhabi, United Arab Emirates",
      description:
        "Fundamentals of Mathematics, Science, Languages and Social Sciences",
    },
    {
      id: 1,
      degree: "Bachelor of Computer Science & Engineering",
      time: "2021 - 2024",
      institute: "Delft University of Technology",
      location: "Delft, Netherlands",
      description:
        "Main Courses: Algorithm Design, Computer Systems, Data Management, Machine Learning, Data Processing, Web Development",
    },
    {
      id: 2,
      degree: "Master of Computer Science",
      time: "2024 - 2026",
      institute: "Delft University of Technology",
      location: "Delft, Netherlands",
      description:
        "Main Courses: Software Architecture, Machine Learning Applications Engineering, Distributed Systems Engineering, Research Process",
    },
  ];

  const educationItems = education.map((edx) => (
    <li key={edx.id}>
      <div className="timeline">
        <h3>
          <span className="icon-text">
            <FaGraduationCap className="icon-degree" /> {edx.degree}
          </span>
        </h3>
        <div className="timeline-time">
          <h3>
            <span className="icon-text">
              <FaClock className="icon" /> {edx.time}
            </span>
          </h3>
        </div>
        <h4>
          <span className="icon-text">
            <FaUniversity className="icon" /> {edx.institute}
          </span>
        </h4>
        <h4>
          <span className="icon-text">
            <FaMapMarkerAlt className="icon" /> {edx.location}
          </span>
        </h4>
        <p>{edx.description}</p>
      </div>
    </li>
  ));

  const workExperience = [
    {
      id: 0,
      title: "Software Developer (Internship)",
      time: "April 2023 - June 2023",
      company: "Freie Universität Berlin",
      location: "Delft, Netherlands (Remote)",
      description:
        "Worked with a team to develop a full-scale application from scratch leveraging cutting-edge technologies and best practices.",
    },
  ];

  const workExpItems = workExperience.map((wrkExp) => (
    <li key={wrkExp.id}>
      <div className="timeline">
        <h3>
          <span className="icon-text">
            <FaBriefcase className="icon-degree" /> {wrkExp.title}
          </span>
        </h3>
        <div className="timeline-time">
          <h3>
            <span className="icon-text">
              <FaClock className="icon" /> {wrkExp.time}
            </span>
          </h3>
        </div>
        <h4>
          <span className="icon-text">
            <FaBuilding className="icon" /> {wrkExp.company}
          </span>
        </h4>
        <h4>
          <span className="icon-text">
            <FaMapMarkerAlt className="icon" /> {wrkExp.location}
          </span>
        </h4>
        <p>{wrkExp.description}</p>
      </div>
    </li>
  ));

  return (
    <div className="about">
      <nav className="#about">
        <h1>About Me</h1>
        <p>
          I’m Zeryab Alam, a passionate software engineer with a strong
          foundation in AI, Machine Learning, and Full Stack Development,
          currently based in the Netherlands. My journey has been shaped by
          diverse hands-on experiences in software engineering, data science,
          and research. I’ve had the opportunity to contribute to a wide range
          of projects, from developing full-stack applications and creating
          parsers for low-level programming languages to studying, training, and
          building AI models and frameworks.
        </p>
        <br />
        <br />
        <p>
          My love for computers and programming started as soon as I first laid
          hands on a computer. Initially, my interest revolved around playing
          video games, but it quickly evolved when I became curious about
          modding those games. Uncovering the intricate details beneath the
          surface opened up a world of possibilities that captivated me. Since
          then, I’ve been committed to exploring how software works, learning
          new languages, and building innovative solutions across different
          domains.
        </p>
        <br />
        <br />
        <p>
          Beyond programming, I’m an avid gamer and tech enthusiast. Whether I’m
          designing and managing complex projects, diving into the mechanics of
          Factorio, enjoying RPG masterpieces like <i>The Witcher 3</i> and{" "}
          <i>Cyberpunk 2077</i>, or challenging myself with Project Euler
          problems, I’m driven by curiosity and creativity. My goal is to
          continuously push the boundaries of what I can achieve in the tech
          world, always seeking new ways to grow and innovate.
        </p>
        <h2>Education</h2>
        <ul>{educationItems}</ul>
        <h2>Work Experience</h2>
        <ul>{workExpItems}</ul>
      </nav>
    </div>
  );
}

export default About;
