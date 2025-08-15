import AboutMe from "@/components/about";
import classes from "./style.module.css";
import Button from "@/components/button";
import { Metadata } from "next";
import Accord, { AccordChild } from "@/components/accord";
import ProjectCard from "@/components/projects/card";
import { Technology } from "@/types/technologies";
import ProjectSection from "@/components/projects";
import GetInToch from "@/components/touch";
import Link from "next/link";

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
          <div className={classes.accordWrapper}>
            <div>
              <h2 className="mb-15">Where I&apos;ve worked</h2>
              <Accord>
                <AccordChild
                  organisation="Bisht Enterprises"
                  period="July 2025 - October 2025"
                  points={[
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                  ]}
                  title="Full Stack Developer"
                />
                <AccordChild
                  organisation="TCS"
                  period="July 2025 - October 2025"
                  points={[
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                  ]}
                  title="Full Stack Developer"
                />
                <AccordChild
                  organisation="Infosys"
                  period="July 2025 - October 2025"
                  points={[
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt nisi repellendus, vel delectus alias ducimus maiores quia quisquam aliquid molestiae dignissimos aspernatur error consequatur amet atque? Veniam aut suscipit doloribus.",
                  ]}
                  title="Full Stack Developer"
                />
              </Accord>
            </div>
          </div>
        </div>
        <div>
          <h2>Some things I&apos;ve built</h2>
          <ProjectSection>
            <ProjectCard tech={[Technology.JS, Technology.Next]} />
            <ProjectCard tech={[Technology.JS, Technology.Next]} />
            <ProjectCard
              tech={[
                Technology.JS,
                Technology.Next,
                Technology.CPP,
                Technology.Flutter,
                Technology.Python,
                Technology.ReactNative,
              ]}
            />
            <ProjectCard tech={[Technology.JS, Technology.Next]} />
            <ProjectCard tech={[Technology.JS, Technology.Next]} />
            <ProjectCard tech={[Technology.JS, Technology.Next]} />
          </ProjectSection>
        </div>
        <div className="flex justify-center flex-col">
          <h3 className={classes.specialHeading}>What&apos;s Next?</h3>
          <GetInToch />
        </div>
      </section>
      <footer className={classes.footer}>
        <p>
          Built by <Link href="">Paurush Sinha</Link> in{" "}
          <Link href="https://nextjs.org/" target="_blank">
            Next.JS
          </Link>
        </p>
        <p>
          Design Taken from{" "}
          <Link href="https://brittanychiang.com/" target="_blank">
            Brittany Chiang
          </Link>
        </p>
      </footer>
    </>
  );
}
