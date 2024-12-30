import React from "react";
import { paper } from "../../assets/data";
import { NavLink } from "react-router-dom";

export interface TitleProps {
  title1: string;
  title2: string;
  text: string;
  page: boolean;
}
interface TitlesProps {
  title: string;
}
interface TitlesProps2 {
  title: string;
}

export const Title: React.FC<TitleProps> = ({ title1, title2, text, page }) => {
  return (
    <>
      {page ? (
        <>
          <div className="flex items-center gap-4">
            <img src={paper} alt="" />
            <div className="bg-primary h-6 w-1"></div>
            <span className="uppercase text-md text-slate-400">{text}</span>
          </div>
          <div className="lg:text-4xl text-xl mt-4 flex items-center gap-3">
            <h1>
              {title1}
            </h1>
            <h2 className="font-semibold"> {title2}</h2>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-4">
            <img src={paper} alt="" />
            <div className="bg-primary h-6 w-1"></div>
             <NavLink to="/" className="text-md uppercase text-white">HOME<span className="ml-4">/</span></NavLink>
            <span className="uppercase text-md text-primary">{text}</span>
          </div>
          <div className="text-4xl flex gap-3 items-center mt-4">
            <h1 className="">
              {title1}
            </h1>
            <h2 className="font-semibold text-white"> {title2}</h2>
          </div>
        </>
      )}
    </>
  );
};

export const TitleDetails: React.FC<TitlesProps> = ({ title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold pb-6 border-b border-gray-200 mb-6">{title}</h3>
    </>
  );
};

export const TitleDetails2: React.FC<TitlesProps2> = ({ title }) => {
  return (
    <>
      <h3 className="text-xl font-semibold">{title}</h3>
    </>
  );
};
