import React from "react";

function Onboard() {
  return (
    <div className="flex items-center justify-center py-16 px-8">
      <form className="w-full max-w-3xl p-4 bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dp0tf8poo/image/upload/v1709625547/formbg_iotuyg.jpg')] bg-blend-multiply border  rounded-lg shadow sm:p-6 md:p-8 bg-gray-800 dark:bg-gray-500 border-gray-700">
        <h5 className="text-xl mb-4 font-medium text-gray-900 dark:text-white">
          {" "}
          On Board
        </h5>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <div className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Year started
              </label>
              <select
                id="year"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select User Type
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              >
                <option value="student">Student</option>
                <option value="Intern">Intern</option>
              </select>
            </div>
          </div>
          <div>
            <label
              htmlFor="course"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Course
            </label>
            <select
              id="courses"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
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
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Whatsup number
            </label>
            <input
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
              placeholder="+256-7058-1644"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Onboard;
