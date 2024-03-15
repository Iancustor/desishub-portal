"use client";
import React from "react";
import { useForm } from "react-hook-form";

function NameForm({ updateStep, collectData }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // console.log(data);
    updateStep("email");
    collectData(data);
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <p>Step 1/5</p>
          <h1>Lets Start With Your Name</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Enter your Name</h2>
          <input
            {...register("name", {
              required: true,
              minLength: 4,
            })}
            type="name"
            id="name"
            placeholder="Tom Bekker"
            className=" bg-transparent border-green-600 border-2 rounded-md px-3 py-1 w-[400px] focus:border-green-600"
          />

          {errors.name && (
            <span className="text-red-600 text-xs mt-2">
              First Name is required first
            </span>
          )}
          {errors.name && errors.name.type === "minLength" && (
            <span className="text-red-600 text-xs">
              Name must exceed 4 characters
            </span>
          )}
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-green-600 rounded-2xl px-6 py-1">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default NameForm;
