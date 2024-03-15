import React from "react";
import {
  Aperture,
  ArrowDownToLineIcon,
  FolderDown,
  History,
  Trash2Icon,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function SidebarLinks() {
  const sidebarLinks = [
    {
      name: "Courses",
      icon: ArrowDownToLineIcon,
      href: "/fimport",
    },
    {
      name: "Challenges",
      icon: History,
      href: "/frequent",
    },

    {
      name: "Projects",
      icon: Aperture,
      href: "/others",
    },
    {
      name: "Others",
      icon: Users,
      href: "/users",
    },
    {
      name: "Profile",
      icon: FolderDown,
      href: "/others",
    },
  ];
  return (
    <div className="flex gap-4  py-5 items-center justify-center flex-col px-8 ">
      <div className="flex items-center justify-center flex-col">
        <h2 className="bg-black dark:bg-green-500 dark:text-stone-100 text-stone-100 py-2 px-4 rounded-md">
          DashBoard
        </h2>
      </div>
      {/* Other Links */}
      <div className="flex flex-col items-center justify-between gap-16">
        <div className="flex flex-col gap-6">
          {sidebarLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <Link
                key={i}
                className="mt-3 gap-5 py-2  px-8 rounded text-stone-950 dark:text-stone-100 hover:bg-green-500  hover:text-slate-50  inline-flex"
                href={item.href}
              >
                {/* <Users /> */}
                <Icon className="text-green-50 " />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <button
          className="bg-black dark:bg-green-500 dark:text-stone-100 text-stone-100 py-2 w-28 px-4 rounded-md"
          href=""
        >
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarLinks;
