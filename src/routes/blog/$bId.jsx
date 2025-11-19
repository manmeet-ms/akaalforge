import LandingFooter from "@/components/Footer/LandingFooter.jsx";
import LandingHeader from "@/components/Header/LandingHeader.jsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import dayjs from "dayjs";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export const Route = createFileRoute("/blog/$bId")({
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

      <section className="py-8 px-12">
        <div className="container">
          <div className="relative flex flex-col justify-between gap-10 lg:flex-row">
            <aside className="top-20 h-fit flex-shrink-0 lg:sticky lg:w-[300px] xl:w-[400px]">
              {/* <a className="text-muted-foreground hover:text-primary mb-5 flex items-center gap-1" href="#">
                <ChevronLeft className="h-full w-4" />
                Return to home
              </a> */}
              <div className="flex mb-4  flex-col gap-2">
                <h1 className=" text-balance text-3xl font-bold lg:text-4xl">{article?.title}</h1>
                <span className=" text-muted-foreground    ">{article?.description}</span>
                <hr />
              </div>
              <div className="flex gap-3">
                <Avatar className="size-7  p-5 rounded-full bg-accent flex items-center justify-center  ">
                  {/* <AvatarImage src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp" alt="placeholder" /> */}
                  {article?.author?.name.charAt(0).toUpperCase()}
                </Avatar>
                <div>
                  <h2 className="font-semibold">{article?.author?.name}</h2>
                  <p className="text-muted-foreground text-xs">{dayjs(article?.publishedAt).format("DD MMM, YYYY")}</p>
                </div>
              </div>
            </aside>

            <article className="">
              <img src={asset(article?.cover?.formats?.large?.url || article?.cover?.url)} alt="cover" className="mb-6 w-full rounded-lg border object-cover" />
              <div className="prose dark:prose-invert">
                {Array.isArray(article?.blocks) &&
                  article.blocks.map((blk, i) => {
                    if (!blk || !blk.__component) return null;
                    switch (blk.__component) {
                      case "shared.rich-text": {
                        const body = blk.body || "";
                        return (
                          <div key={`blk-rich-${blk.id || i}`} className="my-6">
                            <Markdown>{body}</Markdown>
                          </div>
                        );
                      }
                      case "shared.media": {
                        const media = blk.media || blk.file || blk.image || null;
                        const src = asset(media?.url || media?.formats?.large?.url || media?.formats?.medium?.url || media?.formats?.small?.url);
                        const alt = media?.alternativeText || media?.name || "media";
                        if (!src) return null;
                        return (
                          <div key={`blk-media-${blk.id || i}`} className="my-8">
                            <img src={src} alt={alt} className="w-full rounded-md border object-cover" />
                          </div>
                        );
                      }
                      case "shared.slider": {
                        const items = blk.items || blk.images || [];
                        if (!Array.isArray(items) || items.length === 0) return null;
                        return (
                          <div key={`blk-slider-${blk.id || i}`} className="my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {items.map((it, idx) => {
                              const src = asset(it?.url || it?.formats?.medium?.url || it?.formats?.small?.url);
                              if (!src) return null;
                              return <img key={`slide-${idx}`} src={src} alt={it?.alternativeText || it?.name || `slide-${idx}`} className="w-full rounded-md border" />;
                            })}
                          </div>
                        );
                      }
                      default:
                        return <div key={`blk-unknown-${blk.id || i}`} className="my-4" />;
                    }
                  })}
              </div>
            </article>
          </div>
        </div>
      </section>

      <LandingFooter />
    </>
  );
}
