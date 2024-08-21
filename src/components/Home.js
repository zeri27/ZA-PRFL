import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = [
    "Software Engineer",
    "AI/ML Engineer",
    "Full Stack Developer",
    "Data Science Engineer",
    "Software Enthusiast",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const fullTitle = titles[currentIndex];

      // Different parts of title visible based on deleting or typing
      setCurrentTitle(
        isDeleting
          ? fullTitle.substring(0, currentTitle.length - 1)
          : fullTitle.substring(0, currentTitle.length + 1)
      );

      // Different speeds for deleting or typing
      setTypingSpeed(isDeleting ? 50 : 150);

      // Finished typing so wait 5 seconds before starting to delete
      if (!isDeleting && currentTitle === fullTitle) {
        setTimeout(() => setIsDeleting(true), 5000);
        // Deleting finished so retreive next title to start typing
      } else if (isDeleting && currentTitle === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [currentTitle, isDeleting, titles, currentIndex, typingSpeed]);

  return (
    <div className="home">
      <nav className="#home">
        <img src="/images/zeri-new.jpg" alt="Zeryab Alam" />
        <div className="home-text">
          <h1>Zeryab Alam</h1>
          <h2>{currentTitle}</h2>
        </div>
      </nav>
    </div>
  );
}

export default Home;
