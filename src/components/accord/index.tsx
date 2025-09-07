"use client";
import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./style.module.css";

export function AccordChild({
  title,
  points,
  organisation,
  period,
}: {
  title: string;
  points: string[];
  organisation: string;
  period: string;
}) {
  return (
    <div>
      <h3 className={classes.title}>
        {title} <span>@ {organisation}</span>
      </h3>
      <span className={classes.period}>{period}</span>
      <div>
        <ul className={classes.pointers}>
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Accord({
  children,
}: {
  children: ReactElement<typeof AccordChild>[];
}) {
  const [chosenIndex, setChosenIndex] = useState<number>(0);
  const contentBox = useRef<HTMLDivElement | null>(null);
  const childrenArray = React.Children.toArray(children) as ReactElement<
    React.ComponentProps<typeof AccordChild>
  >[];

  const navigateAccord = useCallback((targetIndex: number) => {
    contentBox.current!.classList.add(classes.fadeout);
    setTimeout(() => {
      setChosenIndex(targetIndex);
      contentBox.current!.classList.remove(classes.fadeout);
      contentBox.current!.classList.add(classes.fadein);
    }, 150);
    contentBox.current!.classList.remove(classes.fadein);
  }, []);

  return (
    <div className="md:flex flex-col gap-3">
      <div className="flex-1">
        <ul className={classes.buttonList}>
          {childrenArray.map(({ props: { organisation } }, index) => (
            <li
              key={index}
              className={`p-2${
                index === chosenIndex ? ` ${classes.active}` : ""
              }`}
              onClick={() => navigateAccord(index)}
            >
              {organisation}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-4" ref={contentBox}>
        {childrenArray[chosenIndex]}
      </div>
    </div>
  );
}
