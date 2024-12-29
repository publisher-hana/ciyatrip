import { FaStar } from "react-icons/fa6";
import { Title } from "../../utils/Route";
import { avatar } from "../../assets/data";
import { MdOutlineFormatQuote } from "react-icons/md";

export const Testimonials = () => {
  return (
    <>
     <section className="testi my-20">
      <div className="containers">
        <Title text="TESTIMONIAL" title1="What Our" title2="Happy Clients say about us" page={true}/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          <TestimonialBox />
          <TestimonialBox />
          <TestimonialBox />
        </div>
      </div>
     </section>
    </>
  );
};

export const TestimonialBox = () => {
  return (
    <div className="box shadow-s2 p-8 rounded-lg relative">
      <MdOutlineFormatQuote size={100} className="opacity-10 absolute top-0 right-0" />
      <div className="flexc gap-1 text-yellow-400">
        <FaStar size={22} />
        <FaStar size={22} />
        <FaStar size={22} />
        <FaStar size={22} />
        <FaStar size={22} />
      </div>
      <p className="py-7 italic leading-7">Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum</p>
      <div className="flexc justify-between">
        <img src={avatar} alt="" />
        <span>Jhon - Account</span>
      </div>
    </div>
  )
};
