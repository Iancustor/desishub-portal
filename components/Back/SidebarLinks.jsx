import React from "react";
import {
  ArrowDownToLineIcon,
  FolderDown,
  History,
  Plus,
  Trash2Icon,
  Users,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function SidebarLinks() {
  const sidebarLinks = [
    {
      name: "Contacts",
      icon: Users,
      href: "/users",
    },
    {
      name: "Frequent",
      icon: History,
      href: "/frequent",
    },
    {
      name: "Other ",
      icon: FolderDown,
      href: "/others",
    },
    {
      name: "Import",
      icon: ArrowDownToLineIcon,
      href: "/fimport",
    },
    {
      name: "Trash",
      icon: Trash2Icon,
      href: "/trash",
    },
  ];
  return (
    <div className="flex gap-4  py-5 items-center justify-center flex-col px-8 ">
      <div className="flex items-center justify-center flex-col">
        <h2 className="bg-black dark:bg-[#c225b4] dark:text-stone-100 text-stone-100 py-2 px-4 rounded-md">
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
                className="mt-3 gap-5  px-8 rounded text-stone-950 dark:text-stone-100 hover:bg-[#c225b4]  hover:text-slate-50  inline-flex"
                href={item.href}
              >
                {/* <Users /> */}
                <Icon className="text-[#c225b4]" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        <button
          className="bg-black dark:bg-[#c225b4] dark:text-stone-100 text-stone-100 py-2 w-28 px-4 rounded-md"
          href=""
        >
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default SidebarLinks;
