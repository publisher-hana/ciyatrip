import { BsPinMap } from "react-icons/bs";
import { quickLinks } from "../../assets/data";
import { TitleDetails2 } from "./Title";
import { NavLink } from "react-router-dom";
import React from "react";

interface CardProps {
  color: string;
}

export const Footer = () => {
  return (
    <>
      <footer className="bg-[#f4f9ff] py-16">
        <div className="containers flex justify-between gap-5 flex-wrap lg:flex-nowrap -mt-32 mg-16">
            <Card color="bg-primary" />
            <Card color="bg-[#000]" />
        </div>
        <div className="containers grid grid-cos-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20">
            <div>
              <TitleDetails2 title="Our Newsletter" />
              <p className="my-8">Sign up to our Newsletter to get the latest news and offers.</p>
              <div>
                <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="your email" />
                <button className="primary-btn mt-5">Get Notification</button>
              </div>
            </div>
            
            {quickLinks.map((section,index)=> (
              <div key={index}>
                <TitleDetails2 title={section.section} />
                <ul className="mt-7">
                  {section.links.map((link, sindex) => (
                    <li key = {sindex} className="text-gray-400 mb-4">
                       <NavLink to={(link as { url: string }).url}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </footer>
    </>
  );
};

export const Card: React.FC<CardProps> = ({ color }) => {
  return <>
    <div className={`flex flex-wrap lg:flex-nowrap justify-between items-center gap-10 p-8 rounded-md w-full ${color} text-white`}> 
        <div>
          <BsPinMap size={50} />
        </div>
        <div>
          <TitleDetails2 title ="Travel Plan" />
          <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipsicing</p>
        </div>
        <NavLink to="/" ></NavLink>
    </div>
  </>
};
