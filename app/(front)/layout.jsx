import Active from "@/components/Active";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <body className="py-6 px-4 dark:bg-stone-950 bg-stone-50">
      <div className="flex items-center justify-center flex-col">
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
          DesisHub Codding School
        </h2>
      </div>
      {children}
      <Active />
    </body>
  );
}
