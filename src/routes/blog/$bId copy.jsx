import LandingFooter from "@/components/Footer/LandingFooter.jsx";
import LandingHeader from "@/components/Header/LandingHeader.jsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import dayjs from "dayjs";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export const Route = createFileRoute("/blog/$bId copy")({
  component: RouteComponent,
});

function RouteComponent() {
  const { bId } = Route.useParams();
  const endpoint = `${import.meta.env.VITE_STRAPI_BACKEND_API_URL}articles/${bId}?populate=*`;
  const [article, setArticle] = useState(null);

  const asset = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${import.meta.env.VITE_STRAPI_BACKEND_URL}${url}`;
  };

  const fetchArticle = async () => {
    const res = await axios.get(endpoint);
    setArticle(res.data?.data || null);
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <>
      <LandingHeader />

      <section className="px-12 py-12 ">
        <div className="max-w-5xl mx-auto ">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
              <h1 className="  text-pretty text-5xl font-semibold md:text-6xl">{article?.title}</h1>
              <h3 className="text-muted-foreground max-w-3xl text-lg md:text-xl">{article?.description}</h3>
              <div className="flex items-center gap-3 text-sm md:text-base">
                <div className="mb-12 flex items-center gap-3">
                  <Avatar className="size-10 rounded-full bg-accent flex items-center justify-center">{article?.author?.name.charAt(0).toUpperCase()}</Avatar>

                  <div>
                    <p className="font-semibold">{article?.author?.name}</p>
                
                  </div>
                  <span>
                    
                    <span className="">on {dayjs(article?.publishedAt).format("DD MMM, YYYY")}</span>
                  </span>
                </div>
              </div>
              {/* <img
            src={image}
            alt="placeholder"
            className="mb-8 mt-4 aspect-video w-full rounded-lg border object-cover"
          /> */}
            </div>

          <img src={asset(article?.cover?.formats?.large?.url || article?.cover?.url)} alt="cover" className="mb-10 w-2/3 mx-auto rounded-xl border object-cover  " />

          <article className="prose dark:prose-invert max-w-none">
            {Array.isArray(article?.blocks) &&
              article.blocks.map((blk, i) => {
                if (!blk?.__component) return null;
                switch (blk.__component) {
                  case "shared.rich-text":
                    return (
                      <div key={blk.id || i} className="my-6">
                        <Markdown>{blk.body || ""}</Markdown>
                      </div>
                    );

                  case "shared.media": {
                    const m = blk.media || blk.file || blk.image;
                    const src = asset(m?.url || m?.formats?.large?.url || m?.formats?.medium?.url || m?.formats?.small?.url);
                    if (!src) return null;
                    return (
                      <div key={blk.id || i} className="my-8">
                        <img src={src} alt={m?.alternativeText || m?.name || "media"} className="w-full rounded-md border object-cover" />
                      </div>
                    );
                  }

                  case "shared.slider": {
                    const list = blk.items || blk.images || [];
                    if (!list.length) return null;
                    return (
                      <div key={blk.id || i} className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {list.map((it, idx) => {
                          const src = asset(it?.url || it?.formats?.medium?.url || it?.formats?.small?.url);
                          if (!src) return null;
                          return <img key={idx} src={src} alt={it?.alternativeText || it?.name} className="rounded-md border" />;
                        })}
                      </div>
                    );
                  }

                  default:
                    return <div key={blk.id || i} className="my-4" />;
                }
              })}
          </article>
        </div>
      </section>
      <LandingFooter />
 
    </>
  );
}
