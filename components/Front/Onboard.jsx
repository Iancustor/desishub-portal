"use client";
import { data } from "autoprefixer";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Onboard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleForm(data) {
    // console.log(data);
    reset();
    router.push("/dashboard");
    toast.success("Data submitted Successfully !");
  }

  return (
    <div className="flex items-center justify-center py-6 px-8">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-stone-800  dark:bg-stone-700 border-stone-800"
      >
        <h5 className="text-xl mb-4 font-medium text-stone-50 dark:text-white">
          {" "}
          On Board
        </h5>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div className="flex flex-col gap-2  bg-stone-950 p-4  rounded-md">
            <div className="flex items-center  gap-2">
              <Image
                className="w-12 h-12 bg-stone-200 text-stone-950  rounded-full"
                src=""
                width={1080}
                height={1080}
              />
              <h1>User Image</h1>
            </div>
            <input
              {...register("image")}
              type="file"
              className="mb-4 p-2 rounded-md"
            />
          </div>
          <div>
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
              >
                Select Year started
              </label>
              <select
                {...register("year")}
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
              </select>
            </div>
          </div>
          <div>
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
              >
                Select User Type
              </label>
              <select
                {...register("userType")}
                id="userType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-700  dark:text-gray-100 dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              >
                <option value="student">Student</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="course"
              className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
            >
              Course
            </label>
            <select
              {...register("courses")}
              id="courses"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-gray-100  dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
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
          <div>
            <label
              htmlFor="Whatsup"
              className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
            >
              Whatsup number
            </label>
            <input
              {...register("tel")}
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
              placeholder="+256-7058-1644"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
          >
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950 dark:border-stone-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-[#C225B4] hover:bg-[#C225B4] focus:ring-4 focus:outline-none focus:ring-[#C225B4] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#C225B4] dark:hover:bg-[#C225B4] dark:focus:ring-[#C225B4]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Onboard;
