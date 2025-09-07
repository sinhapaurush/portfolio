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
          I&apos;m working as an App Development Intern at Bisht Enterprises,
          where I&apos;m building user-friendly and efficient mobile
          applications while expanding my technical skills and contributing to
          real-world projects.
        </p>
        <Button label="Download my CV" href="/cv.pdf" download />
      </div>
      <section className={classes.content}>
        <AboutMe />
        <div>
          <div className={classes.accordWrapper} id="experience">
            <div>
              <h2 className="mb-15">Where I&apos;ve worked</h2>
              <Accord>
                {[
                  <AccordChild
                    organisation="Bisht Enterprises"
                    period="July 2025 - October 2025"
                    points={[
                      "Worked with Next.js to develop and optimize responsive web applications, ensuring seamless user experiences across devices.",
                      "Built and maintained cross-platform mobile applications using React Native, improving performance and user engagement.",
                      "Collaborated with the development team to implement new features, debug issues, and enhance application functionality using modern JavaScript frameworks.",
                    ]}
                    title="Full Stack Developer"
                  />,
                ]}
              </Accord>
            </div>
          </div>
        </div>
        <div id="projects">
          <h2>Some things I&apos;ve built</h2>
          <ProjectSection>
            <ProjectCard
              tech={[Technology.JS, Technology.PHP, Technology.ReactNative]}
              name="Pranah App"
              about="A Social Media app like Instagram"
              href="https://github.com/sinhapaurush/pranahworld"
            />
            <ProjectCard
              name="Vakyavahan"
              about="A service that allows to send SMS from your phone using an API"
              tech={[Technology.JS, Technology.Flutter]}
              href="https://github.com/sinhapaurush/vakyavahan_client"
            />
            <ProjectCard
              name="React Native YouTube Player"
              about="A library that allows embedding YouTube videos in React Native with custom controls and modifications"
              tech={[Technology.JS, Technology.ReactNative]}
              href="https://www.npmjs.com/package/rn-yt-player"
            />
            <ProjectCard
              name="FlexFind"
              about="Search Engine built in PHP"
              tech={[Technology.PHP]}
              href="https://github.com/sinhapaurush/flexfind"
            />
            <ProjectCard
              name="sinha-crawl"
              about="A crawler built in NodeJS to crawl the web for FlexFind search engine"
              tech={[Technology.JS]}
              href="https://github.com/sinhapaurush/sinha-crawler"
            />
            <ProjectCard
              name="Yugal"
              about="A framework for PHP that allows development of SSG SPA"
              tech={[Technology.JS, Technology.PHP]}
              href="https://yugalphp.gitbook.io/"
            />
          </ProjectSection>
        </div>
        <div className="flex justify-center flex-col" id="contact">
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
