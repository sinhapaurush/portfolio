import Link from "next/link";
import React from "react";
import classes from "./style.module.css";

export default function Header() {
  return (
    <header className="w-[45px] h-[45px] w-full flex justify-between px-[40px] h-[100px] items-center">
      <Link href="/">
        <svg
          width={45}
          height={45}
          viewBox="0 0 446 443"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400.624 119.729V323.27L223 425.131L45.376 323.27V119.729L223 17.8682L400.624 119.729Z"
            stroke="#64FFDA"
            strokeWidth="31"
          />
          <path
            d="M166.803 323V141.182H238.536C252.326 141.182 264.074 143.816 273.781 149.083C283.487 154.291 290.885 161.542 295.975 170.834C301.124 180.067 303.699 190.72 303.699 202.794C303.699 214.868 301.095 225.521 295.886 234.754C290.678 243.987 283.132 251.178 273.248 256.327C263.423 261.477 251.527 264.051 237.559 264.051H191.838V233.245H231.344C238.743 233.245 244.839 231.973 249.633 229.428C254.486 226.823 258.096 223.243 260.464 218.685C262.89 214.069 264.104 208.772 264.104 202.794C264.104 196.757 262.89 191.49 260.464 186.991C258.096 182.434 254.486 178.913 249.633 176.427C244.78 173.882 238.624 172.609 231.167 172.609H205.244V323H166.803Z"
            fill="#64FFDA"
          />
        </svg>
      </Link>

      <div>
        <ul className={`flex gap-6 ${classes.ul}`}>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Experience</Link>
          </li>
          <li>
            <Link href="">Work</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
          <li>
            <button>Resume</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
