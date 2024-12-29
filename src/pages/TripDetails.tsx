import { useParams } from "react-router-dom";
import { booking, gallary1, gallary2, gallary3, gallary4, gallary5, trips } from "../assets/data";
import { Progress, Title } from "../utils/Route";
import { RxCalendar } from "react-icons/rx";
import { FaDownload, FaLocationDot, FaStar } from "react-icons/fa6";
import React, { useState } from "react";
import { IoBookmark, IoTimeOutline } from "react-icons/io5";
import { FaMapMarkerAlt, FaShareAlt } from "react-icons/fa";
import { TbMessageReportFilled } from "react-icons/tb";
import { TitleDetails, TitleDetails2 } from "../components/common/Title";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Card } from "../components/common/Compoent";
import { GoDotFill } from "react-icons/go";
import { AiFillMinusCircle } from "react-icons/ai";
import { options, Value } from "../utils";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { CiCalendarDate } from "react-icons/ci";
import RangeSlider from "../components/common/RangeSlider";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { debounce } from "lodash";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}
interface TripImgProps {
  img: string;
  desc: string;
}
interface TripRatingProps {
  rating: string;
}

export const TripDetails = () => {
  const { id } = useParams<{ id: string }>();
  const trip = trips.find((t) => t.id === Number(id));

  if (!trip) {
    return <p>Trip not found</p>;
  }

  return (
    <>
      <section className="mt-20">
        <div className="img h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-[rgba(16,38,54,.6)]"></div>
          <img src="/ciyatrip/images/back.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute lef-0 bottom-0 w-full h-10">
            <img src="/ciyatrip/images/back2.png" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="containers">
          <div className="heading -mt-72 relative z-20">
            <Title text="Tour Details" title1="" title2="Tour Details" page={false} />
          </div>
          <div className="content my-60">
            <div className="flexc justify-between">
              <h3 className="text-3xl font-semibold">{trip.country}</h3>
              <img src={trip.flag} alt="" />
            </div>
            <div className="flexc justify-between mt-6 text-gray-400 border-t border-b border-gray-200 py-3 lg:flex-nowrap flex-wrap">
              <div className="flexc gap-5 lg:flex-nowrap flex-wrap">
                <div className="flex gap-3">
                  <RxCalendar size={20} className="text-gray-500" />
                  <span className="text-md">Day</span>
                </div>
                <div className="flexc gap-2">
                  <FaStar size={20} className="text-yellow-500" />
                  <span className="text-md">{trip.rating}</span>
                </div>
                <div className="flexc gap-2 my-4 text-gray-400">
                  <FaLocationDot size={20} className="text-gray-500" />
                  <span className="text-sm">{trip.address}</span>
                </div>
              </div>
              <div className="flexc gap-5">
                <div className="flexc gap-2"> 
                  <span className="text-md line-through">{trip.discount}</span>
                  <span className="text-xl font-semibold text-black">{trip.price}</span>
                </div>
                <button className="primary-btn flexc gap-2">
                  <RiVerifiedBadgeFill size={20} />
                  Verified tour
                </button>
              </div>
            </div> 
            <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 mt-5">
              <div className="lg:w-2/3 w-full">
                <div className="buttons flexc gap-5 flex-wrap lg:flex-nowrap">
                  <Button text="Save" icon={<FaDownload size={15}/>} />
                  <Button text="Bookmark" icon={<IoBookmark size={15}/>} />
                  {/* <Button text="Write a review" icon={<MdOutlineModeComment size={15}/>} /> */}
                  <Button text="Share" icon={<FaShareAlt size={15}/>} />
                  <Button text="Report" icon={<TbMessageReportFilled size={15}/>} />
                </div>
                <TripImg img={trip.image} desc={trip.desc} />
                <TripRating rating ={trip.rating} />
                <TripBooking />
                <TripGallary />
                <TripMap />
                <TripReview />
              </div>
              <div className="lg:w-1/3 w-full">
                <TripBookingForm />
                <TripPriceSlider />
                <TripLocation />
                <TripForm />
              </div>
            </div>
          </div>
        </div>`
      </section>`
    </>
  );
};

export const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return <button className="flexc gap-2 bg-white shadow-s4 px-6 py-3 hover:bg-primary transition-colors ease-in-out rounded-md hover:text-white">
    {icon}
    {text}
  </button>;
};

export const TripImg: React.FC<TripImgProps> = ({ img, desc }) => {
  return(
    <Card>
      <img src={img} className="rounded-md pb-6" alt="" />
      <TitleDetails title="Listing Description"/>
      <p>{desc}</p>
    </Card>
  )  ;
};

export const TripRating: React.FC<TripRatingProps> = ({ rating }) => {
  return (
    <Card>
      <TitleDetails title="Listing Description"/>
      <div className="flexc justify-between bg-slate-900 p-4 rounded-md">
        <div className="flexc gap-2 text-white text-sm">
          <span className="bg-green-500 text-xs rounded-md p-1 border">{rating}</span>
          <span>12 ratings</span>
        </div>
        <div className="flexc gap-1 text-yellow-400">
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
        </div>
      </div>
     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
      <Progress text="Quality" value={50}/>
      <Progress text="Space" value={30}/>
      <Progress text="Price" value={20}/>
      <Progress text="Location" value={80}/>
      <Progress text="Service" value={65}/>
      <Progress text="Cleanliness" value={65}/>
     </div>
    </Card>
  )
};

export const TripBooking = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const toggleAccordian = (id:number) => setActiveId((prevId) => (prevId === id ? 0 : id));
  return (
    <Card>  
      <TitleDetails title="Booking"/>
      <section className="booking-accordian">
        {booking.map((item) => (
          <div key={item.id} className={`mb-6 ${activeId === item.id ? "active" : "" }`}>
            <div className="relative z-10 flex gap-2 cursor-pointer" onClick={() => toggleAccordian(item.id)}>
              <div className="relative z-10 bg-transparent rounded-full">
                {activeId === item.id ? (
                  <div className="bg-primary text-white w-6 h-6 p-1 rounded-full">
                      <FaMapMarkerAlt />
                  </div>
                ):(
                    <div className="bg-gray-500 text-white p-0.5 rounded-full">
                        <GoDotFill size={20} />
                    </div>
                )}
              </div>
              <TitleDetails2 title={item.day} />
            </div>
            <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${activeId === item.id ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0" }`}>
              <div className="flex gap-7 pl-10 p-5 flex-wrap-reverse lg:flex-nowrap">
                <img src={item.img} alt="" className="h-32 w-32 rounded-lg"></img>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}

      </section>
    </Card>
  )
};

export const TripGallary = () => {
  return(
    <Card>
      <TitleDetails title="Form Our Gallery" />
      <div className="flex justify-between gap-5 lg:flex-nowrap flex-warp">
        <div className="lg:w-1/2 w-full">
          <img src={gallary1} alt="" className="w-full h-full rounded-md"/>
        </div>
        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-5">
          <img src={gallary2} alt="" className="w-full h-full rounded-md" />
          <img src={gallary3} alt="" className="w-full h-full rounded-md" />
          <img src={gallary4} alt="" className="w-full h-full rounded-md" />
          <img src={gallary5} alt="" className="w-full h-full rounded-md" />
        </div>
      </div>
    </Card>
  )
};

export const TripMap = () => {
  return (
    <Card>
      <TitleDetails title="Listing Location" />
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10401.334128825709!2d-72.9032105326172!3d-49.32690391273084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1735147747247!5m2!1sko!2skr" width="100%" height="350"  loading="lazy"></iframe>
    </Card>
  )
};

export const TripReview = () => {
  return (
    <Card>
      <TitleDetails title="Add a Review" />
      <div>
        <div className="flexc gap-1 text-yellow-400">
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
          <FaStar size={18} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-4">
          <div>
            <span>Your Name</span>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your name" />
          </div>
          <div>
            <span>Your email</span>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your email" />
          </div>
          <div>
            <span>Subject</span>
            <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Subject" />
          </div>
        </div>
        <div className="mt-5">
          <div>
            <span>Your Message</span>
            <textarea rows={5} className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your Message" />
          </div>
          <button className="primary-btn mt-4">Submit</button>
        </div>
      </div>
    </Card>
  )
};

export const TripBookingForm = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Card>
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Booking" />
        <AiFillMinusCircle size={25} />
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full border border-gray-300 rounded-md">
              <DatePicker 
                className="border-none" 
                onChange={onChange} 
                value={value} 
                clearIcon={null}
                calendarIcon={<CiCalendarDate size={22} />}
                calendarProps={{
                  formatDay: (_, date) => `${date.getDate()}`,
                }}
              />
        </div>
        <div className="w-full border border-gray-300 rounded-md">
              <DatePicker 
                className="border-none" 
                onChange={onChange} 
                value={value} 
                clearIcon={null}
                calendarIcon={<IoTimeOutline size={22} />}
                calendarProps={{
                  formatDay: (_, date) => `${date.getDate()}`,
                }}
              />
        </div>
        <Select placeholder="Adults" options ={options}  className="w-full" styles={{
            control:(baseStyles) => ({
              ...baseStyles,
              padding: "6px",
              outline: "none"
            })
          }}/>
        <Select placeholder="Childeren" options ={options}  className="w-full" styles={{
            control:(baseStyles) => ({
              ...baseStyles,
              padding: "6px",
              outline: "none"
            })
          }}/>
        <button className="primary-btn w-full">Request Booking</button>
      </div>
    </Card>
  )
};

export const TripPriceSlider = () => {
  const [sliderValues, setSliderValues] = useState<[number, number]>([25, 75]);
  const handleSliderChanged = debounce((values: [number, number], userInteraction: boolean) => {
    setSliderValues(values);
    console.log("Slider values changed", values, userInteraction);
  }, 200);

  return(
    <Card>
      <TitleDetails title="Price" />
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Booking" />
        <AiFillMinusCircle size={25} />
      </div>
      <div className="flex flex-col gap-5">
        <span>Select Price Range</span>
        <RangeSlider min={0} max={100} value={sliderValues} onChange={handleSliderChanged} />
        <button className="primary-btn w-full mt-5">Request Booking</button>
      </div>
    </Card>
  )
};

export const TripLocation = () => {
  return(
    <Card>
      <div className="flexc justify-between bokingform mb-5">
        <TitleDetails2 title="Location" />
        <AiFillMinusCircle size={25} />
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10401.334128825709!2d-72.9032105326172!3d-49.32690391273084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sko!2skr!4v1735147747247!5m2!1sko!2skr" width="100%" height="200"  loading="lazy"></iframe>
      <div className="font-semibold mt-7">
        <p className="text-black">Adress: <span className="font-normal text-gray-500">2014 West Arnold St. New York</span></p>
        <p className="text-black">Website: <span className="font-normal text-gray-500">potenzaglosolutions.com</span></p>
        <p className="text-black">Phone: <span className="font-normal text-gray-500">(123) 345-6788</span></p>
        <p className="text-black">Office Number: <span className="font-normal text-gray-500">(123) 345-6788</span></p>
      </div>
    </Card>
  )
};

export const TripForm = () => {
  return(
    <Card>
      <TitleDetails title="Listing Location" />
      <div>
        <div className="mb-4">
          <span>Your Name</span>
          <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your name" />
        </div>
        <div className="mb-4">
          <span>Your email</span>
          <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Your email" />
        </div>
        <div className="mb-4">
          <span>Subject</span>
          <input type ="text" className="w-full p-2 mt-2 border border-slate-300 rounded-md outline-none" placeholder="Subject" />
        </div>
      </div>
        
        <button className="primary-btn mt-4">Submit</button>
    </Card>
  )
};
