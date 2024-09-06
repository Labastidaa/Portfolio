import Contact from "@/components/contact-icons";
import PageTransitionProvider from "@/components/page-transition-provider";
import ItemTransition from "@/components/item-transition";
import ProjectCard from "@/components/ui/project-card";

export default function Home() {
  const Projects = [
    {
      link: "https://www.glvz-ds.com/",
      title: "Design system & Storybook UI Library",
      image: "/ds-ui-lib.png",
      descriptions: [
        "Design system for consistency across teams and products with reusable styles and tokens",
        "Storybook Reusable UI Component Library",
        "Figma UI/UX design and visual collaboration",
        "Fetching REST CoinMarketCap",
        "UI, Unit and Integration Testing",
      ],
      tags: [
        "TypeScript",
        "React.js",
        "Storybook",
        "Vitest",
        "Playwright",
        "Vite.js",
      ],
    },
    {
      link: "https://github.com/Labastidaa/webserver-golang",
      title: "Go Web Server",
      image: "/gowebserver.png",
      descriptions: [
        "A Golang HTTP Web Server",
        "Network Request to CoinMarketCap API",
        "Cryptocurrencies Data",
        "CI/CD using Docker containers and Render",
        "Github Actions automation workflows",
      ],
      tags: ["Golang", "Go Mock", "Testing", "Vitest"],
    },
  ];

  return (
    <PageTransitionProvider>
      <main className="flex w-full flex-col items-start sm:items-center justify-start sm:justify-center">
        <div className="w-full flex-shrink-0">
          <div className="py-[100px] flex flex-col justify-center">
            <div className="flex flex-col gap-4 items-center py-[50px]">
              <ItemTransition delay={0.5} className="">
                <h1 className="text-4xl sm:text-6xl text-[#eeeeee] p-[16px] sm:p-[24px] font-bold inline-block">
                  geolavz
                </h1>
              </ItemTransition>
              <div className="flex space-x-4 items-center">
                <p className="text-xl sm:text-2xl">🇲🇽</p>
                <h2 className="textl-xl sm:text-2xl text-white/80 text- font-semibold">
                  Software Developer
                </h2>
              </div>
              <div className="flex text-base sm:text-lg flex-col justify-center items-center">
                <h3 className="font-semibold text-center sm:text-start">
                  Building semantic, accessible and user-centric Web Apps
                </h3>
                <h3 className="font-semibold">UI/UX</h3>
              </div>
              <div className="flex gap-8 p-[24px] items-center content-center">
                <div className="flex items-center font-semibold px-4 bg-white/90 text-black h-[32px]">
                  <h3>TypeScript</h3>
                </div>
                <div className="flex items-center px-4 font-semibold bg-white/90 text-black h-[32px]">
                  <h3>Go</h3>
                </div>
              </div>
              <Contact />
            </div>
          </div>

          <div className="py-[50px] flex gap-4 flex-col">
            <h3 className="text-lg sm:text-xl font-bold">ABOUT</h3>
            <div className="flex text-base sm:text-xl flex-col gap-4">
              <p className="text-white/60 font-semibold">
                I started
                <span className="px-1 highlight-component text-[#38cff5]">
                  coding
                </span>
                for fun as a kid with video games in my computer writing small
                scripts and playing around with configurations, without
                realizing what I was doing. Eventually I went to college and
                learned solid computer science foundations, software
                development, hardware, logic and math.
              </p>
              <p className=" text-white/60 font-semibold">
                Passionate about technology, AI, blockchain and nature.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full items-start h-auto py-[50px] space-y-5">
            <h3 className="text-lg sm:text-xl font-bold">PROJECTS</h3>
            {Projects.map((project, index) => (
              <ProjectCard
                key={index}
                link={project.link}
                title={project.title}
                image={project.image}
                descriptions={project.descriptions}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </PageTransitionProvider>
  );
}
