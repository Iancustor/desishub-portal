import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function YearForm({ updateStep }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  function onSubmit(data) {
    // console.log(data);
    updateStep("course");
    reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <p>Step 4/5</p>
          <h1>select year of Start</h1>
        </div>
        <div className="flex flex-col gap-2 ">
          <h2>Select Year of Start </h2>
          <select
            id="year"
            {...register("year", { required: true })}
            className="bg-transparent  border-green-600 border-2 rounded-md px-3 py-1 w-[400px] focus:border-green-600"
          >
            <option value="2024" className="text-black">
              2024
            </option>
            <option value="2024" className="text-black">
              2023
            </option>
            <option value="2024" className="text-black">
              2022
            </option>
            <option value="2024" className="text-black">
              2021
            </option>
            <option value="2024" className="text-black">
              2020
            </option>
            <option value="2024" className="text-black">
              2019
            </option>
          </select>
          {errors.year && (
            <span className="text-red-600 text-xs mt-2">
              You Must Choose An Option
            </span>
          )}
        </div>
        <div className="flex gap-6 items-center justify-end">
          <button
            onClick={() => updateStep("userType")}
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

export default YearForm;
