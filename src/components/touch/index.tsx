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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea minima
          facilis quam! Consectetur voluptatem blanditiis, illo, vitae ullam
          quod possimus, perspiciatis eos iusto sint asperiores quaerat
          excepturi! Excepturi, magni aspernatur?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea minima
          facilis quam! Consectetur voluptatem blanditiis, illo, vitae ullam
          quod possimus, perspiciatis eos iusto sint asperiores quaerat
          excepturi! Excepturi, magni aspernatur?
        </p>
        <div className="flex justify-center">
          <Button label="Say Hello" />
        </div>
      </div>
    </div>
  );
}
