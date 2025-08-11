import AboutMe from "@/components/about";
import classes from "./style.module.css";
import Button from "@/components/button";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Paurush Sinha",
};

export default function Home() {
  return (
    <>
      <div className={classes.hero}>
        <p>Hi, my name is</p>
        <h1>Paurush Sinha</h1>
        <h2>I build things for web and mobiles.</h2>
        <p className={classes.info}>
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered products at
          Upstatement.
        </p>
        <Button label="Download my CV" />
      </div>
      <section className={classes.content}>
        <AboutMe />
        <div>
          <h2>Where I've worked</h2>
        </div>
        <div>
          <h2>Some things I've built</h2>
        </div>
        <div>
          <h2>What's Next?</h2>
        </div>
      </section>
    </>
  );
}
