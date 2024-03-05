import Active from "@/components/Active";

export default function Layout({ children }) {
  return (
    <body className="p-4 dark:bg-stone-950 bg-stone-400 ">
      {children}
      <Active />
    </body>
  );
}
