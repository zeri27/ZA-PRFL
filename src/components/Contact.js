import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneSquare,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <nav className="#contact">
      <div className="contact">
        <h1>Contact Me</h1>
        <p>
          Interested in extending a job opportunity? Seeking a contractor for a
          project? Or simply wish to engage in a professional dialogue? Feel
          free to reach out!
        </p>
        <ul>
          <li>
            <h3>
              <span className="icon-text">
                <FaEnvelope className="icon" />
                zeryabalam272@icloud.com
              </span>
            </h3>
          </li>
          <li>
            <h3>
              <span className="icon-text">
                <FaPhoneSquare
                  className="icon"
                  style={{ transform: "scaleX(-1)" }}
                />
                +31 687 901 367
              </span>
            </h3>
          </li>
          <li>
            <h3>
              <a
                href="https://github.com/zeri27"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-text">
                  <FaGithub className="icon" />
                  Github
                </span>
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a
                href="https://www.linkedin.com/in/zeryab-alam-3238b0219/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-text">
                  <FaLinkedin className="icon" />
                  Linkedin
                </span>
              </a>
            </h3>
          </li>
        </ul>
        <div className="contact-funny-brace">
          <h2>{"}"}</h2>
        </div>
        <img src="/images/zeri-athens-2.jpg" alt="Zeryab Alam" />
        <div className="contact-image-desc">
          <h3>Zeryab Alam</h3>
          <h3>Software Developer</h3>
          <h3>Delft, Netherlands</h3>
        </div>
      </div>
    </nav>
  );
}

export default Contact;
