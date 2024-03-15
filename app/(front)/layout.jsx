import Active from "@/components/Front/Active";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <body className="py-9 px-4 min-h-screen dark:bg-gradient-to-t from-indigo-950  to-black bg-indigo-200">
      {children}
      <Active />
    </body>
  );
}
