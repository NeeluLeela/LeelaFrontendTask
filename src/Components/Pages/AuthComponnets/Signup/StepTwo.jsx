import { Input } from "../../../Library/UI/Input";
import { checkLength } from "../../../Library/Utilities/HelperFunctions";

const StepTwo = ({
  register,
  handleSubmit,
  formState,
  reset,
  watch,
  trigger,
  setError,
  clearErrors,
  errors,
}) => {
  const handleKeyDown = (e) => {
    if (document.activeElement !== e.target) {
      return true;
    }

    const isValid = checkLength(e);

    if (!isValid && e.target.value.length < 10) {
      setError("phoneNumber", {
        type: "manual",
        message: "Only numbers are allowed",
      });
    } else {
      clearErrors("phoneNumber");
    }
  };
  return (
    <>
      <div className="w-full relative p-4   max-w-[450px] gap-4 flex flex-col ">
       
        <div className="relative w-full">
          <Input
            type="number"
            placeholder="Number"
            maxLength={10}
            pattern="^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$"
            {...register("phoneNumber", {
              required: "Mobile number is required",
              pattern: {
                value: /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
                message: "Enter  valid mobile number",
              },
              minLength: {
                value: 10,
                message: "Please enter a valid  10 digit mobile number",
              },
              maxLength: {
                value: 10,
                message: "Please enter a valid  10 digit mobile number",
              },
              validate: (value) => {
                if (value.length > 10) {
                  return "Please enter a valid  10 digit mobile number";
                } else {
                  return true;
                }
              },
            })}
            value={watch("phoneNumber")}
            onKeyDown={handleKeyDown}
            error={errors ? errors?.phoneNumber?.message : ""}
          />
        </div>

        <div className="relative w-full">
          <Input
            type=""
            InputType="Password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$"
            placeholder="password"
            {...register("password", {
                required: 'This fiels is Required',
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                  message:
                    "Minimum eight characters, and include (A-Z,a-z,0-9,speacialcharacters)",
                },
                minLength: {
                  value: 8,
                  message:
                    "Minimum eight characters, and include (A-Z,a-z,0-9,speacialcharacters)",
                },
              })}
            value={watch("password")}
            error={errors ? errors?.password?.message : ""}
          />
        </div>
      </div>
    </>
  );
};

export default StepTwo;
