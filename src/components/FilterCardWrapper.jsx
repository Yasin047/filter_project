import {
  availabilityData,
  colorData,
  interfaceData,
  specialFeatureData,
  typeData,
} from "../app/utils/db/index.js";
import FilterCard from "./FilterCard.jsx";
import PriceRange from "./PriceRange.jsx";

const FilterCardWrapper = ({
  availability,
  setAvailability,
  type,
  setType,
  inter,
  setInter,
  color,
  setColor,
  specialFeature,
  setSpecialFeature,
  minValue,
  set_minValue,
  set_maxValue,
  maxValue,
}) => {
  return (
    <div className="w-1/5 hidden xl:flex flex-col gap-y-4 ml-4">
      <PriceRange
        minValue={minValue}
        set_minValue={set_minValue}
        set_maxValue={set_maxValue}
        maxValue={maxValue}
      />
      <FilterCard
        data={availabilityData}
        title={"Availability"}
        checked={availability}
        setChecked={setAvailability}
      />
      <FilterCard
        data={typeData}
        title={"Type"}
        checked={type}
        setChecked={setType}
      />
      <FilterCard
        data={interfaceData}
        title={"Interface"}
        checked={inter}
        setChecked={setInter}
      />
      <FilterCard
        data={colorData}
        title={"Color"}
        checked={color}
        setChecked={setColor}
      />
      <FilterCard
        data={specialFeatureData}
        title={"SpecialFeature"}
        checked={specialFeature}
        setChecked={setSpecialFeature}
      />
    </div>
  );
};

export default FilterCardWrapper;
