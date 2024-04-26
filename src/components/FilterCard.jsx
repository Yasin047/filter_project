"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FilterCard = ({ data, title, checked, setChecked }) => {
  const [open, setOpen] = useState(true);
  const handleChange = (key) => {
    let currentItem = [...checked];
    setChecked((prev) =>
      currentItem.includes(key)
        ? currentItem.filter((item) => item !== key)
        : [...checked, key]
    );
  };

  const router = useRouter();

  const handleClick = (options) => {
    // let currentQuery = {};
    // if (params) {
    //   currentQuery = qs.parse(params.toString());
    // }
    // const updatedQuery = {
    //   ...currentQuery,
    //   availability: options,
    // };
    // console.log(updatedQuery);
    // if (params?.get("availability") === options) {
    //   updatedQuery, updatedQuery.availability;
    // }
    // const url = qs.stringifyUrl(
    //   {
    //     url: "/",
    //     query: updatedQuery,
    //   },
    //   { skipNull: true }
    // );
    // router.push(url);
  };

  return (
    <div className={`shadow-md relative ${open && "pb-8"} bg-white rounded`}>
      <div className="p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div>{title}</div>
          <div>
            <MdKeyboardArrowDown
              size={20}
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        <div className="absolute top-14 left-0 h-[1px] w-full bg-gray-300"></div>
        <div className="relative top-8">
          {open &&
            data?.map((item) => (
              <div key={item.key} onClick={() => handleClick(item.options)}>
                <label className="cursor-pointer flex justify-start items-center ">
                  <input
                    type="checkbox"
                    checked={checked.includes(item.key)}
                    onChange={() => handleChange(item.key)}
                    className="w-4 h-4 my-2"
                  />
                  <span className="ml-3 text-sm">{item.options}</span>
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
