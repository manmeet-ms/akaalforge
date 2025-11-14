import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { IconChevronDown } from "@tabler/icons-react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import HALO from "vanta/dist/vanta.halo.min";
import { Link } from "@tanstack/react-router";

gsap.registerPlugin(SplitText, useGSAP);
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
export const HaloHero = ({
  title = "Recover\ning lost cultures.",
  description = "Safeguarding the legacy",
  badgeText = "Umbrella Company",
  badgeLabel = "Est. 2025",
  ctaButtons = [
    { text: "Explore Projects", href: "#showcase", primary: true },
    { text: "Our Philosophy", href: "/about#philosophy" },
  ],
  microDetails = ["Hardware projects", "Software apps", "Built with purpose"],
}) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  const { width, height } = useWindowSize();
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<HTMLUListElement | null>(null);
  const microItem1Ref = useRef<HTMLLIElement | null>(null);
  const microItem2Ref = useRef<HTMLLIElement | null>(null);
  const microItem3Ref = useRef<HTMLLIElement | null>(null);

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        const split = new SplitText(headerRef.current!, {
          type: "lines",
          wordsClass: "lines",
        });

        gsap.set(split.lines, {
          filter: "blur(16px)",
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: "50% 100%",
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [microItem1Ref.current, microItem2Ref.current, microItem3Ref.current].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        tl.to(
          split.lines,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.15,
          },
          0.1
        );

        if (paraRef.current) {
          tl.to(paraRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55");
        }
        if (ctaRef.current) {
          tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
        }
        if (microItems.length > 0) {
          tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.25");
        }
      });
    },
    { scope: sectionRef }
  );
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 800.0,
          minWidth: 800.0,
          scale: 1.0,
          scaleMobile: 0.8,
          baseColor: 0x040b07,
          backgroundColor: 0x040b07,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <section ref={sectionRef} className="relative  h-screen   overflow-hidden">
      <div className="hidden" ref={vantaRef}   > </div>
      <div className="absolute inset-0 hue-rotate-160  saturate-30 brightness-50   ">
        {/* <Scene /> */}
      {/* <NeuralNetwork/> */}
       <video
          className="hero-video      object-cover z-0 "
          autoPlay
          muted
          loop
onClickCapture={()=>(console.log("clicked"))}
          playsInline
        >
          <source
            src="/assets/hero-red.mp4"
            type="video/mp4"
            
          />
        </video> 
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-8 sm:gap-8 md:pt-12 md:px-10 lg:px-16">
        <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
          {/* <span className="h-1 w-1 rounded-full bg-white/40" /> */}
          <span className="h-1.5 w-1.5 rounded-full bg-primary inline-flex items-center justify-center mt-0.5" />
          <span className="text-xs  uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
          {/* <span className="text-xs  tracking-tight text-white/80">{badgeText}</span> */}
        </div>

        <h1 ref={headerRef} className="uppercase  text-pretty text-background dark:text-foreground  text-6xl w-[70vw] font-mono font-medium md:-tracking-[8px] md:text-[8rem]   ">
          Step into\
 <br />          Akaalforge.
        </h1>

        {/* <p ref={paraRef} className="max-w-xl text-left text-base  leading-relaxed tracking-tight text-white/75 sm:text-lg">
          {description}
          </p> */}
 <div ref={ctaRef} className="flex flex-wrap items-center gap-3 ">
          {/* <Button>Get Started</Button> */}
          <Button className="flex gap-1 justify-center items-center" >View Showcase   </Button>
          <Button variant="ghost" className="flex gap-1 justify-center items-center" > <Link to="#why-akaalforge" >Scroll down <IconChevronDown className="inline-flex " /></Link>   </Button>
         
          
          {/* {ctaButtons.map((button, index) => (
            <a key={index} href={button.href} className={`rounded-2xl border border-white/10 px-5 py-3 text-sm  tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${button.primary ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" : "text-white/80 hover:bg-white/5"}`}>
              
            </a> 
          ))}*/}
        </div>
        {/* <div ref={ctaRef} className="flex flex-wrap items-center gap-3 ">
          
          {ctaButtons.map((button, index) => (
            <a key={index} href={button.href} className={`rounded-2xl border border-white/10 px-5 py-3 text-sm  tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${button.primary ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" : "text-white/80 hover:bg-white/5"}`}>
              {button.text}
            </a>
          ))}
        </div> */}

        <ul ref={microRef} className="mb-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60">
          {microDetails.map((detail, index) => {
            const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
            return (
              <li key={index} ref={refMap[index]} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
