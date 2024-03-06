import React from "react";

function Onboard() {
  return (
    <div className="flex items-center justify-center py-6 px-8">
      <form className="w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-stone-800  dark:bg-stone-700 border-stone-800">
        <h5 className="text-xl mb-4 font-medium text-stone-50 dark:text-white">
          {" "}
          On Board
        </h5>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-stone-50 dark:text-white"
              >
                Select Year started
              </label>
              <select
                id="year"
                className="bg-gray-50 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950  dark:placeholder-stone-950 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]  placeholder-stone-950"
              >
                <option value="">2024</option>
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
                <option value="">2020</option>
                <option value="">2019</option>
                <option value="">2018</option>
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
                id="countries"
                className="bg-gray-50  text-stone-950 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950  dark:placeholder-stone-950 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]  placeholder-stone-950"
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
              id="courses"
              className="bg-gray-50   placeholder-stone-950 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950  dark:placeholder-stone-950 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
            >
              <option selected>Website Design $ Development</option>
              <option value="student">Graphic Design</option>
              <option value="Intern">Mobile App Development</option>
              <option value="student">Web Hosting</option>
              <option value="Intern">Search Engine Optimisation</option>
              <option value="student">Social Media Management</option>
              <option value="Intern">Product Promo Videos</option>
              <option value="Intern">Content Marketing</option>
              <option value="Intern">Web Hosting</option>
              <option value="Intern">Career Development</option>
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
              type="tel"
              id="phone"
              className="bg-gray-50  dark:text-stone-50 text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950  dark:placeholder-stone-50  placeholder-stone-950  dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
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
            type="email"
            id="email"
            className="bg-gray-50  placeholder-stone-950  text-sm rounded-lg focus:ring-[#C225B4] focus:border-[#C225B4] block w-full p-2.5 dark:bg-stone-950  dark:placeholder-stone-50 dark:text-white dark:focus:ring-[#C225B4] dark:focus:border-[#C225B4]"
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
