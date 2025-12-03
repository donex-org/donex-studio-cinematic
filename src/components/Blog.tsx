import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      emoji: "🎬",
      title: "10 Video Editing Tips for Beginners",
      excerpt: "Master the fundamentals of video editing with these essential tips that will take your content to the next level.",
      category: "Tips & Tricks",
      date: "Dec 1, 2024",
    },
    {
      emoji: "📱",
      title: "Best Practices for Social Media Videos",
      excerpt: "Learn how to optimize your videos for different social media platforms and maximize engagement.",
      category: "Social Media",
      date: "Nov 28, 2024",
    },
    {
      emoji: "🎨",
      title: "Color Grading: A Complete Guide",
      excerpt: "Discover the art of color grading and how it can transform the mood and feel of your videos.",
      category: "Tutorials",
      date: "Nov 25, 2024",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Blog
          </span>
          <h2 className="section-title mt-2 mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Stay updated with the latest trends and tips in video editing
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              {/* Emoji Thumbnail */}
              <div className="h-48 bg-gradient-to-br from-primary/5 to-accent/10 flex items-center justify-center">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
                  {post.emoji}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{post.date}</span>
                </div>

                <h3 className="text-lg font-bold text-foreground font-display mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="btn-outline">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
