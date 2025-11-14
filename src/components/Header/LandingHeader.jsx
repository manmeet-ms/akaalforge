"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";

import { APP_NAME } from "../../../shared/constants.js";
import { ModeToggle } from "../../components/mode-toggle.jsx";

const LandingHeader = () => {
  const features = [
    {
      title: "AI Assistant",
      description: "Get help from our AI",
      href: "/app",
    },
    {
      title: "Community",
      description: "Join public discussions",
      href: "/app/posts",
    },
  ];
const pathname=useLocation().pathname

  return (
    <section className="sticky  top-0 z-99">
      <nav className="bg-background/80 dark:bg-background/20   px-4 backdrop-blur-xl  py-2 flex  items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/assets/transparent-shastarkosh-logo-dark.png" className="max-h-8" alt="Shadcn UI Navbar" />
          <span className="text-lg font-semibold -ml-1.5 tracking-tighter">{APP_NAME}</span>
        </a>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/" className={navigationMenuTriggerStyle()}>
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about" className={navigationMenuTriggerStyle()}>
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog" className={navigationMenuTriggerStyle()}>
                Blog
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/roadmap" className={navigationMenuTriggerStyle()}>
                Roadmap
              </Link>
              <Link to="/community" className={navigationMenuTriggerStyle()}>
                Community
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="hidden items-center gap-4 lg:flex">
          {pathname !== "/contact" && <Link to="/contact" className="font-medium">
            <Button>Contact</Button>
          </Link>}
          <ModeToggle />
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="max-h-screen overflow-auto">
            <SheetHeader>
              <SheetTitle>
                <Link to="/" className="flex items-center gap-2">
                  <img src="/assets/transparent-shastarkosh-logo-dark.png" className="max-h-8" alt="shastakosh Logo" />
                  <span className="text-lg font-semibold tracking-tighter">{APP_NAME}</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col p-4">
              <Accordion type="single" collapsible className="mt-4 mb-2">
                <AccordionItem value="explore" className="border-none">
                  <AccordionTrigger className="text-base hover:no-underline">Explore</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-1">
                      {features.map((feature, index) => (
                        <Link to={feature.href} key={index} className="rounded-md p-3 transition-colors hover:bg-muted/70">
                          <div key={feature.title}>
                            <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex flex-col gap-6">
                <Link to="/about" className="font-medium">
                  About
                </Link>
                <Link to="/roadmap" className="font-medium">
                  Roadmap
                </Link>{" "}
                <Link to="/changelog" className="font-medium">
                  Changelog
                </Link>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                <Link to="/contact" className="font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </section>
  );
};

export default LandingHeader;
