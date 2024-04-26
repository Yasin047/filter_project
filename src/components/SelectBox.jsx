"use client";

import { useState } from "react";

const SelectBox = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <select
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        className={`bg-gray-100 h-6 w-30 border-pink-50`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
