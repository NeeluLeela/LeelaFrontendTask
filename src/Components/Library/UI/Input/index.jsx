import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoCheckbox, IoEyeOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { cn } from "../../Utilities/HelperFunctions";

const Input = React.forwardRef(
  (
    {
      className,
      containerClass,
      error,
      Icon,
      label,
      type,
      InputType,
      noWhite,
      placeholder,
      RightIcon,
      labelClass,
      pattern,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(props.value ? true : false);
    const [isValid, setIsValid] = useState(false);
    useEffect(() => {
      if (ref?.current?.value || props.value) {
        setHasValue(true);
      }
    }, [ref, props.value]);

    // Handle autocomplete
    useEffect(() => {
      const checkAutofill = () => {
        const input = ref?.current;
        if (input) {
          // Check if input has a value or has the autocomplete background
          const hasAutofill = 
            input.value || 
            window.getComputedStyle(input, ":-webkit-autofill").getPropertyValue("background-color") !== "";
          setHasValue(hasAutofill);
        }
      };

      // Check immediately and after a short delay to catch autocomplete
      checkAutofill();
      const timer = setTimeout(checkAutofill, 100);
      return () => clearTimeout(timer);
    }, [ref]);

  
   
    useEffect(() => {
      if (pattern && props.value) {
        const patternRegex = new RegExp(pattern);
        setIsValid(patternRegex.test(props.value));
      }
    }, [props.value, pattern]);
    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
    };

    const handleChange = (e) => {
      setHasValue(e.target.value !== "");
      if (props.onChange) props.onChange(e);
    };

    return (
      <div
        className={cn("relative w-full flex flex-col", containerClass)}
        id={!noWhite ? "Input_container" : ""}
      >
        <div className="relative">
          {/* Icon on the left */}
          {Icon && (
            <div className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400">
              {Icon}
            </div>
          )}
          {RightIcon && (
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400">
              {RightIcon}
            </div>
          )}
          {/* Search icon on the right */}
          {InputType === "search" && (
            <div className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-400">
              <BiSearch />
            </div>
          )}

          {pattern && props.value && isValid && !RightIcon && (
            <div  className={cn("w-5 h-5 text-green-500 absolute top-1/2 translate-y-[-50%] right-3",{'right-0':InputType==='Password'}) }>
            <IoCheckbox />
              </div>
          )}

          {/* Input field */}
          <input
            type={
              InputType === "Password"
                ? showPassword
                  ? "text"
                  : "password"
                : type
            }
            className={cn(
              "w-full px-3 py-2 bg-transparent",
              "border-b-2 border-gray-300",
              "text-sm ",
              "focus:outline-none focus:border-b-2 focus:border-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "[&:-webkit-autofill]:bg-transparent",
              "[&:-webkit-autofill]:transition-colors",
              "[&:-webkit-autofill]:duration-[5000s]",
              "[&:-webkit-autofill]:text-fill-foreground",
              Icon ? "pl-10" : "pl-1",
              InputType === "search" ? "pr-10 pl-10" : "pr-3",
              className
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder=" "
            {...props}
          />

          {/* Floating label */}
          <label
            className={cn(
              "absolute left-1 pointer-events-none uppercase",
              "transition-all duration-200 bg-transparent px-0",
              isFocused || hasValue
                ? "-top-2 text-xs text-primary"
                : "top-1/2 -translate-y-1/2 text-gray-400 text-sm",
              Icon && "left-10",labelClass
            )}
          >
            {placeholder}
          </label>

          {/* Password toggle icon */}
          {InputType === "Password" && (
            <div
              className={cn("absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600",{'right-10':isValid})}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </div>
          )}
        </div>

        {/* Error message */}
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
