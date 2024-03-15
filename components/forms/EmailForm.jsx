"use client";
import React from "react";
import { useForm } from "react-hook-form";

function EmailForm({ updateStep, updateprevious }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    // console.log(data);
    updateStep("userType");
    reset();
  }
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <p>Step 2/5</p>
          <h1>Type in Your Email</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Enter your Email</h2>
          <input
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
            type="email"
            id="email"
            placeholder="myemail@gmail.com"
            className=" bg-transparent border-green-600 border-2 rounded-md px-3 py-1 w-[400px] focus:border-green-600"
          />
          {errors.mail && (
            <p className="text-red-600 text-xs mt-2" role="alert">
              {errors.mail.message}
            </p>
          )}
        </div>
        <div className="flex gap-6 items-center justify-end">
          <button
            onClick={() => updateprevious("name")}
            className="bg-green-600 rounded-2xl px-6 py-1"
          >
            Previous
          </button>
          <button className="bg-green-600 rounded-2xl px-6 py-1">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailForm;
