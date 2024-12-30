import { NavLink } from "react-router-dom"
interface DestCardProps {
  item: {
    id: number;
    image: string;
    country: string;
    mapIco: string;
  };
}
const DestinationCard: React.FC<DestCardProps> = ({item}) => {
  return (
    <li className="rounded-full overflow-hidden relative">
      <NavLink to="">
        <img src={item.image} alt=""/>
        <div className="inner">
          <div className="">
            <img src={item.mapIco} alt="" />
            <span className="uppercase font-semibold">{item.country}</span>
          </div>
        </div>
      </NavLink>
    </li>
  )
}

export default DestinationCard