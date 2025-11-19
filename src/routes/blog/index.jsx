import { Badge } from "@/components/ui/badge"
import LandingFooter from "@/components/Footer/LandingFooter";
import { createFileRoute, Link } from "@tanstack/react-router";

import LandingHeader from "../../components/Header/LandingHeader.jsx";
import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent(
  {
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  
  
}
) {

  const asset = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${import.meta.env.VITE_STRAPI_BACKEND_URL}${url}`;
  };

  const [blogs, setblogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
 const fetchBlogs = async () => {
      try {
     
        const response = await axios.get(import.meta.env.VITE_STRAPI_BACKEND_API_URL + 'articles?populate=*')
     
        // const response = await fetch(import.meta.env.VITE_STRAPI_BACKEND_URL + 'articles?populate=*')
        // const data = await response.json()
        
        console.log("response.data.data,",response.data.data);
        
        setblogs(response.data.data)
        console.log("fetchBlogs",blogs);
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    useEffect(() => {
      
      fetchBlogs() 
      console.log("useEffect fetchBlogs",blogs);
  
  }, [])
  return (
    <> 
      <LandingHeader />
      {/* <HeroRed /> */}
     
 <section className="py-8">
      <div className="container flex flex-col px-12 gap-16">
           <div className="py-6">
              <div>
                <h1 className="text-foreground font-serif text-6xl font-light leading-none tracking-tight md:text-8xl lg:text-9xl">
                  BLOGS
                </h1>
              <p>Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.</p>
              </div>
 
            </div>


        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {loading===true ? "Loading...": blogs.map((post) => (
            <Card 
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                <div className="sm:col-span-5">
                  <div className="mb-4 md:mb-6">
                    <div className="text-muted-foreground flex flex-wrap gap-3 text-xs uppercase tracking-wider md:gap-5 lg:gap-6">
                      <Badge variant="secondary" >{post?.category?.name}</Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <Link
                      to={"/blog/"+post.documentId}
                      
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mt-4 md:mt-5">
                    {post.description}
                  </p>
                  <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                    <span className="text-muted-foreground">{post.author?.name}</span>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">
                   {dayjs(post.publishedAt).format("DD MMM, YYYY")}
                    </span>
                  </div>
                  <div className="mt-6 flex items-center space-x-2 md:mt-8">
                    <Link
                      to={"/blog/"+post.documentId}
                       
                      className="inline-flex items-center font-semibold hover:underline md:text-base"
                    >
                      <span>Read more</span>
                      <ArrowRight className="ml-2 size-4 transition-transform" />
                    </Link>
                  </div>
                </div>
                <div className="order-first sm:order-last sm:col-span-5">
                  <Link to={"/blog/"+post.documentId}
                       className="block">
                    <div className="aspect-16/9 border-border overflow-clip rounded-lg border">
                      <img
                        src={asset(post?.cover?.formats?.large?.url || post?.cover?.url)}
                        alt={post.title}
                        className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
      <LandingFooter />
    </>
  );
}
