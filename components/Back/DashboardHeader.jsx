import {
  ChevronDown,
  HelpCircle,
  HelpCircleIcon,
  Link,
  MenuIcon,
  Search,
  SearchIcon,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Toggle from "../Front/Toggle";

function DashboardHeader() {
  return (
    <div className="flex items-center justify-evenly dark:bg-gradient-to-t from-indigo-950  to-black bg-indigo-200 py-2 px-16">
      <span className="text-green-600">
        <Image
          src="https://res.cloudinary.com/dp0tf8poo/image/upload/v1710507102/logo.._e34vz7.png"
          alt=""
          width={1080}
          height={1080}
          className=" rounded-r-2xl w-24 h-14"
        />
      </span>
      <form class="flex items-center max-w-sm mx-auto">
        <label for="simple-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <input
            type="text"
            id="simple-search"
            class="bg-stone-950 border border-stone-900 text-stone-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full ps-10 px-2.5  py-2 dark:bg-stone-100 dark:border-stone-100 dark:placeholder-stone-950 dark:text-white dark:focus:ring-green-600 dark:focus:border-green-600"
            placeholder="Search ..."
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ms-2 text-sm  text-white bg-green-600 rounded-lg border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 dark:bg-green-600 dark:hover:bg-green-600 dark:focus:ring-green-600"
        >
          <Search className="h-4 w-6" />
          <span class="sr-only">Search</span>
        </button>
      </form>

      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <Image
            className="w-9 h-8 rounded-full"
            src="/image/user.jpg"
            alt="user Image"
            width={1080}
            height={1080}
          />
          <h2>Evelyn D</h2>
        </div>
        <span className=" flex gap-1  dark:shadow-stone-50 shadow-black  shadow-md  rounded-full  px-1 ">
          <Toggle />
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
