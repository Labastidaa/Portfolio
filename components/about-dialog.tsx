import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import HandWave from "@/components/hand-wave";
import ItemTransition from "./item-transition";
import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const About = () => {
  return (
    <div className="w-full h-full rounded-[24px]">
      <Dialog>
        <DialogTrigger className="bg-black w-full h-full focus:outline-none text-white/70 rounded-[24px] text-3xl sm:text-6xl font-bold border-2 border-[#0083AD] hover:border-[#0da7d9] hover:shadow-md transition-all duration-700 hover:shadow-[#0083AD]/70 flex items-start hover:text-white p-5 sm:p-10">
          <ItemTransition delay={0.3}>
            <HandWave />
            <span className="">About me</span>
          </ItemTransition>
        </DialogTrigger>
        <DialogContent className="py-14 md:p-20 no-scrollbar">
          <DialogHeader>
            <DialogDescription className="">
              <div>
                <h1
                  className="text-3xl sm:text-7xl bg-gradient-to-r from-blue-900 to-[#0083AD] bg-clip-text text-transparent
             font-bold inline-block pb-1"
                >
                  I&apos;m Geovanni
                </h1>
              </div>
              <p className="text-xl sm:text-5xl font-semibold pb-5">
                Web Developer
              </p>
              <p className="text-xl sm:text-3xl font-semibold pb-5">
                🇲🇽 Baja California Sur
              </p>

              <p className="text-base sm:text-2xl pb-5">
                My journey as a Developer started back in College but I
                continued learning and improving my skills as self-taught,
                reading docs and taking courses from Platzi, Fireship and more.
                Interested in technologies like Artificial Intelligence and
                Blockchain.
              </p>

              <p className="text-base sm:text-2xl">
                Besides coding I love the ocean, outdoors, gardening and music.
              </p>

              <p className="text-base sm:text-2xl">
                My mother language is Spanish but I can speak/read/write English
                fluently.
              </p>

              <p className="text-base sm:text-xl font-bold pt-5">
                Cambridge Certification B2.
              </p>

              <div className="flex pt-5">
                <Badge className="text-xl font-normal" variant={"outline"}>
                  geovannilavz@gmail.com
                </Badge>
              </div>
              <Link
                href={
                  "https://drive.google.com/file/d/1FYquBjvkD2ryqyuUmKafgjrUkJIIueqh/view?usp=drive_link"
                }
                className={cn(buttonVariants({ variant: "default" }), "mt-5")}
                target="_blank"
              >
                View my CV
              </Link>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
