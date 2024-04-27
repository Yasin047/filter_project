"use client";
import FilterCardWrapper from "@/components/FilterCardWrapper";
import Products from "@/components/Products";
import SelectBox from "@/components/SelectBox";
import SideBar from "@/components/SideBar";
import { useState } from "react";
import { IoFilter } from "react-icons/io5";
import { sorts } from "./utils/data";
import useFetchingData from "./utils/hooks/useFatchingData";

export default function Home() {
  const [show, setShow] = useState(false);
  const [availability, setAvailability] = useState([]);
  const [type, setType] = useState([]);
  const [inter, setInter] = useState([]);
  const [color, setColor] = useState([]);
  const [specialFeature, setSpecialFeature] = useState([]);
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(100000);
  const [sortBy, setSortBy] = useState("");

  const { products, loading } = useFetchingData(
    availability,
    type,
    inter,
    color,
    specialFeature,
    minValue,
    maxValue,
    sortBy
  );

  return (
    <main className="m-auto max-w-7xl">
      <div className="flex w-full gap-x-6 py-4">
        <FilterCardWrapper
          availability={availability}
          setAvailability={setAvailability}
          type={type}
          setType={setType}
          inter={inter}
          setInter={setInter}
          color={color}
          setColor={setColor}
          specialFeature={specialFeature}
          setSpecialFeature={setSpecialFeature}
          minValue={minValue}
          set_minValue={set_minValue}
          set_maxValue={set_maxValue}
          maxValue={maxValue}
        />
        <div className="w-full xl:w-4/5 flex flex-col relative">
          <div className="h-14 shadow-lg flex justify-between items-center px-6 bg-white rounded">
            <div className="hidden xl:block">Headphone</div>
            <div className="xl:hidden cursor-pointer">
              <IoFilter size={20} onClick={() => setShow(!show)} />
            </div>
            <div className="flex gap-x-4 text-sm text-gray-500">
              <div>Sort By:</div>
              <SelectBox
                options={sorts}
                selectedValue={sortBy}
                setSelectedValue={setSortBy}
              />
            </div>
          </div>
          <Products products={products} loading={loading} />
          <SideBar
            show={show}
            setShow={setShow}
            availability={availability}
            setAvailability={setAvailability}
            type={type}
            setType={setType}
            inter={inter}
            setInter={setInter}
            color={color}
            setColor={setColor}
            specialFeature={specialFeature}
            setSpecialFeature={setSpecialFeature}
            minValue={minValue}
            set_minValue={set_minValue}
            set_maxValue={set_maxValue}
            maxValue={maxValue}
          />
        </div>
      </div>
    </main>
  );
}
