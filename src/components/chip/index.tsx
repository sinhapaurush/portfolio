import { Technology } from "@/types/technologies";
import React from "react";
import classes from './style.module.css'

export default function Chip({ title }: { title: Technology }) {
  return <div className={classes.chip}>{title}</div>;
}
