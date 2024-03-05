import Login from "@/components/Login";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <span className="text-purple-600">
          <Image
            src="/image/logo.webp"
            alt=""
            width={1080}
            height={1080}
            className="bg-purple-600 rounded-r-xl w-8 h-8"
          />
        </span>
        <h2 className="dark:text-stone-300 lg:text-2xl  text-purple-700 font-bold">
          DesisHub Codding School
        </h2>
        <p className="dark:text-stone-300   text-purple-700 font-semibold">
          Leveraging Technology
        </p>
      </div>
      <Login />
    </div>
  );
}

export default page;
