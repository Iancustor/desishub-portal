"use client";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // console.log(showPassword);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  function onSubmit(data) {
    // console.log(data);
    reset();
    toast.success("Logged In Successfully !");
  }
  return (
    <div className=" flex items-center justify-center py-16 px-5">
      <div className=" w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-indigo-800  dark:bg-indigo-500 border-stone-800 ">
        <div className="flex flex-col relative ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            action="#"
          >
            <h5 className="text-xl font-medium  text-white"> Log In</h5>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email address
              </label>
              <input
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
                type="email"
                id="email"
                className="bg-dark:border-stone-600  border border-stone-800 text-stone-950 placeholder-stone-600 dark:text-stone-50 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-stone-950 dark:border-stone-600 dark:placeholder-stone-400  dark:focus:ring-green-400 dark:focus:border-green-400"
                placeholder="john.doe@company.com"
              />

              {errors.mail && (
                <p className="text-red-600 text-xs mt-2" role="alert">
                  {errors.mail.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your password
              </label>
              <div className=" ">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  className="border-stone-800 text-stone-950 placeholder-stone-600 dark:text-stone-50 text-sm rounded-lg focus:ring-green-400 focus:border-green-400 block w-full p-2.5 dark:bg-stone-950 dark:border-stone-600 dark:placeholder-stone-400  dark:focus:ring-green-400 dark:focus:border-green-400"
                />
              </div>
              {errors.password && (
                <span className="text-red-600 text-xs mt-2">
                  Password is Required{" "}
                </span>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <span className="text-red-600 text-xs mt-2">
                  Password must be 6 and above{" "}
                </span>
              )}
              {errors.password && errors.password.type === "maxLength" && (
                <span className="text-red-600 text-xs mt-2">
                  Password must not exceed 12 characters
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-400 dark:focus:ring-green-400"
            >
              Login to your Account
            </button>

            <div className="text-sm font-medium text-white">
              Not registered?{" "}
              <Link
                href="/register"
                className=" hover:underline text-green-400"
              >
                Create account
              </Link>
            </div>
          </form>
          <button
            className="absolute dark:text-white  top-44 right-0 px-5 py-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <Eye /> : <EyeOff />}
          </button>{" "}
        </div>
      </div>
    </div>
  );
}

export default Login;
