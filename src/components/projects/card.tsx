import React from "react";
import classes from "./card.module.css";
import { GoFileDirectory } from "react-icons/go";
import Chip from "../chip";
import { Technology } from "@/types/technologies";
import { RiExternalLinkLine } from "react-icons/ri";
import Link from "next/link";

export default function ProjectCard({
  tech,
  name,
  about,
  href,
}: {
  tech: Technology[];
  name: string;
  about: string;
  href: string;
}) {
  return (
    <Link href={href || ""} target="_blank" className={classes.card} aria-label={name}>
        <div className={classes.icons}>
          <GoFileDirectory size={50} />
          <RiExternalLinkLine />
        </div>
        <h3>{name}</h3>
        <p className={classes.span}>{about}</p>
        <div>
          {tech.map((item, index) => (
            <Chip title={item} key={index} />
          ))}
        </div>
    </Link>
  );
}
