import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import PageTransitionProvider from "@/components/page-transition-provider";
import { VideoIcon } from "lucide-react";

const Portfolio = () => {
  return (
    <PageTransitionProvider>
      <div className="w-full h-auto flex justify-center items-center">
        <div className="md:p-10 w-[95%] md:w-[80%] max-w-[1440px] h-full ">
          <Link
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex top-10 w-[50px] m-5 h-[50px] left-10 rounded-full"
            )}
            href={"/"}
          >
            <FaArrowLeft className="w-[40px] h-[40px]" />
          </Link>

          <div className="w-full h-full bg-gradient-to-r from-[#0083AD] via-purple-400 to-blue-800 rounded-[24px] items-center flex flex-col p-[2px]">
            <div className="bg-black rounded-[24px] w-full h-full flex flex-col p-5 md:p-10 space-y-5 items-between justify-between">
              <div className="relative w-full h-[300px] md:h-[250px] lg:h-[630px]">
                <Image
                  src={"/ss.png"}
                  alt="Project-image"
                  style={{ objectFit: "cover" }}
                  fill
                  placeholder="blur"
                />
              </div>
              <div className="space-y-2 text-white/70">
                <h3 className="text-xl md:text-5xl font-bold">
                  Gardening e-Commerce + Admin Dashboard
                </h3>
                <p>
                  This project includes a Stripe Checkout please use this test
                  card:
                </p>
                <Badge variant={"outline"}>4242424242424242</Badge>
              </div>
              <div className="space-y-5">
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://vimeo.com/manage/videos/898797134"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <VideoIcon className="w-[30px] h-[30px]" />
                  <span>Demo Video</span>
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://store-gardening.vercel.app/"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TbWorld className="w-[30px] h-[30px]" />
                  <span>Live Website</span>
                </Link>
                <Link
                  className={cn(
                    buttonVariants({ variant: "secondary" }),
                    "flex top-10 w-full space-x-5 h-[50px] left-10 rounded-[20px]"
                  )}
                  href={"https://github.com/Labastidaa/store-gardening"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="w-[30px] h-[30px]" />
                  <span>View Github Repository</span>
                </Link>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-base md:text-2xl">
                    Desktop Store Preview
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full h-auto rounded-[24px] flex relative overflow-y-scroll">
                      <Image
                        src={"/ss-dark-home.png"}
                        alt=""
                        width={1440}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 500px)"
                        className="border"
                      />
                    </div>{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-base md:text-2xl">
                    Admin Product Dashboard Preview
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full h-auto rounded-[24px] flex relative overflow-y-scroll">
                      <Image
                        src={"/ss-products-dashboard.png"}
                        alt=""
                        width={1440}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 500px)"
                        className="border"
                      />
                    </div>{" "}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-base md:text-2xl">
                    Dashboard Product Update
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="w-full h-auto rounded-[24px] flex relative overflow-y-scroll">
                      <Image
                        src={"/update-product-admin.png"}
                        alt=""
                        width={1440}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 500px)"
                        className="border"
                      />
                    </div>{" "}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </PageTransitionProvider>
  );
};

export default Portfolio;
