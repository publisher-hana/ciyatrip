import { useState } from "react";
import { dots } from "../../assets/data";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Title, TitleDetails2 } from "../../components/common/Title";

interface Dot {
  top: string;
  left: string;
  info: string;
  image: string;
  country: string;
}

export const Map: React.FC = () => {
  const [hoverDot, setHoverDot] = useState<Dot | null >(null) ;
  return(
    <>
      <section className="my-20 relative">
        <div className="containers">
          <div className="flex justify-center items-center flex-col">
            <Title text="Let's plan the trip of your dreams" title1="Your" title2="Tour Plan"  page={true}/>
          </div>
          <div className="relative my-10">
            <img src="../images/map.png" alt="" className="w-full" />
              {dots.map((dot,index)=>(
              <button 
                className="dot absolute cursor-pointer" 
                key={index} 
                style={{top: dot.top, left:dot.left}}
                onMouseEnter ={() => setHoverDot(dot)}
                onMouseLeave ={() => setHoverDot(null)}
                >
                <FaMapMarkerAlt size={20} />
              </button>
            ))}

            {hoverDot && (
              <div className="absolute bg-white p-3 border rounded-lg text-center shadow-lg w-48" style={{top:hoverDot.top, left:hoverDot.left, transform:"translate(-50%, -120%)"}}>
                  <div className="h-48">
                    <img src={hoverDot.image} alt="" className="rounded-lg mb-2 w-full h-full object-cover" />
                  </div>
                  <TitleDetails2 title={hoverDot.country} />
                  <span className="mt-2 block">{hoverDot.info}</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
};
