import React from "react";
import * as Slider from "@radix-ui/react-slider";

const RangeSlider = ({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
}) => {
  const isDisabled = min === 0 && max === 0;

  return (
    <Slider.Root
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
      className={`relative flex items-center w-full h-5 touch-none select-none ${className}`}
    >
      {!isDisabled && (
        <>
          <Slider.Track className="relative h-[3px] grow rounded-full bg-gray-200">
            <Slider.Range className="absolute h-full rounded-full bg-primaryMuted" />
          </Slider.Track>
          {value.map((_, index) => (
            <Slider.Thumb
              key={index}
              className="block w-3 h-3 bg-primary rounded-full hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
              aria-label={index === 0 ? "Minimum value" : "Maximum value"}
            />
          ))}
        </>
      )}
    </Slider.Root>
  );
};

export default RangeSlider;
