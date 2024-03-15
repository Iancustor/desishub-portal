import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function CourseForm({ updateStep }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { error },
  } = useForm();
  function onSubmit(data) {
    reset();
    // console.log(data);
    toast.success("User Registered Successfully !");
    router.push("/dashboard");
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <p>Step 5/5</p>
          <h1>select Your Course</h1>
        </div>
        <div className="flex flex-col gap-2">
          <h2>Select Course </h2>
          <select
            {...register("courses")}
            id="courses"
            className=" border-green-600 border-2 rounded-md px-3 py-1 w-[400px] focus:border-green-600"
          >
            <option selected>Website Design $ Development</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="Web Hosting">Web Hosting</option>
            <option value="Search Engine Optimisation">
              Search Engine Optimisation
            </option>
            <option value="Social Media Management">
              Social Media Management
            </option>
            <option value="Product Promo Videos">Product Promo Videos</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Web Hosting">Web Hosting</option>
            <option value="Career Development">Career Development</option>
          </select>
        </div>
        <div className="flex gap-6 items-center justify-end">
          <button
            onClick={() => updateStep("year")}
            className="bg-green-600 rounded-2xl px-6 py-1"
          >
            Prevoius
          </button>
          <button className="bg-green-600 rounded-2xl px-6 py-1">
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
