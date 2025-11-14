import LandingFooter from "@/components/Footer/LandingFooter";
import { HaloHero } from "@/components/Halo.tsx";
import NeuralNetwork from "@/components/neural-network-hero.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { IconArrowRightDashed, IconChevronUp, IconDrone } from "@tabler/icons-react";
import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, MoveRight, PlusIcon } from "lucide-react";

import LandingHeader from "../components/Header/LandingHeader.jsx";
import "../lib/blockimage.js";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});
const services = [
  {
    title: "Jathedar",
    type: "Web app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
    url: "https://jathedar.vercel.app?ref=akaalforge.vercel.app",
  },
  {
    title: "Shastarkosh",
    type: "Web app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
    url: "https://shastarkosh.vercel.app?ref=akaalforge.vercel.app",
  },
  {
    title: "Mistwrite",
    type: "Web app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
    url: "https://mistwrite.vercel.app?ref=akaalforge.vercel.app",
  },
  {
    title: "Essentia",
    type: "Web app",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
    url: "https://essentia.vercel.app?ref=akaalforge.vercel.app",
  },
  // {
  //   title: "Modified CR Box",
  //   type: "Hardware Project",
  //   image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
  //   url: "/app/resources?category=heritage",
  // },
];

function RouteComponent() {
  return (
    <>
      <LandingHeader />
      {/* <HeroRed /> */}
      <HaloHero />
      {/* <NeuralNetwork /> */}

      <main className="px-12 py-12">
        <section id="why-akaalforge" className="">
          <div className="  container">
            <div className="grid gap-9 lg:grid-cols-2">
              <div className="flex flex-col items-between   gap-5">
                <Badge variant="outline" className="bg-background gap-1.5">
                  <span className="size-1.5 mt-0.5 rounded-full bg-primary" />
                  Philosophy
                </Badge>
                <h1 className="text-balance text-4xl font-medium lg:text-5xl capitalize">One ideology: Build what needs to exist_</h1>
                <p className="text-muted-foreground text-lg">We're not here to chase trends or build another SaaS clone. Akaalforge is an umbrella for projects born from real needs — self-tracking that works, preserving knowledge that's fading, and productivity tools that don't get in your way.</p>
                <div className="flex items-center gap-6">
                  {/* <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/GDPR.svg" alt="GDPR" className="h-22 opacity-50 grayscale md:h-28 dark:invert" />
                  <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/CCPA.svg" alt="ISO-27001" className="h-22 opacity-60 grayscale md:h-28 dark:invert" /> */}
                </div>
              </div>
              <div className="border-border bg-background rounded-2xl border">
                <div className="border-border relative overflow-hidden border-b p-6 lg:px-8 lg:py-11">
                  <div>
                    <h2 className="text-xl font-medium lg:text-2xl capitalize">Born from Need</h2>
                    <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">Every project under Akaalforge started with a problem I faced myself. Did market research, and built what needed to exist because nobody else was doing it right.</p>
                    <Button asChild className="mt-4 flex items-center justify-center " variant="outline">
                      <a href="/about#philosophy">
                        Read our philosophy <IconArrowRightDashed className="inline-flex" />
                      </a>
                    </Button>
                  </div>
                  {/* <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg" alt="ISO-27001" className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert" /> */}
                </div>
                <div className="relative overflow-hidden p-6 lg:px-8 lg:py-11">
                  <div>
                    <h2 className="text-xl font-medium lg:text-2xl capitalize">Feature packing approach</h2>
                    <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">We're a small operation with big ambitions. Some projects are rough around the edges. Some are still evolving. But they're real, they work, and they solve actual problems. That's what matters.</p>
                    <Button asChild className="mt-4 flex items-center justify-center " variant="outline">
                      <a href="/about#process">
                        See our process <IconArrowRightDashed className="inline-flex" />
                      </a>
                    </Button>
                  </div>
                  {/* <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27017.svg" alt="ISO-27001" className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert" /> */}
                </div>
                <div className="border-border relative overflow-hidden border-t p-6 lg:px-8 lg:py-11">
                  <div>
                    <h2 className="text-xl font-medium lg:text-2xl capitalize">Bird eye Genetics</h2>
                    <p className="text-muted-foreground mt-2 w-3/4 pr-10 text-sm md:text-base">Each app exists because it solves something specific: tracking your life without corporate surveillance, preserving history before it's lost, capturing thoughts without friction, planning meals that make sense.</p>
                    <Button asChild className="mt-4 flex items-center justify-center " variant="outline">
                      <a href="#showcase">
                        Explore the projects <IconArrowRightDashed className="inline-flex" />
                      </a>
                    </Button>
                  </div>
                  {/* <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27018.svg" alt="ISO-27001" className="text-muted-foreground absolute -bottom-7 right-4 size-24 opacity-80 grayscale lg:right-8 lg:size-32 dark:invert" /> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="py-12">
          <div className="container grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="flex flex-col justify-between lg:col-span-1">
            <section id="impact" className="py-20 mb-10">
          <div className="container flex flex-col items-center text-left">
            <h2 className="mb-12 md:mb-16 text-center w-full text-pretty text-3xl sm:text-4xl lg:text-6xl">Project Status_</h2>
            <div className="grid w-full grid-cols-2 gap-12 sm:w-fit sm:grid-cols-2 lg:gap-16">
              <div className="w-full flex flex-col items-center">
                <div className="mb-2 text-4xl text-center font-semibold sm:text-4xl lg:text-5xl">4</div>
                <div className="font-thin text-center text-accent-foreground/60 text-base leading-6 lg:text-lg">Projects Live</div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="mb-2 text-4xl text-center font-semibold sm:text-4xl lg:text-5xl">1</div>
                <div className="font-thin text-center text-accent-foreground/60 text-base leading-6 lg:text-lg">Under Active Development</div>
              </div>  
              {/* <div className="w-full flex flex-col items-center">
                <div className="mb-2 text-4xl text-center font-semibold sm:text-4xl lg:text-5xl">2</div>
                <div className="font-thin text-center text-accent-foreground/60 text-base leading-6 lg:text-lg">Scheduled Amendment</div>
              </div> */}
              <div className="w-full flex flex-col items-center">
                <div className="mb-2 text-4xl text-center font-semibold sm:text-4xl lg:text-5xl">100%</div>
                <div className="font-thin text-center text-accent-foreground/60 text-base leading-6 lg:text-lg">Open Source</div>
              </div>
              <div className="w-full flex flex-col items-center">
                <div className="mb-2 text-4xl text-center font-semibold sm:text-4xl lg:text-5xl">∞</div>
                <div className="font-thin text-center text-accent-foreground/60 text-base leading-6 lg:text-lg">More to Come</div>
              </div>
            </div>
          </div>
        </section>  {/* <div>
                <h2 className="text-foreground mb-4 text-4xl font-medium md:text-6xl">Projects</h2>
                <p className="text-muted-foreground w-72 text-base tracking-tight">Just solutions. </p>
                
              </div> */}
      
              {/* <Button variant="outline" className="mt-8 w-fit">
                View all services <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button> */}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
              {/* Featured Services - First 2 */}
              {services.slice(0, 2).map((service, idx) => (
                <motion.a key={idx} href={service.url} whileHover={{ opacity: 0.8 }} className="group block overflow-hidden rounded-xl">
                  <Card className="relative aspect-3/4 overflow-hidden p-0">
                    {/* <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" /> */}
                    <div className="absolute inset-0 h-full w-full   flex items-center justify-center ">
                      <IconDrone className=" hover:text-lime-100 h-64 w-64 object-cover text-primary " stroke={0.5} />
                    </div>
                    <CardContent className="absolute inset-0 flex flex-col justify-start p-6">
                      <div className="pr-4 mb-1 font-semibold text-white">{service.title}</div>
                      {/* <Badge variant="outline">{service.type}</Badge> */}
                    </CardContent>
                    <ArrowUpRight className="absolute right-6 top-6 h-6 w-6 text-white transition-transform group-hover:scale-110" />
                  </Card>
                </motion.a>
              ))}

              {/* Secondary Services - Remaining 3 */}
              <div className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3">
                {services.slice(2).map((service, idx) => (
                  <motion.a key={idx + 2} href={service.url} whileHover={{ opacity: 0.8 }} className="group block overflow-hidden rounded-xl">
                    <Card className="relative aspect-[4/3] overflow-hidden p-0">
                      {/* <img src={service.image} alt={service.title} className="absolute inset-0 h-full w-full object-cover" /> */}
                      <div className="absolute inset-0 h-full w-full   flex items-center justify-center ">
                        <IconDrone className=" hover:text-lime-100 h-24 w-24 object-cover text-primary " stroke={0.5} />
                      </div>

                      <CardContent className="absolute inset-0 flex flex-col justify-start p-4">
                        <div className="pr-4 mb-1 text-sm font-semibold text-white">{service.title}</div>
                        {/* <Badge variant="outline">{service.type}</Badge> */}
                      </CardContent>
                      <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-white transition-transform group-hover:scale-110" />
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </section>

        
        <div className="relative        mx-auto flex w-full   flex-col justify-between gap-y-6 border-y bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)] px-4 py-12 ">
          <PlusIcon className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6" strokeWidth={1} />
          <PlusIcon className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6" strokeWidth={1} />

          <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l" />
          <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r" />

          <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

          <div className="w-full    ">
            <div className="container mx-auto">
              <div className="flex flex-col text-center   rounded-md p-4 lg:p-14 gap-8 items-center">
                <div>
                  <Badge>Get started</Badge>
                </div>
                <div className="flex flex-col gap-8">
                  <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">Ready to explore?</h3>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground/80 max-w-xl">Check out our projects. Try what resonates. Break what doesn't work. We're building in public, learning as we go, and shipping tools that matter. No corporate speak, no empty promises—just real software for real problems.</p>
                </div>
                <div className="flex flex-row gap-4">
                  <Button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex justify-center items-center" variant="outline">
                    Move to top <IconChevronUp className="w-4 h-4" />
                  </Button>
                  <Link to="/contact">
                    {" "}
                    <Button className="flex justify-center items-center ">
                      Contact <MoveRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
