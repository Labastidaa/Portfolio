import Link from "next/link";
import About from "@/components/about-dialog";
import Tech from "@/components/tech-dialog";
import Skeleton from "@/components/window-skeleton";
import Contact from "@/components/contact-icons";
import PageTransitionProvider from "@/components/page-transition-provider";
import ItemTransition from "@/components/item-transition";

export default function Home() {
  return (
    <PageTransitionProvider>
      <main className="bg-black flex min-h-screen w-full flex-col items-start sm:items-center justify-start sm:justify-center">
        <div className="bg-black w-full h-[100vh] 2xl:max-w-[1440px] p-3 md:p-10 flex-shrink-0">
          <div className="flex flex-col w-full h-full space-y-5">
            <div className="w-full h-2/5 space-y-5 lg:space-y-0 lg:space-x-5 flex flex-col lg:flex-row">
              <div className=" w-full lg:w-1/2 h-1/2 md:h-full max-h-[400px] rounded-[24px]">
                <About />
              </div>
              <div className="w-full lg:w-1/2 h-1/2 md:h-full max-h-[400px] rounded-[24px]">
                <Tech />
              </div>
            </div>
            <div className="bg-black w-full h-2/5 max-h-[400px] rounded-[24px] transition-all duration-700 bg-gradient-to-r from-[#0083AD] via-purple-400 p-[2px] to-blue-800 hover:shadow-[#0083AD]/70 hover:shadow-md">
              <Link
                href={"/portfolio"}
                className="bg-black w-full h-full flex flex-col lg:flex-row text-3xl sm:text-6xl font-bold text-white/70 transition-all duration-700 hover:text-white border-0 border-[#0083AD] hover:border-[#0da7d9] rounded-[24px]"
              >
                <ItemTransition delay={0.7}>
                  <h1 className="p-5 sm:p-10 sm:w-1/2">Portfolio</h1>
                </ItemTransition>
                <div className="w-full lg:w-2/3 flex flex-col justify-end items-center h-full rounded-[24px]">
                  <Skeleton />
                </div>
              </Link>
            </div>
            <div className=" w-full h-1/5 rounded-[24px]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransitionProvider>
  );
}
