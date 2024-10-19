import React from "react";
import { cn } from "../../Utilities/HelperFunctions";

const Button = React.forwardRef(
  ({ text, className, styles, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "min-w-[70px] min-h-[40px] h-[40px] w-auto flex items-center justify-between gap-2 px-2 text-[14px] bg-primary text-white rounded-[4px]",
          className
        )}
        {...props}
      >
        {text||props.children}
      </button>
    );
  }
);

export default Button;
