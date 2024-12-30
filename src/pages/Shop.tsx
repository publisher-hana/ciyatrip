import { useState } from "react";
import { CategoriesCard, PageLayout, SearchCard, SubsribesCard, TagsCard } from "../utils/Route"
import { debounce } from "lodash";
import { Card } from "../components/common/Compoent";
import { TitleDetails2 } from "../components/common/Title";
import RangeSlider from "../components/common/RangeSlider";
import Select from "react-select";
import { accOpt, ratingOpt, sortOpt } from "../utils";
import { products } from "../assets/data";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const titleProps = {
  text: "Shop",
  title1: "",
  title2: "Shop",
  page: false,
};
interface RatingProps {
  value: number
}
export const Shop = () => {
  return (
    <>
      <PageLayout titleProps={titleProps}>
        <div className="destinations my-20">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 ">
            <div className="lg:w-2/3 w-full">
              <TitleDetails2 title="Product filters" />
              <div className="my-4 flex gap-2">
                <input type ="text" className="w-full p-2 border border-slate-300 rounded-md outline-none" placeholder="Search Products" />
                <Select placeholder="Accessories" options ={accOpt}  className="w-full border border-slate-300 rounded-md" styles={{
                  control:(baseStyles) => ({
                    ...baseStyles,
                    border: "0",
                    boxShadow : "0",
                    "&:hover":{
                      border: "0",
                    },
                    padding: "10px",
                  })
                }}
                components={{
                  IndicatorSeparator: () => null, // 화살표 옆의 바 제거
                }}
                />
                <Select placeholder="Any Rating" options ={ratingOpt}  className="w-full border border-slate-300 rounded-md" styles={{
                  control:(baseStyles) => ({
                    ...baseStyles,
                    border: "0",
                    boxShadow : "0",
                    "&:hover":{
                      border: "0",
                    },
                    padding: "10px",
                  })
                }}
                components={{
                  IndicatorSeparator: () => null, // 화살표 옆의 바 제거
                }}
                />
              </div>
              <div className="flex justify-end">
                <Select placeholder="Any Rating" options ={sortOpt}  className="w-2/4 border border-slate-300 rounded-md" styles={{
                  control:(baseStyles) => ({
                    ...baseStyles,
                    border: "0",
                    boxShadow : "0",
                    "&:hover":{
                      border: "0",
                    },
                    padding: "10px",
                  })
                }}
                components={{
                  IndicatorSeparator: () => null, // 화살표 옆의 바 제거
                }}
                />
              </div>
              <ul className="grid grid-cols-3 gap-6 gap-y-20 mt-8">
                {
                  products.map((item) => (
                    <li key={item.id}>
                      <img src={item.img} alt="" />
                      <strong>{item.title}</strong>
                      <div className="my-2">
                        <StarRating value={item.rating} />
                      </div>
                      <div className="flex gap-1 font-semibold">
                        <span className="line-through text-gray-400">{item.originPrice}</span>
                        <span className="text-primary">{item.price}</span>
                      </div>
                      <button className="primary-btn mt-4">Add To Cart</button>
                    </li>
                  ))
                }
                
              </ul>
            </div>
            <div className="lg:w-1/3 w-full">
              <SearchCard />  
              <FilterSlider />
              <CategoriesCard />
              <SubsribesCard />
              <TagsCard />
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}

export const StarRating:React.FC<RatingProps> = ({ value }) => {
  // 정수, 반별, 빈별 계산
  const fullStars = Math.floor(value); // 가득 찬 별
  const hasHalfStar = value % 1 !== 0; // 반별 여부
  const emptyStars = 5 - Math.ceil(value); // 빈 별

  return (
    <div className="flex items-center gap-1">
      {/* 가득 찬 별 */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-500">
            <FaStar size={18} />
          </span>
        ))}

      {/* 반별 */}
      {hasHalfStar && (
        <span className="text-yellow-500">
          <span className="relative">
            <FaStarHalfAlt size={18} />
          </span>
        </span>
      )}

      {/* 빈 별 */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <span key={`empty-${index}`} className="text-yellow-500">
            <FaRegStar size={18} />
          </span>
        ))}
    </div>
  );
};


export const FilterSlider = () => {
  const [sliderValues, setSliderValues] = useState<[number, number]>([0, 1000]);
  const handleSliderChanged = debounce((values: [number, number], userInteraction: boolean) => {
    setSliderValues(values);
    console.log("Slider values changed", values, userInteraction);
  }, 200);

  return(
    <Card>
      <div className="flexc justify-between bookingform mb-5">
        <TitleDetails2 title="Filter by price" />
      </div>
      <div className="flex flex-col gap-5">
        <RangeSlider min={0} max={1000} value={sliderValues} onChange={handleSliderChanged} />
        <div className="flex justify-between text-teal-500">
        <span>${sliderValues[0].toLocaleString()}</span>
        <span>${sliderValues[1].toLocaleString()}</span>
      </div>
      </div>
    </Card>
  )
};