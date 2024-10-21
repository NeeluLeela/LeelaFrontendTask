import { FaBuildingShield } from "react-icons/fa6";
import RangeSlider from "../../Library/UI/Slider";
import { Input } from "../../Library/UI/Input";

const FiltersSection = ({searchTerm,handleSearch,priceRange,handlePriceRangeChange,maxVolume}) => {
  
  
    const formatVolume = (value) => {
        if (value >= 1e9) {
          return `$${(value / 1e9)?.toFixed(1)}B`;
        } else if (value >= 1e6) {
          return `$${(value / 1e6)?.toFixed(1)}M`;
        } else if (value >= 1e3) {
          return `$${(value / 1e3)?.toFixed(1)}K`;
        }
        return `$${value?.toFixed(0)}`;
      };
  return<div className="w-full flex relative gap-6 items-center justify-center h-[100px]">
     <Input
          
          value={searchTerm}
          onChange={handleSearch}
          InputType="search"
          containerClass="max-w-[300px]"
          className="b-lightgrey rounded-[10px] max-w-[300px] rounded-[20px] m-auto border-[1px] border- p-2 pl-10"
          Icon={<FaBuildingShield />}
        
        />

        <div className="w-full max-w-[150px] px-4 absolute top-1/2 -translate-y-1/2 left-[10px]">
          <div className="flex justify-between mb-2 text-[10px] text-gray-600">
            <span>{formatVolume(priceRange?.[0])}</span>
            <span>{formatVolume(priceRange?.[1])}</span>
          </div>
         
          <RangeSlider
            defaultValue={[0, maxVolume]}
            value={priceRange}
            max={maxVolume}
            step={maxVolume / 100}
            onValueChange={handlePriceRangeChange}
            className="w-full"
          />
           <div className="mt-1 text-center text-[10px] text-gray-600">
            Volume Range
          </div>
        </div>
  </div>;
};
export default FiltersSection