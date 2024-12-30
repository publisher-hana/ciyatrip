import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { Card } from "../common/Compoent";
import { TitleDetails2 } from "../common/Title";
import { SlSocialInstagram } from "react-icons/sl";

export const SubsribesCard = () => {
   const className="mt-2 p-2 border-[1px] border-solid border-gray-200 flex items-center"
    return(
      <>
      <Card>
        <TitleDetails2 title="Subscribe & Follow"/>
        <div className="my-4">
          <ul>
            <li className={`text-[#466ca9] ${className}`}>
              <TiSocialFacebook className="text-xl"/>
              <button className="font-semibold pl-2">FaceBook</button>
            </li>
            <li className={`text-[#20b5e6] ${className}`}>
              <TiSocialTwitter className="text-xl"/>
              <button className="font-semibold pl-2">Twitter</button>
            </li>
            <li className={`text-[#d92c20] ${className}`}>
              <TiSocialYoutube className="text-xl"/>
              <button className="font-semibold pl-2">Youtube</button>
            </li>
            <li className={`text-[#000] ${className}`}>
              <SlSocialInstagram className="text-xl"/>
              <button className="font-semibold pl-2">Instagram</button>
            </li>
          </ul>
        </div>
      </Card>
    </>
    )
}
