import { FaLocationDot } from "react-icons/fa6";
import { RxCalendar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
import React from "react";
import { NavLink } from "react-router-dom";

interface TripCardProps {
  item: {
    id: number;
    image: string;
    flag: string;
    country: string;
    address: string;
    rating: string;
    discount: string;
    price: string;
    avatar: string;
    desc: string;
  };
}

export const TripCard: React.FC<TripCardProps> = ({ item }) => {
  return (
    <>
      <div className="box rounded-x1 shadow-s2 lg:w-4/12 md:w-6/12 px-2">
        <div className="h-56">
            <img src={item.image} alt="" className="w-full h-full rounded-t-xl" />
        </div>
        <div className="detail p-6">          
          <div className="flex justify-between">
            <h3 className="text-xl font-semibold">{item.country}</h3>
            <img src={item.flag} alt=""></img>
          </div>
          <div className="flexc gap-2 mt-4 text-gray-400">
            <FaLocationDot size={20} className="text-gray-500" />
            <span className="text-sm">{item.address.slice(0,43)}...</span>
          </div>
          <div className="flex justify-between my-6 text-gray-400 border-t border-b border-gray-200 py-3">
            <div className="flexc gap-5">
              <div className="flexc gap-3">
                <RxCalendar size={20} className="text-gray-500" />
                <span className="text-md">Day</span>
              </div>
              <div className="flexc gap-2">
                <FaStar size={20} className="text-yellow-500" />
                <span className="text-md">{item.rating}</span>
              </div>
            </div>
            <div className="flexc gap-2">
              <span className="text-md line-through">{item.discount}</span>
              <span className="text-xl font-semibold text-black">{item.price}</span>
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <img src={item.avatar} className="w-10 h-10 rounded-full" alt="" />
            <p className="text-sm">{item.desc}</p>
          </div>
          <NavLink to={`/datalist/${item.id}`} className="underline text-sm text-gray-400 mt-6 block">
            See Details
          </NavLink>
        </div>
      </div>
    </>
  );
};
