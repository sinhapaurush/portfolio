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
      <aside className={`flex flex-col justify-end h-full ${classes.aside}`}>
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
      </aside>
      <main>{children}</main>
      <aside>
        <div>
            <Link href="">sinhapaurush444@gmail.com</Link>
        </div>
      </aside>
    </div>
  );
}
