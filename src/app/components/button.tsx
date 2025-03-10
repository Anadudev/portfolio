import React from "react";
import { ButtonPropTypes } from "@/app/types/types";
import Link from "next/link";

const Button = (props: ButtonPropTypes) => {
  return (
    <div>
      {props.type === "linkPrimary" && (
        <Link
          href={props.url || ""}
          className=" transition-hover ease-in-out font-semibold capitalize hover:text-primary cursor-pointer"
        >
          link
        </Link>
      )}

      {props.type === "buttonPrimary" && (
        <div className={`group flex flex-col size-fit text-center`}>
          <button
            className={`relative font-semibold text-sm  hover:bg-${
              props.hoverColor ? ` ${props.hoverColor}` : ` `
            } text-slate-700 uppercase ${props.style || ""} tracking-wide ${
              props.shine ? `shine` : ``
            } text-slate-700 uppercase tracking-wide ${
              props.shine ? `shine` : ``
            }  before:-rotate-180`}
            onClick={props.onClick}
          >
            <span className={``}>
              {" "}
              {props.icon || ""} {props?.text}
            </span>
          </button>
        </div>
      )}

      {props.type === "linkOutline" && (
        <div className={`flex flex-col size-fit text-center`}>
          <Link
            href="#"
            target="_blank"
            className={`font-semibold text-sm bg-transparent border border-primary text-primary uppercase px-4 py-2 tracking-wide rounded-lg ${
              props.shine ? `shine` : ``
            } before:bg-gradient-to-r from-primary before:-rotate-180`}
          >
            <span className={``}>let&apos;s talk y</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Button;
