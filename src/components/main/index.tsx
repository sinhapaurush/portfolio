import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import classes from "./style.module.css";
import Link from "next/link";

export default function Main({
  children,
}: {
  children: React.ReactElement | React.ReactElement[] | React.ReactNode;
}) {
  return (
    <div className={`flex ${classes.parent}`}>
      <aside
        className={`flex flex-col justify-end h-full ${classes.aside} ${classes.social}`}
      >
        <ul>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>
        <hr />
      </aside>
      <main>{children}</main>
      <aside className={classes.right}>
        <div className={classes.mail}>
          <Link href="">sinhapaurush444@gmail.com</Link>
        </div>
        <hr />
      </aside>
    </div>
  );
}
