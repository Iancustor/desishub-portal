"use client";

import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  function handleForm(data) {
    // console.log(data);

    reset();
    toast.success("Successfully created!");
    router.push("/onboard");
  }
  const [reviewPassword, setReviewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  return (
    <div className=" flex flex-col items-center justify-center py-6 px-5">
      <div className="min-w-full flex flex-col items-center  relative">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-stone-800  dark:bg-stone-700 border-stone-800 "
        >
          <h5 className="text-xl mb-4 font-medium text-white"> Sign Up</h5>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                First name
              </label>
              <input
                {...register("firstName", {
                  required: true,
                  maxLength: 12,
                })}
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
                placeholder="John"
              />
              {errors.name && (
                <span className="text-red-600 text-xs mt-2">
                  First Name is required first
                </span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-red-600 text-xs">
                  Name must not exceed 12 characters
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Last name
              </label>
              <input
                {...register("lastName", {
                  required: true,
                  maxLength: 12,
                })}
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
                placeholder="Doe"
              />
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-red-600 text-xs">
                  Name must not exceed 12 characters
                </span>
              )}
            </div>
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="john.doe@company.com"
            />
            {errors.mail && (
              <p className="text-red-600 text-xs mt-2" role="alert">
                {errors.mail.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Password
            </label>
            <div className="">
              <input
                {...register("password", { required: true })}
                type={reviewPassword ? "password" : "text"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
                placeholder="•••••••••"
              />
            </div>
            {errors.password && (
              <span className="text-red-600 text-xs mt-2">
                Password is required
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-white"
            >
              Confirm password
            </label>
            <div className="">
              <input
                {...register("confirmPassword", {
                  required: true,
                })}
                type={confirmPassword ? "password" : "  text"}
                id="confirmPassword"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
                placeholder="•••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-[#C225B4] hover:bg-[#C225B4] focus:ring-4 focus:outline-none focus:ring-[#C225B4] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#C225B4] dark:hover:bg-[#C225B4] dark:focus:ring-[#C225B4]"
          >
            Submit
          </button>
        </form>
        <div className="absolute top-80 flex flex-col gap- py-14 md:top-60 md:px-24 md:py-16 right-0 px-14 lg:right-60 ">
          <div className="relative">
            <button
              className=" dark:text-white absolute top-0"
              onClick={() => setReviewPassword(!reviewPassword)}
            >
              {reviewPassword ? <EyeOff /> : <Eye />}
            </button>
            <button
              className=" dark:text-white absolute top-24 "
              onClick={() => setConfirmPassword(!confirmPassword)}
            >
              {confirmPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
