import "./Portfolio.css";

function Portfolio() {
  const specialties = [
    "AI/ML",
    "Computer Vision",
    "CI/CD",
    "Data Science",
    "DevOps",
    "Full Stack Development",
    "RESTful APIs",
  ];

  return (
    <div className="portfolio">
      <nav className="#portfolio">
        <h1>Portfolio</h1>
        <h2>Tech Stack Overview</h2>

        <h3>
          Programming Languages:{" "}
          <span className="portfolio-content">
            C++, C#, Java, JavaScript, Python
          </span>
        </h3>
        <h3>
          Frameworks & Libraries:{" "}
          <span className="portfolio-content">
            Electron, PyTorch, React, Spring, TensorFlow, Unity, YOLO
          </span>
        </h3>
        <h3>
          Database Management:{" "}
          <span className="portfolio-content">
            H2, MongoDB, MySQL, PostgreSQL
          </span>
        </h3>
        <h3>
          SDE Tools Proficiency:{" "}
          <span className="portfolio-content">
            CLI, Git, JetBrains IDEs (IntelliJ, PyCharm, WebStorm), Unity Hub,
            VS/VSC
          </span>
        </h3>
        <div className="portfolio-comp">
          <h2>Core Competencies</h2>

          <h3>AI/ML Engineering & Computer Vision</h3>
          <p>
            <span>
              Expertise in designing and deploying machine learning models to
              address complex real-world challenges, with a focus on object
              detection, natural language processing (NLP), and predictive
              analytics. Proficient in building robust object detection systems
              using frameworks like YOLO and TensorFlow, optimized for real-time
              applications such as smart surveillance and automated quality
              control.
            </span>
          </p>
          <div className="portfolio-comp-last">
            <p>
              <span>
                Well-versed in the complete ML pipeline—from data preprocessing
                and feature engineering to hyperparameter tuning and cloud-based
                deployment. Strong understanding of MLOps practices ensures
                scalable and maintainable solutions. A continuous learner with a
                passion for staying current with AI advancements and applying
                innovative techniques to deliver impactful results.
              </span>
            </p>
          </div>
          <h3>Data Science & Engineering</h3>
          <p>
            <span>
              Expertise in designing and implementing efficient ETL processes,
              data modeling, and building automated pipelines for large-scale
              data analysis. Proficient in extracting, transforming, and loading
              (ETL) structured and unstructured data, ensuring data integrity
              and quality throughout the process.
            </span>
          </p>
          <div className="portfolio-comp-last">
            <p>
              <span>
                Focused on delivering robust and maintainable data
                infrastructure that supports predictive modeling, reporting, and
                analytics. Committed to integrating data engineering best
                practices, with a continuous drive to optimize processes for
                better performance and insights.
              </span>
            </p>
          </div>
          <h3>Full Stack Software Development</h3>
          <p>
            <span>
              Adept at building scalable web applications from the ground up,
              integrating modern frontend frameworks with robust backend
              architectures. Experienced in developing user-centric interfaces
              using React and Electron, combined with well-structured,
              maintainable backend systems powered by technologies like Node.js,
              Java, or Python. Skilled in designing RESTful APIs, implementing
              microservices, and managing efficient data flow between client and
              server.
            </span>
          </p>
          <p>
            <span>
              Proficient in database management using both SQL and NoSQL
              solutions, ensuring data integrity and optimizing performance for
              high-traffic applications. Expertise in deploying full stack
              applications to cloud platforms like Netlify and Vercel, with a
              strong emphasis on scalability, security, and continuous
              integration.
            </span>
          </p>
          <div className="portfolio-comp-final-last">
            <p>
              <span>
                Committed to applying best practices in software engineering,
                from version control and automated testing to deployment and
                maintenance. Whether developing frontend experiences or backend
                services, capable of managing the full software development
                lifecycle, from initial design to deployment and maintenance,
                with a focus on performance, scalability, and user experience.
              </span>
            </p>
          </div>
        </div>
        {/*<h2>Certifications & Training</h2>*/}
        {/*<h2>Favorite Tech & Interests</h2>*/}
        <div className="portfolio-comp">
          <h2>Professional Values</h2>
          <div className="portfolio-comp-prof">
            <h3>Problem-Solving First</h3>
            <div className="portfolio-comp-last">
              <p>
                <span>
                  Prioritizing understanding the problem space is the key to
                  creating impactful software solutions. Each line of code must
                  be intentional and directly address a specific challenge.
                </span>
              </p>
            </div>
            <h3>Adaptability</h3>
            <div className="portfolio-comp-last">
              <p>
                <span>
                  Navigating changing environments with flexibility and
                  resilience is crucial for overcoming challenges. Adapting to
                  new demands, technologies, and project shifts is key to
                  sustained success.
                </span>
              </p>
            </div>
            <h3>Collaboration & Communication</h3>
            <div className="portfolio-comp-final-last">
              <p>
                <span>
                  Effective teamwork and clear communication are at the core of
                  every successful project. Striving to elevate team dynamics
                  through active collaboration ensures that everyone is aligned
                  and working toward a common goal.
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*<h2>Testimonials</h2>*/}
      </nav>
    </div>
  );
}
export default Portfolio;
