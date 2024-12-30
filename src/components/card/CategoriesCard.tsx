
import { IoIosArrowForward } from "react-icons/io";
import { Card } from "../common/Compoent";
import { TitleDetails2 } from "../common/Title";

export const CategoriesCard = () => {
  const className="py-2 border-b-[1px] border-solid border-gray-200 flex justify-between items-center"
  return (
    <Card>
      <TitleDetails2 title="Categories"/>
      <div className="my-4">
        <ul className="text-gray-400">
          <li className={className}>
            <button className="hover:text-primary">Adventure</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Business Travel</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Cruises</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Exotic Vacations</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Golf & Spa</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Holidays</button>
            <IoIosArrowForward />
          </li>
          <li className={className}>
            <button className="hover:text-primary">Honeymoon</button>
            <IoIosArrowForward />
          </li>
        </ul>
      </div>
    </Card>
  )
}
