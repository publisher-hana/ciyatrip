import { IoIosSearch } from "react-icons/io";
import { Card } from "../common/Compoent";
import { TitleDetails2 } from "../common/Title"

export const SearchCard = () => {
  return (
    <Card>
      <TitleDetails2 title="Search"/>
      <div className="flex items-center mt-2 gap-2">
        <input type ="text" className="w-full p-2 border border-slate-300 rounded-md outline-none" placeholder="Search" />
        <button className="primary-btn p-3 hover:bg-black"> <IoIosSearch size={20} /></button>
      </div>
    </Card>
  )
}
