import { IoIosSearch } from "react-icons/io";
import Select from "react-select";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import { options, Value } from "../../utils";

export const Hero = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <>
      <section className="hero relative mt-20 lg:h-[700px]">
        <div className="absolute top-0 left-0 overflow-hidden">
          <img src="../images/banner1.jpg" alt="img" className="w-full h-full object-cover animate-scale" />
        </div>
        <div className="containers relative lg:pt-60 md:pt-40 pt-20"> 
          <h1 className="lg:text-[90px] text-4xl font-semibold text-white leading-snug">LET'S</h1>
          <h1 className="lg:text-[90px] text-4xl font-semibold text-white  leading-snug">TRAVEL</h1>
          <div className="flex flex-wrap lg:flex-nowrap w-full bg-white shadow-s2 mt-4">
            <Select placeholder="Destination" options ={options}  className="w-full" styles={{
              control:(baseStyles) => ({
                ...baseStyles,
                border: "0",
                boxShadow : "0",
                "&:hover":{
                  border: "0",
                },
                padding: "10px",
              })
            }}/>
            <div className="w-full">
              <DatePicker 
                className="border-none" 
                onChange={onChange} 
                value={value} 
                clearIcon={null}
                calendarProps={{
                  formatDay: (_, date) => `${date.getDate()}`,
                }}
              />
            </div>
            <Select placeholder="Travel types" options ={options}  className="w-full" styles={{
              control:(baseStyles) => ({
                ...baseStyles,
                border: "0",
                boxShadow : "0",
                "&:hover":{
                  border: "0",
                },
                padding: "10px",
              })
            }}/>
            <button className="primary-btn flex items-center gap-3 w-full lg:w-auto">
              <IoIosSearch size={20} />Search
            </button>
          </div>
         
        </div>
      </section>
    </>
  );
};
