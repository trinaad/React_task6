import React from "react";

const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
