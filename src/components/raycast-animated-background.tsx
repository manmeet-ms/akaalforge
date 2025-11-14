import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef, useState } from "react";
import React from "react";
import UnicornScene from "unicornstudio-react";


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

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export const HeroRed = ({
  title = "Recover\ning lost cultures.",
  description = "Safeguarding the legacy",
  badgeText = "Generative Surfaces",
  badgeLabel = "New",
  ctaButtons = [
    { text: "Get started", href: "#get-started", primary: true },
    { text: "View showcase", href: "#showcase" },
  ],
  microDetails = ["Community‑driven", "AI‑powered insights", "Preserving history"],
}: HeroProps) => {
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

  return (
    <section ref={sectionRef} className="relative  h-screen   overflow-hidden">
      
      {/* Background with green tint overlay */}
      <div className="absolute inset-0 -z-10">
        {/* Apply filter directly to preserve animation while forcing green color */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            filter: 'hue-rotate(80deg) saturate(150%) brightness(1.3)',
          }}
        >
          <UnicornScene production={true} projectId="cbmTT38A0CcuYxeiyj5H" width={width} height={height} />
        </div>
        {/* Subtle green overlay to reinforce #B8E954 */}
        {/* <div className="absolute inset-0 bg-lime-400 mix-blend-color opacity-40" />
        <div className="absolute inset-0 bg-lime-400 mix-blend-hue opacity-60" /> */}
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-8 sm:gap-8 md:pt-12 md:px-10 lg:px-16">
        <div ref={badgeRef} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">{badgeLabel}</span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">{badgeText}</span>
        </div>

        <h1 ref={headerRef} className="uppercase text-background dark:text-foreground font-space-mono text-6xl w-[70vw] font-mono font-medium md:-tracking-[12px] md:text-[8rem]   ">
          Step into\ 
          <br />{" "}
          
            Akaalforge. 
          
          </h1>

        {/* <p ref={paraRef} className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg">
          {description}
        </p> */}

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 ">
          {ctaButtons.map((button, index) => (
            <a key={index} href={button.href} className={`rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-white/30 duration-300 ${button.primary ? "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20" : "text-white/80 hover:bg-white/5"}`}>
              {button.text}
            </a>
          ))}
        </div>

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
