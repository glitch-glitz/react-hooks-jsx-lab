import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Ever since I was a jit I knew I was the sht</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
}

export default About;
