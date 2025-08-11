import React from "react";
import Image from "next/image";
import classes from "./style.module.css";
import Heading from "../heading";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className={classes.main}>
      <Heading>About Me</Heading>
      <div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, quasi
            ipsam magni soluta asperiores temporibus, hic dolorem aliquid
            doloribus qui sint quos suscipit vero nesciunt voluptatum nihil
            tenetur. Dolores, accusamus?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            repellendus error eligendi <Link href="">consequuntur culpa</Link>?
            Molestias, suscipit saepe? Ducimus commodi dignissimos, officia
            pariatur quia deleniti, in facere exercitationem temporibus alias
            aspernatur.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            repellendus error eligendi consequuntur culpa? Molestias, suscipit
            saepe? Ducimus commodi dignissimos, officia pariatur quia deleniti,
            in facere exercitationem temporibus alias aspernatur.
          </p>
        </div>
        <div>
          <div>
            <div>
              <Image src="/sample.jpg" alt="sample" width={150} height={150} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
