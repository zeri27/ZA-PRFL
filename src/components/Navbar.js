import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <a href="#home">Zeryab Alam</a>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
