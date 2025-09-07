import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import Heading from "../heading";

export default function AboutMe() {
  return (
    <div className={classes.main} id="about">
      <Heading>About Me</Heading>
      <div>
        <div>
          <p>
            I&apos;ve been coding since 2019 and have developed a passion for
            building robust and efficient applications. Starting with small
            projects, I quickly grew my skills by experimenting with different
            frameworks and technologies.
          </p>
          <p>
            Over the years, I&apos;ve gained hands-on experience with Next.js, React,
            Flutter, PHP, WordPress, ExpressJS, and many other tools. This
            exposure has helped me understand how to create scalable and
            user-friendly solutions for a wide range of projects.
          </p>
          <p>
            I enjoy learning new technologies and applying them to solve
            real-world problems. Being adaptable and open to challenges has
            allowed me to contribute effectively to projects while continuously
            improving my coding expertise.
          </p>
        </div>
        <div>
          <div>
            <div>
              <Image src="/sample.jpg" alt="sample" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
