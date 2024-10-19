import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../Library/UI/Button";
import { Input } from "../../../Library/UI/Input";
import { checkLength, cn } from "../../../Library/Utilities/HelperFunctions";
import { BiLogIn } from "react-icons/bi";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState,
    reset,
    watch,
    trigger,
    setError,
    clearErrors,
  } = useForm();

  const { errors } = formState;
  const navigate = useNavigate();
  
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const onLogin = async () => {
    localStorage.setItem('token',"Iam The Necessary One GatePass to view Other pages");
    setTimeout(() => {
      navigate("/dashboard");
    });
  };
 
  return (

      <>
        <form
          autoComplete="off"
          autoCorrect="off"
          onSubmit={handleSubmit(onLogin)}
          className="flex items-center justify-center flex-col  form w-full max-w-[450px]"
        >
          <div className="w-full relative p-4 pt-0  max-w-[450px] gap-4 flex flex-col ">
            <div className="relative w-full">
              <Input
                type=""
                placeholder="Email"
                {...register("email", {
                  required: "Email  is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email",
                  },
                })}
                value={watch("email")}
               
                className={inputStyles}
                error={errors ? errors?.email?.message : ""}
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
            <Button className="mr-auto mt-3" type="submit">
              <BiLogIn className="text-[20px]" /> Login
            </Button>
          </div>
        <div className=" flex w-full text-left  items-center justify-start p-4 ">
          <p className="text- text-[14px] font-normal text-center ">
            If you do not have account
            <span className="text-primary cursor-pointer" onClick={navigateToSignup}>
              {" "}
              click here
            </span>{" "}
            to create an account
          </p>
        </div>
        <p className="w-full px-4 py-1 text-primary cursor-pointer text-[14px] text-left">Forgot your password?</p>
        </form>
      </>
    
  );
};

export default LoginComponent;
const inputStyles = "min-h-[45px] ";
