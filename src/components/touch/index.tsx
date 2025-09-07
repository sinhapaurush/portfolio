import React from "react";
import classes from "./style.module.css";
import Button from "../button";

export default function GetInToch() {
  return (
    <div
      className={`${classes.section} w-full flex justify-center items-center mh-[100vh]`}
    >
      <div className="w-[80%] flex flex-col items-center">
        <h4>Get in Touch</h4>
        <p>
          I&apos;m always open to new opportunities and excited to work on projects
          that challenge me and help me grow. Whether it&apos;s a startup, a creative
          team, or a large organization, I&apos;m ready to contribute and learn.
        </p>
        <p>
          Feel free to reach out if you have a role or project where I can add
          value. I&apos;m eager to collaborate, take on new challenges, and be a part
          of something meaningful.
        </p>
        <div className="flex justify-center">
          <Button label="Say Hello" href="mailto:sinhapaurush444@gmail.com" />
        </div>
      </div>
    </div>
  );
}
