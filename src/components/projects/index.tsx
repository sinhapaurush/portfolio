import React, { ReactElement, ReactNode } from "react";
import style from "./index.module.css";
import Button from "../button";

export default function ProjectSection({
  children,
}: {
  children: React.ReactElement[] | ReactElement | ReactNode;
}) {
  return (
    <>
      <div className={style.main}>{children}</div>
      <div className="flex justify-center">
        <Button
          label="Show More"
          href="https://github.com/sinhapaurush?tab=repositories"
        />
      </div>
    </>
  );
}
