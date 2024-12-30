import { PageLayout, Title } from "../utils/Route";
import "./destinations.css"
import DestinationCard from "../components/card/DestinationCard";
import { destination } from "../assets/data";
const titleProps = {
  text: "Destination",
  title1: "",
  title2: "Destination",
  page: false,
};

export const Destination = () => {
  return (
    <PageLayout titleProps={titleProps}>
      <div className="destinations lg:my-40 my-20">
        <div className="containers">
          <div className="flex items-center flex-col"> 
            <Title 
              text="CHOOSE YOUR" 
              title1="Choose" 
              title2="Destination"
              page={true} 
            />
            <p className="mt-6 text-center">
              Let success motivate you. Find a picture of what epitomizes success to
              <span className="lg:block">you and then pull it out when you are in need.</span>
            </p>
          </div>
          <ul className="mt-16 grid lg:grid-cols-6 grid-cols-3 lg:gap-6 gap-3">
           {
            destination.map((item) => (
              <DestinationCard item={item} key={item.id}/>
            ))
           }
          </ul>
          
        </div>
      </div>
    </PageLayout>
  )
}
