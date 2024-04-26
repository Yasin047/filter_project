import {
  availabilityData,
  colorData,
  interfaceData,
  specialFeatureData,
  typeData,
} from "@/app/utils/db";
import { IoCloseOutline } from "react-icons/io5";
import { Menu, Sidebar } from "react-pro-sidebar";
import FilterCard from "./FilterCard";
import PriceRange from "./PriceRange";

const SideBar = ({
  show,
  setShow,
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
    <div>
      {show && (
        <div className="xl:hidden absolute top-0 right-0 z-10 bg-gray-200 cursor-pointer">
          <div className="absolute top-1 right-64">
            <IoCloseOutline
              size={22}
              onClick={() => setShow(false)}
              color="#6b7280"
            />
          </div>
          <Sidebar>
            <Menu className="mt-2">
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
            </Menu>
          </Sidebar>
        </div>
      )}
    </div>
  );
};

export default SideBar;
