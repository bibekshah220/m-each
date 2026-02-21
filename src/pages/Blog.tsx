import { Link, useParams } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/siteData";

const BlogList = () => (
  <>
    <PageHero title="Blog" description="Insights, news, and thought leadership from the Meach Group team." />
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-4xl">
        <div className="space-y-8">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block bg-card rounded-xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Tag className="w-3 h-3" /> {post.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">{post.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-secondary text-sm font-semibold group-hover:gap-2 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center container-narrow">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-secondary hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <>
      <PageHero title={post.title} description={`${post.category} · ${new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`} />
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <div className="bg-card rounded-2xl p-8 md:p-12 card-shadow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <User className="w-4 h-4" /> {post.author}
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed">{post.content}</p>
            </div>
            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog" className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { BlogList, BlogDetail };
