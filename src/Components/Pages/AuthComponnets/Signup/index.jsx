import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../Library/UI/Button";
import { Input } from "../../../Library/UI/Input";
import { cn } from "../../../Library/Utilities/HelperFunctions";
import { BiLogIn } from "react-icons/bi";
import { toast } from "react-toastify";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

const SignUpComponent = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    watch,
    trigger,
    setError,
    clearErrors,
    setValue
  } = useForm({defaultValues:{name:'',password:'',age:'',firstname:'',lastname:'',phoneNumber:'',email:''}});

  const [activeStep, setActiveStep] = useState(1);
  const { errors } = formState;
  const navigate = useNavigate();

  const onSignup = async () => {
    if (activeStep !== 2) {
      setActiveStep(2);
      return;
    }
    toast.success("You have succesfully registered");
    setTimeout(() => {
      navigate("/login");
    });
  };

  const onStepClick = async (val, ) => {
   

    if (val > activeStep) {
      const isValid = await trigger();
      if (!isValid) return;
    }

    setActiveStep(val);
  };
  const renderSteps = () => {
    switch (activeStep) {
      case 1:
        return (
          <StepOne
            register={register}
            formState={formState}
            reset={reset}
            watch={watch}
            trigger={trigger}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
            setValue={setValue}
          />
        );
      case 2:
        return (
          <StepTwo
            register={register}
            formState={formState}
            reset={reset}
            watch={watch}
            trigger={trigger}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
            setValue={setValue}

          />
        );
      default:
        return (
          <StepOne
            register={register}
            formState={formState}
            reset={reset}
            watch={watch}
            trigger={trigger}
            setError={setError}
            clearErrors={clearErrors}
            errors={errors}
            setValue={setValue}

          />
        );
    }
  };

  return (
    <>
      <form
        autoComplete="off"
        autoCorrect="off"
        onSubmit={handleSubmit(onSignup)}
        className="flex items-center justify-center flex-col  form w-full max-w-[450px]"
      >
        <div className="max-w-[120px] min-w-[100px] w-fit h-[50px] bg-white flex items-center justify-evenly">
          {StepConstants?.map((item, index) => (
            <div
            key={item.step}
              className={cn("w-fit p-2 h-full ", {
                "border-b-2 border-[gold]": activeStep === item.step,
              })}
            >
              <button
                type="submit"
                onClick={() => onStepClick(item.step)}
                className={cn(
                  "w-[30px] h-[30px] cursor-pointer rounded-[50%] bg-muted text-white flex items-center justify-center ",
                  {
                    "bg-primary": activeStep === item.step,
                  }
                )}
              >
                <p>{item.step}</p>
              </button>
            </div>
          ))}
        </div>
        {renderSteps()}

        {activeStep === 2 && (
          <Button type="submit" className="mr-auto mt-3">
            <BiLogIn className="text-[20px]" /> SignIn
          </Button>
        )}
      </form>
    </>
  );
};

export default SignUpComponent;
const inputStyles = "min-h-[45px] ";

const StepConstants = [{ step: 1 }, { step: 2 }];
