import { Input } from "../../../Library/UI/Input";
import { checkLength } from "../../../Library/Utilities/HelperFunctions";
import { IoCaretDownCircle, IoCaretUpCircle } from "react-icons/io5";
const StepOne = ({
  register,
  handleSubmit,
  formState,
  reset,
  watch,
  trigger,
  setError,
  clearErrors,
  errors,
  setValue
}) => {
  const handleKeyDown = (e) => {
    if (document.activeElement !== e.target) {
      return true;
    }

    const isValid = checkLength(e);

    if (!isValid && e.target.value.length < 10) {
      setError("age", {
        type: "manual",
        message: "Only numbers are allowed",
      });
    } else {
      clearErrors("age");
    }
  };

  const age = watch("age");

  const handleIncrement = () => {
    if (age < 120) {
      setValue("age", Number(age) + 1);
    }
  };

  const handleDecrement = () => {
    if (age > 0) {
      setValue("age", Number(age) - 1);
    }
  };
  return (
    <>
      <div className="w-full relative p-4   max-w-[450px] gap-4 flex flex-col ">
        <div className="relative w-full">
          <Input
            type=""
            pattern="^[a-zA-Z]{3,}$"
            placeholder="First Name"
            {...register("firstName", {
              required: "First Name  is required",
              pattern: {
                value: /^[a-zA-Z]{3,}$/,
                message: "Name must contain only Alphabets ",
              },
              minLength: {
                value: 3,
                pattern: "Enter atleast 3 characters",
              },
            })}
            value={watch("firstName")}
            error={errors?.firstName?.message || ""}
          />
        </div>
        <div className="relative w-full">
          <Input
            type=""
            placeholder="Last Name"
            pattern="^[a-zA-Z]{3,}$"
            {...register("lastName", {
              required: "Last Name  is required",
              pattern: {
                value: /^[a-zA-Z]{3,}$/,
                message: "Name must contain only Alphabets",
              },
              minLength: {
                value: 3,
                pattern: "Enter atleast 3 characters",
              },
            })}
            value={watch("lastName")}
            error={errors?.lastName?.message || ""}
          />
        </div>
        <div className="relative w-full">
          <Input
            type=""
            placeholder="Email"
            pattern="\S+@\S+\.\S+"
            {...register("email", {
              required: "Email  is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please enter a valid email",
              },
            })}
            value={watch("email")}
            error={errors ? errors?.email?.message : ""}
          />
        </div>
        <div className="relative w-full flex ">
          <IoCaretUpCircle
            className="text-primary min-w-[30px] min-h-[30px] mt-auto"
            onClick={handleIncrement}
          />

          <Input
            type="number"
            pattern="^(?:[1-9]|[1-9][0-9]|1[0-1][0-9]|120)$"
            onKeyDown={handleKeyDown}
            placeholder="Age"
            {...register("age", {
              required: "age  is required",
              pattern: {
                value: /^(?:[1-9]|[1-9][0-9]|1[0-1][0-9]|120)$/,
                message: "Please enter a valid age",
              },
            })}
            labelClass='left-[-24px] !top-0'
            value={watch("age")}
            error={errors ? errors?.age?.message : ""}
          />
          <IoCaretDownCircle
            className="text-primary min-w-[30px] min-h-[30px] mt-auto"
            onClick={handleDecrement}
          />
        </div>
      </div>
    </>
  );
};

export default StepOne;
