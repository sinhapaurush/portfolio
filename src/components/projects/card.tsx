import React from "react";
import classes from "./card.module.css";
import { GoFileDirectory } from "react-icons/go";
import Chip from "../chip";
import { Technology } from "@/types/technologies";
import { RiExternalLinkLine } from "react-icons/ri";

export default function ProjectCard({ tech }: { tech: Technology[] }) {
  return (
    <div className={classes.card}>
      <div className={classes.icons}>
        <GoFileDirectory size={50} />
        <RiExternalLinkLine />
      </div>
      <h3>Project Name</h3>
      <p>Some Text About Project</p>
      <div>
        {tech.map((item, index) => (
          <Chip title={item} key={index} />
        ))}
      </div>
    </div>
  );
}
