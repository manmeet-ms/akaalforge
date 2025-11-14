import { Button } from "@/components/ui/button";
import { IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Asterisk, CornerDownRight } from "lucide-react";

import LandingFooter from "../components/Footer/LandingFooter";
import LandingHeader from "../components/Header/LandingHeader";
import CommunityBlock from "../components/CommunityBlock";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});
const defaultCompanies = [
  {
    src: "https://res.cloudinary.com/dckgfz6cr/image/upload/v1762343993/Akaalforge_yjglx6.png",
    alt: "Akaalforge",
  },
  {
    src: "https://res.cloudinary.com/dckgfz6cr/image/upload/v1762342996/jathedar_pwe5e7.png",
    alt: "Jathedar",
  },
  {
    src: "https://res.cloudinary.com/dckgfz6cr/image/upload/v1762343080/shastarkosh_qlog2a.png",
    alt: "Shastarkosh",
  },
  // {
  //   src: "https://res.cloudinary.com/dckgfz6cr/image/upload/v1762343079/mistwrite_y2pbjn.png",
  //   alt: "Mistwrite",
  // },
 
];

const defaultAchievements = [
  { label: "Live Projects", value: "4" },
  { label: "Lines of Code", value: "50K+" },
  { label: "Open Source", value: "100%" },
  { label: "VC Funding", value: "$0" },
];
const Illustration = (props) => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="0.607422" y1="2.57422" x2="21.5762" y2="2.57422" stroke="#FF0000" strokeWidth="4" />
      <line x1="19.5762" y1="19.624" x2="19.5762" y2="4.57422" stroke="#FF0000" strokeWidth="4" />
    </svg>
  );
};
function RouteComponent({
  title = "AKAALFORGE",
  description = "Akaalforge is an umbrella company for projects that solve real problems. No venture capital, no growth hacking, no bullshit. Just tools built from necessity, shipped with purpose.",
  mainImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "Ancient Indian manuscripts",
  },
  secondaryImage = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alt: "Historical artifacts",
  },
  breakout = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "Akaalforge logo",
    title: "Building What Needs to Exist",
    description: "Four projects, four solutions: self-tracking without surveillance, preserving history that's fading, capturing thoughts without friction, planning meals that make sense. Each one born from a real need, not a market opportunity.",
    buttonText: "Explore Collection",
    buttonUrl: "/app/resources",
  },
  companiesTitle = "Projects Under This Umbrella",
  companies = defaultCompanies,
  achievementsTitle = "What We've Built",
  achievementsDescription = "Four live projects, all open source, all solving real problems. No vanity metrics, just working software.",
  achievements = defaultAchievements,
  philoTitle = "AKAALFORGE",
  title2 = "PHILOSOPHY",
  year = "[EST. 2025]",
  category = "[DIGITAL PRESERVATION]",
  client = "[CULTURAL HERITAGE]",
  imageSrc = "https://images.mockupcloud.com/images/thumbs/images/2024/11/27/2222-1170x780.jpg",
  imageAlt = "Ancient Indian manuscripts and artifacts",
  overviewHeading = "THE PHILOSOPHY",
  mainDescription = "BUILD WHAT NEEDS TO EXIST. SHIP IT. ITERATE. REPEAT. NO PERMISSION NEEDED, NO INVESTORS TO PLEASE, NO TRENDS TO CHASE.",
  detailDescription = "Akaalforge started with a simple idea: stop waiting for someone else to build the tools you need. Every project here began with a problem I faced personally. Jathedar for self-tracking without corporate surveillance. Shastarkosh for preserving cultural knowledge before it's lost. Mistwrite for capturing fleeting thoughts. Essentia for meal planning that actually works. No market research, no focus groups, no pitch decks. Just gut feeling and execution. Some projects are polished, some are rough. All of them work. All of them solve real problems. That's the only metric that matters. We're not building a unicorn. We're building tools that should exist, releasing them into the world, and moving on to the next problem. If they help others along the way, that's a bonus.",
  buttonText = "Explore Collection",
}) {
  const process = [
    {
      step: "01",
      title: "Identify the Problem",
      description: "Every project starts with a real problem. Not a market opportunity, not a trend to chase. A genuine friction point that needs solving. If I'm frustrated by it, chances are others are too. That's the only validation we need.",
    },
    {
      step: "02",
      title: "Build Fast, Ship Faster",
      description: "No endless planning phases. No feature bloat. Build the core solution, make it work, ship it. Get it in people's hands quickly. Real usage beats theoretical perfection every time. Iterate based on actual feedback, not assumptions.",
    },
    {
      step: "03",
      title: "Open Source Everything",
      description: "All projects are open source. No paywalls, no artificial limitations. If someone wants to fork it, improve it, or learn from it—great. The goal is solving problems, not building moats. Transparency over competitive advantage.",
    },
    {
      step: "04",
      title: "Move to the Next Problem",
      description: "Once a project is live and stable, we move on. No endless feature additions. No pivot to monetization. The tool exists, it works, it's available. Time to solve the next problem. This isn't a business strategy—it's a philosophy of building.",
    },
  ];
  return (
    <>
      <LandingHeader />
      <section id="philosophy" className="pb-16 px-6">
        <div className="container">
          {/* <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div> */}
          <section className="py-8">
            <div className="container">
              <div className="py-12">
                <div>
                  <h1 className="text-foreground font-serif text-6xl font-light leading-none tracking-tight md:text-8xl lg:text-9xl">
                    {title}
                    {title2 && (
                      <>
                        <br />
                        {title2}
                      </>
                    )}
                  </h1>
                </div>

                <div className="text-muted-foreground mt-12 grid grid-cols-3 text-sm uppercase tracking-wider md:grid-cols-6">
                  <div>
                    <span className="block">YEAR</span>
                    <span className="text-foreground">{year}</span>
                  </div>
                  <div>
                    <span className="block">CATEGORY</span>
                    <span className="text-foreground">{category}</span>
                  </div>
                  <div className="ml-16">
                    <span className="block">CLIENT</span>
                    <span className="text-foreground">{client}</span>
                  </div>
                </div>
              </div>

              {/* <div className="relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div> */}
              <div className="grid gap-7 lg:grid-cols-3">
                <img src={imageSrc} alt={mainImage.alt} className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2" />
                <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
                  <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
                    <img src={breakout.src} alt={breakout.alt} className="mr-auto h-12 dark:invert" />
                    <div>
                      <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
                      <p className="text-muted-foreground">{breakout.description}</p>
                    </div>
                    <Button variant="outline" className="mr-auto" asChild>
                      <a href={breakout.buttonUrl} target="_blank">
                        {breakout.buttonText}
                      </a>
                    </Button>
                  </div>
                  <img src={imageSrc} alt={secondaryImage.alt} className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto" />
                </div>
              </div>
              <div className="mx-auto max-w-5xl px-6 py-16 md:px-12 lg:px-24">
                <div>
                  <h2 className="  font-medium text-primary mb-8 text-sm uppercase tracking-wider">{overviewHeading}</h2>
                </div>

                <div>
                  <h2 className="text-foreground mb-8 text-xl font-light leading-relaxed md:text-2xl">{mainDescription}</h2>

                  <p className="text-muted-foreground mb-12 text-base leading-relaxed">{detailDescription}</p>

                  <div>
                    {/* <Button variant="outline">
                      {buttonText}
                      <ArrowRight />
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="py-4">
            <p className="text-center">{companiesTitle} </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {companies.map((company, idx) => (
                <div className="flex items-center gap-3" key={company.src + idx}>
                  <img src={company.src} alt={company.alt} className="h-6 w-auto md:h-8 dark:invert p-1.5" />
                </div>
              ))}
            </div>
          </div>
       
        </div>
      </section>
  <section id="process" className="py-8 px-12">
        <div className="container">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
            <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
              <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
                {" "}
                <h1 className="w-fit">Our Process</h1>
                <Asterisk className="absolute -right-2 -top-2 size-5 text-orange-500 md:size-10 lg:-right-14" />
              </div>
              <p className="text-foreground/50 text-base">Four steps, repeated for every project. No deviation, no shortcuts. This is how we build: identify, execute, release, move on. Simple, effective, honest.</p>

              <Button asChild variant="ghost" className="flex items-center justify-start gap-2">
                <a href="/#showcase"><CornerDownRight className="text-orange-500" />
                See the projects</a>
              </Button>
            </div>
            <ul className="lg:pl-22 relative col-span-4 w-full">
              {process.map((step, index) => (
                <li key={index} className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10">
                  <Illustration className="absolute right-0 top-4" />

                  <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">0{index + 1}</div>
                  <div className="">
                    <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">{step.title}</h3>
                    <p className="text-foreground/50">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CommunityBlock/>
 

    

    
      <LandingFooter />
    </>
  );
}
