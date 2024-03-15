"use client";
import CourseForm from "@/components/forms/CourseForm";
import EmailForm from "@/components/forms/EmailForm";
import NameForm from "@/components/forms/NameForm";
import UserForm from "@/components/forms/UserForm";
import YearForm from "@/components/forms/YearForm";
import {
  BookOpenCheck,
  CalendarDays,
  Mail,
  User,
  UsersRound,
} from "lucide-react";
import React, { useState } from "react";

function page() {
  const [nextStep, setNextStep] = useState("name");
  const [data, setData] = useState("");
  function updateStep(step) {
    setNextStep(step);
  }
  function updateprevious(step) {
    setNextStep(step);
  }
 

  return (
    <div className=" flex flex-col gap-10 px-4  lg:px-48">
      <div>
        <h2 className="text-xl">Desishub Codding School</h2>
        <p className="text-sm">Follow the simple steps to register</p>
      </div>
      <div className="flex gap-20 ">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center ">
              <div>
                <h2 className="font-bold">Your Name</h2>
                <p>Browse and upload</p>
              </div>
              <span
                className={`w-8 h-8 px-2 flex justify-center items-center ${
                  nextStep == "name" ? "bg-green-500" : " bg-slate-400"
                } rounded-full`}
              >
                <User />
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <h2 className="font-bold">Email</h2>
                <p>Browse and upload</p>
              </div>
              <span
                className={`w-8 h-8 px-2 flex justify-center items-center ${
                  nextStep == "email" ? "bg-green-500" : " bg-slate-400"
                } rounded-full`}
              >
                <Mail />
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <h2 className="font-bold">User Type</h2>
                <p>Browse and upload</p>
              </div>
              <span
                className={`w-8 h-8 px-2 flex justify-center items-center ${
                  nextStep == "userType" ? "bg-green-500" : " bg-slate-400"
                } rounded-full`}
              >
                <UsersRound />
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <h2 className="font-bold">Year</h2>
                <p>Browse and upload</p>
              </div>
              <span
                className={`w-8 h-8 px-2 flex justify-center items-center ${
                  nextStep == "year" ? "bg-green-500" : " bg-slate-400"
                } rounded-full`}
              >
                <CalendarDays />
              </span>
            </div>
            <div className="flex gap-3 items-center ">
              <div>
                <h2 className="font-bold">Course</h2>
                <p>Browse and upload</p>
              </div>
              <span
                className={`w-8 h-8 px-2 flex justify-center items-center ${
                  nextStep == "courses" ? "bg-green-500" : " bg-slate-400"
                } rounded-full`}
              >
                <BookOpenCheck />
              </span>
            </div>
          </div>
        </div>
        {nextStep === "name" ? (
          <NameForm updateStep={updateStep} collectData={data} />
        ) : nextStep === "email" ? (
          <EmailForm
            updateStep={updateStep}
            updateprevious={updateprevious}
            collectData={data}
          />
        ) : nextStep === "userType" ? (
          <UserForm
            updateStep={updateStep}
            updateprevious={updateprevious}
            collectData={data}
          />
        ) : nextStep === "year" ? (
          <YearForm updateStep={updateStep} updateprevious={updateprevious} />
        ) : (
          <CourseForm updateStep={updateStep} updateprevious={updateprevious} />
        )}
      </div>
    </div>
  );
}

export default page;
