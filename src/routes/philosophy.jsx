import { ArrowRight, Asterisk, CornerDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { createFileRoute } from '@tanstack/react-router';
import LandingHeader from "../components/Header/LandingHeader";
import LandingFooter from "../components/Footer/LandingFooter";

export const Route = createFileRoute('/philosophy')({
  component: RouteComponent,
})

const Illustration = (props) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.607422"
        y1="2.57422"
        x2="21.5762"
        y2="2.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
      <line
        x1="19.5762"
        y1="19.624"
        x2="19.5762"
        y2="4.57422"
        stroke="#FF0000"
        strokeWidth="4"
      />
    </svg>
  );
};

function RouteComponent({
  title = "ANCIENT",
  title2 = "WISDOM",
  year = "[EST. 2025]",
  category = "[DIGITAL PRESERVATION]",
  client = "[CULTURAL HERITAGE]",
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
  imageAlt = "Ancient Indian manuscripts and artifacts",
  overviewHeading = "OUR PHILOSOPHY",
  mainDescription = "SHASTARKOSH BRIDGES THE GAP BETWEEN ANCIENT INDIAN WISDOM AND MODERN TECHNOLOGY, PRESERVING MILLENNIA OF KNOWLEDGE FOR FUTURE GENERATIONS.",
  detailDescription = "Our mission is rooted in the belief that ancient knowledge holds timeless value. Through meticulous digitization and scholarly collaboration, we preserve Vedic texts, historical weapons, and cultural artifacts. Each resource is carefully documented with origin details, cultural context, and expert annotations. We combine traditional scholarship with cutting-edge technology to make this invaluable heritage accessible to researchers, students, and enthusiasts worldwide. Our platform serves as a bridge between past and present, ensuring that the wisdom of our ancestors continues to enlighten and inspire.",
  buttonText = "Explore Collection",
}) {
  
   const process = [
    {
      step: "01",
      title: "Source & Authenticate",
      description:
        "We carefully source ancient texts and artifacts from trusted institutions, private collections, and archaeological sites. Each item undergoes rigorous authentication by expert scholars to ensure historical accuracy and cultural significance.",
    },
    {
      step: "02",
      title: "Digitize & Document",
      description:
        "Using advanced imaging technology, we create high-resolution digital copies while preserving the original artifacts. Comprehensive metadata including origin, time period, cultural context, and scholarly annotations are meticulously documented.",
    },
    {
      step: "03",
      title: "Curate & Organize",
      description:
        "Resources are categorized by type, origin, time period, and cultural significance. We create cross-references between related texts and artifacts, building a comprehensive knowledge network that reveals connections across different periods and traditions.",
    },
    {
      step: "04",
      title: "Share & Collaborate",
      description:
        "We make the collection accessible to scholars, researchers, and enthusiasts worldwide through our digital platform. Community features enable collaborative research, discussions, and continuous enrichment of our collective understanding of ancient Indian heritage.",
    },
  ];

  return (
  <>
  <LandingHeader/>
<main className="px-6">
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

        <div className="relative">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-16 md:px-12 lg:px-24">
          <div>
            <h2 className="text-foreground mb-8 text-sm uppercase tracking-wider">
              {overviewHeading}
            </h2>
          </div>

          <div>
            <h2 className="text-foreground mb-8 text-xl font-light leading-relaxed md:text-2xl">
              {mainDescription}
            </h2>

            <p className="text-muted-foreground mb-12 text-base leading-relaxed">
              {detailDescription}
            </p>

            <div>
              <Button variant="outline">
                {buttonText}
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              {" "}
              <h1 className="w-fit">Our Process</h1>
              <Asterisk className="absolute -right-2 -top-2 size-5 text-orange-500 md:size-10 lg:-right-14" />
            </div>
            <p className="text-foreground/50 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              amet dolorem eum est voluptatem id repellendus ut laborum
              laboriosam debitis.
            </p>

            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
            >
              <CornerDownRight className="text-orange-500" />
              Get in touch
            </Button>
          </div>
          <ul className="lg:pl-22 relative col-span-4 w-full">
            {process.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t py-8 md:flex-row lg:py-10"
              >
                <Illustration className="absolute right-0 top-4" />

                <div className="bg-muted flex size-12 items-center justify-center px-4 py-1 tracking-tighter">
                  0{index + 1}
                </div>
                <div className="">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tighter lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-foreground/50">{step.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>


</main>
<LandingFooter/>

</>
    )
}
