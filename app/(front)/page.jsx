import Login from "@/components/Front/Login";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex  items-center justify-center flex-col">
        <span className="text-purple-600">
          <Image
            src="/image/dcsLogo.webp"
            alt=""
            width={1080}
            height={1080}
            className=" rounded-r-2xl w-28 h-18"
          />
        </span>
        <h2 className="dark:text-stone-300 lg:text-2xl text-[#110720] font-bold">
          Desishub Coding School
        </h2>
      </div>
      <Login />
    </div>
  );
}

export default page;
