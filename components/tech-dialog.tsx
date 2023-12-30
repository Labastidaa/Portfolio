import React from "react";
import Image from "next/image";
import { LuCode2 } from "react-icons/lu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "./ui/separator";
import ItemTransition from "./item-transition";

const Tech = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className="bg-black w-full focus:outline-none h-full text-white/70 hover:shadow-[#0083AD]/70 hover:shadow-md hover:text-white rounded-[24px] border-2 border-[#0083AD] hover:border-[#0da7d9] text-3xl sm:text-6xl font-bold flex p-5 sm:p-10 transition-all duration-700">
          <ItemTransition delay={0.5}>Tech Stack {`</>`}</ItemTransition>
        </DialogTrigger>
        <DialogContent className="no-scrollbar">
          <DialogHeader className="py-10 md:pt-10 md:pb-0 md:px-10">
            <div className="w-full">
              <h1
                className="text-3xl p-2 sm:text-7xl bg-gradient-to-r from-blue-900 to-[#0083AD] bg-clip-text text-transparent
             font-bold inline-block"
              >
                Technologies
              </h1>
            </div>

            <div className="w-full text-base sm:text-xl">
              <div className="space-x-2 space-y-2">
                <Badge>TypeScript</Badge>
                <Badge>Next.js</Badge>
                <Badge>React.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Express.js</Badge>
                <Badge>MySQL</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>Tailwind</Badge>
                <Badge>TanStack Query</Badge>
                <Badge>TanStack Table</Badge>
                <Badge>Jest Unit Testing</Badge>
                <Badge>Playwright E2E</Badge>
                <Badge>Prisma</Badge>
                <Badge>ESLint</Badge>
                <Badge>RESTful APIs</Badge>
                <Badge>Axios</Badge>
                <Badge>Clerk</Badge>
                <Badge>NextAuth</Badge>
              </div>

              <Separator className="my-5" />
              <div className="space-x-2 space-y-2">
                <Badge>Serverless</Badge>
                <Badge>MVC</Badge>
                <Badge>Clean Architecture</Badge>
                <Badge>Microservices (learning)</Badge>
                <Badge>Peer-to-Peer (learning)</Badge>
              </div>
            </div>
          </DialogHeader>
          <div className="hidden w-full h-auto space-y-5 md:flex flex-col py-10">
            <div className="space-x-1 md:space-x-5 justify-center items-center pl-0 flex">
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/typescript.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/react.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/nextdotjs.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/mysql.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/nodedotjs.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
              <div className="relative w-16 h-16 md:w-24 md:h-24 ">
                <span>
                  <Image
                    src={"/tech-logos/express.svg"}
                    alt=""
                    fill
                    className="rounded-[24px]"
                  />
                </span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Tech;
