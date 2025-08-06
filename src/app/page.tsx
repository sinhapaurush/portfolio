import classes from "./style.module.css";
import Button from "@/components/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paurush Sinha"
};

export default function Home() {
  return (
    <div className={classes.hero}>
      <p>Hi, my name is</p>
      <h1>Paurush Sinha</h1>
      <h2>I build things for web and mobiles.</h2>
      <p className={classes.info}>
        I&apos;m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I&apos;m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <Button label="Download my CV" />
    </div>
  );
}