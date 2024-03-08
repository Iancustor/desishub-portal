import React from "react";
import Toggle from "./Toggle";

function Active() {
  return (
    <div className=" flex items-center justify-center">
      <span className=" flex gap-1  dark:shadow-stone-50 shadow-black  shadow-md  rounded-full py-2 px-3 ">
        <Toggle />
      </span>
    </div>
  );
}

export default Active;
