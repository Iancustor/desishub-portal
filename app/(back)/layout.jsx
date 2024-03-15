import DashboardHeader from "@/components/Back/DashboardHeader";
import SidebarLinks from "@/components/Back/SidebarLinks";

export default function Layout({ children }) {
  return (
    <div>
      <DashboardHeader />
      <div className="flex dark:bg-gradient-to-t from-indigo-950  to-black bg-indigo-200">
        <div className="w-[18%] min-h-screen">
          <SidebarLinks />
        </div>
        <main className="w-[82%] px-7 flex flex-col  items-center justify-start py-8 m-h-screen bg-center bg-cover bg-no-repeat bg-[url('/image/wallpaper2.jpg')] bg-indigo-300 bg-blend-multiply">
          {" "}
          {children}
        </main>
      </div>
    </div>
  );
}
