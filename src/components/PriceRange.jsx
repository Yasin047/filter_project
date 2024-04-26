import MultiRangeSlider from "multi-range-slider-react";

const PriceRange = ({ minValue, set_minValue, maxValue, set_maxValue }) => {
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="h-48 shadow-md relative bg-white rounded">
      <div className="p-4">
        <div>Price Range</div>
        <div className="mt-6">
          <MultiRangeSlider
            min={0}
            max={100000}
            step={5}
            minValue={minValue}
            maxValue={maxValue}
            onInput={(e) => {
              handleInput(e);
            }}
            label={false}
            ruler={false}
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              padding: "15px 10px",
            }}
            barLeftColor="#d1d5db"
            barInnerColor="#fb923c"
            barRightColor="#d1d5db"
            thumbLeftColor="#fb923c"
            thumbRightColor="#fb923c"
            canMinMaxValueSame={true}
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="w-20 h-10 border-2 flex justify-center items-center">
            {minValue}
          </div>
          <div className="w-20 h-10 border-2 flex justify-center items-center">
            {maxValue}
          </div>
        </div>
        <div className="absolute top-12 left-0 h-[1px] w-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default PriceRange;
