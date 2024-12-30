import { useState } from "react";
import { CategoriesCard, PageLayout, SearchCard, SubsribesCard, TagsCard } from "../utils/Route"
import { debounce } from "lodash";
import { Card } from "../components/common/Compoent";
import { TitleDetails2 } from "../components/common/Title";
import RangeSlider from "../components/common/RangeSlider";
const titleProps = {
  text: "Shop",
  title1: "",
  title2: "Shop",
  page: false,
};

export const Shop = () => {
  return (
    <>
      <PageLayout titleProps={titleProps}>
        <div className="destinations my-20">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 ">
            <div className="lg:w-2/3 w-full">
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
        <span>{sliderValues[0].toLocaleString()}$</span>
        <span>{sliderValues[1].toLocaleString()}$</span>
      </div>
      </div>
    </Card>
  )
};