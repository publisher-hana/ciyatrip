import { trips } from "../../assets/data";
import { Title, TripCard } from "../../utils/Route";

export const Trips = () => {
 return(
  <>
    <section className="trips lg:mt-40 my-20">
      <div className="containers">
          <Title 
            text="A smiling agent for you" 
            title1="The smiling" 
            title2="Agent For Travel"
            page={true} 
          />
          <div className="content mt-10 flex flex-wrap">
            {
              trips.map((item) => (
                <TripCard  item={item} key={item.id}/>
              ))
            }
          </div>
      </div>
    </section>
  </>
 )
};
