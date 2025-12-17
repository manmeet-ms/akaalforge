import { Badge } from "@/components/ui/badge";
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

function RouteComponent() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const normalizeArticle = (article, source) => ({
    id: `${source}-${article.id}`,
    documentId: article.slug || article.id,
    title: article.title,
    description: article.description || article.subtitle || 'No description',
    publishedAt: article.published_at || article.created_at,
    cover: {
      url: article.cover_image || article.social_image || null,
    },
    author: {
      name: article.user?.name || article.username || 'Anonymous',
    },
    category: {
      name: source === 'devto' ? 'Dev.to' : 'Maker',
    },
    canonicalUrl: article.url,
    source,
  });

  const fetchBlogs = async () => {
    try {
      const [devToRes, foremRes] = await Promise.all([
        axios.get("https://dev.to/api/articles?username=akaalforge"),
        axios.get("https://maker.forem.com/api/articles?username=akaalforge"),
      ]);

      const devToArticles = devToRes.data.map(a => normalizeArticle(a, 'devto'));
      const foremArticles = foremRes.data.map(a => normalizeArticle(a, 'forem'));

      const allArticles = [...devToArticles, ...foremArticles]
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

      setBlogs(allArticles);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (error) {
    console.error("Blog fetch failed:", error);
  }

  return (
    <>
      <LandingHeader />
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
            {loading ? (
              "Loading..."
            ) : blogs.length === 0 ? (
              <p className="col-span-12 text-center text-muted-foreground">No articles found.</p>
            ) : (
              blogs.map((post) => (
                <Card
                  key={post.id}
                  className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
                >
                  <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                    <div className="sm:col-span-5">
                      <div className="mb-4 md:mb-6">
                        <div className="text-muted-foreground flex flex-wrap gap-3 text-xs uppercase tracking-wider md:gap-5 lg:gap-6">
                          <Badge variant="secondary">{post?.category?.name}</Badge>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                        <Link
                          to={post.canonicalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
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
                          to={post.canonicalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-semibold hover:underline md:text-base"
                        >
                          <span>Read more</span>
                          <ArrowRight className="ml-2 size-4 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    <div className="order-first sm:order-last sm:col-span-5">
                      <Link
                        to={post.canonicalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-16/9 border-border overflow-clip rounded-lg border">
                          <img
                            src={post?.cover?.url || '/placeholder-image.jpg'}
                            alt={post.title}
                            className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                            onError={(e) => {
                              e.currentTarget.src = '/placeholder-image.jpg';
                            }}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>
      <LandingFooter />
    </>
  );
}