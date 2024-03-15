import React from "react";
import { useForm } from "react-hook-form";

function UserForm({ updateStep, collectData }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { error },
  } = useForm();
  function onSubmit(data) {
    // console.log(data);
    updateStep("year");
    collectData(data);
    reset();
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <p>Step 3/5</p>
          <h1>Select Your user Type</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Enter User Type</h2>
          <select
            {...register("usertype")}
            id="usertype"
            className="bg-transparent  border-green-600 border-2 rounded-md px-3 py-1 w-[400px] focus:border-green-600"
          >
            <option value="student" className="text-black">
              Student
            </option>
            <option value="intern" className="text-black">
              Intern
            </option>
          </select>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <button
            onClick={() => updateStep("email")}
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

export default UserForm;
