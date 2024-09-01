import Link from "next/link";
import Image from "next/image";
import React from "react";
import ItemTransition from "../item-transition";
import { Badge } from "./badge";
import { ChevronRight } from "lucide-react";

interface CardProps {
  link: string;
  title: string;
  image: string;
  descriptions: string[];
  tags: string[];
}

const ProjectCard: React.FC<CardProps> = ({
  link,
  title,
  image,
  descriptions,
  tags,
}) => {
  return (
    <div className="border-[3px] w-full flex flex-col border-[#30A8DC]">
      <div className="flex h-[40px] items-center pl-[24px] border-b-[3px] border-[#30A8DC] bg-[#001424]">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col lg:flex-row w-full h-fit">
        <div className="aspect-video w-full lg:w-[800px] xl:w-[900px] relative overflow-clip">
          <Image src={image} fill alt="alt-text" />
        </div>
        <div className="flex flex-col w-full p-[24px]">
          <div className="bg-black w-full h-full flex flex-col gap-[16px]">
            <div className="space-x-2 space-y-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant={"white"} className="font-semibold">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col">
              <ul className="">
                {descriptions.map((description, index) => (
                  <li key={index} className="list-disc list-inside">
                    <span className=" text-white/60 font-semibold">
                      {description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="hover:text-blue-500">
            <Link href={link} className="flex justify-end h-[32px]">
              <ChevronRight size={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;