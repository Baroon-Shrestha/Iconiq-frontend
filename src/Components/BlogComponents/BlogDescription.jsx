import React, { useEffect, useState } from "react";
import {
  Calendar,
  Tag,
  ArrowLeft,
  Clock,
  Share2,
  BookOpen,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogDescription() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [readingTime, setReadingTime] = useState(0);
  const navigate = useNavigate();
  const previousPage = () => {
    return navigate(-1);
  };

  // Calculate reading time
  const calculateReadingTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Demo data for visualization
    const demoBlog = {
      title: "The Future of Web Development: Trends and Technologies to Watch",
      content: `
        <p>Web development is constantly evolving, with new technologies and frameworks emerging at a rapid pace. As we look toward the future, several key trends are shaping how we build and interact with web applications.</p>
        
        <h2>The Rise of AI-Powered Development</h2>
        <p>Artificial Intelligence is revolutionizing the way we approach web development. From automated code generation to intelligent debugging, AI tools are becoming indispensable companions for developers worldwide.</p>
        
        <blockquote>The integration of AI in web development isn't just about automation—it's about augmenting human creativity and problem-solving capabilities.</blockquote>
        
        <h2>Progressive Web Applications</h2>
        <p>PWAs continue to bridge the gap between web and native applications, offering offline functionality, push notifications, and app-like experiences directly through the browser.</p>
        
        <h3>Key Benefits of PWAs:</h3>
        <ul>
          <li>Enhanced performance and speed</li>
          <li>Offline functionality</li>
          <li>Cross-platform compatibility</li>
          <li>Reduced development costs</li>
        </ul>
        
        <h2>The Evolution of CSS</h2>
        <p>Modern CSS features like Container Queries, Cascade Layers, and advanced Grid layouts are giving developers unprecedented control over responsive design and layout systems.</p>
        
        <p>As we continue to push the boundaries of what's possible on the web, one thing remains clear: the future belongs to those who embrace change and continuously adapt to new technologies.</p>
      `,
      heroImage: {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      },
      createdAt: new Date().toISOString(),
      categories: ["Technology", "Web Development"],
      tags: ["JavaScript", "AI", "PWA", "CSS", "Future Tech"],
      author: "Alex Johnson",
      readTime: 8,
    };

    setTimeout(() => {
      setBlog(demoBlog);
      setReadingTime(calculateReadingTime(demoBlog.content));
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-slate-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center max-w-lg mx-auto px-6">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-12 h-12 text-slate-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Article not found
          </h2>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            The article you're looking for doesn't exist or has been moved.
            Let's get you back to exploring other great content.
          </p>
          <button
            onClick={previousPage}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to articles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Navigation */}
      <nav className="sticky top-0 z-40 bg-white bg-opacity-80 backdrop-blur-xl border-b border-slate-200 border-opacity-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={previousPage}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="hidden sm:inline">Back to articles</span>
              <span className="sm:hidden">Back</span>
            </button>

            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        {blog.heroImage?.url && (
          <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <img
              src={blog.heroImage.url}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article Header - Overlaid on hero image */}
        <div className="relative z-20 -mt-32 lg:-mt-40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-white border-opacity-20">
              {/* Categories */}
              {blog.categories?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.categories.map((category, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-blue-700 bg-blue-50 rounded-full border border-blue-200"
                    >
                      <Tag className="w-3 h-3" />
                      {category}
                    </span>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
                {blog.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-600 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-slate-400" />
                  <time className="text-base font-medium">
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <span className="text-base font-medium">
                    {readingTime} min read
                  </span>
                </div>

                {blog.author && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">
                        {blog.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <span className="text-base font-medium">
                      By {blog.author}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 border border-slate-200">
          <article
            className="prose prose-lg sm:prose-xl max-w-none
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:mb-6 prose-headings:mt-10
              prose-h1:text-4xl prose-h1:leading-tight
              prose-h2:text-3xl prose-h2:leading-tight prose-h2:text-slate-800
              prose-h3:text-2xl prose-h3:leading-tight prose-h3:text-slate-700
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:text-blue-800 hover:prose-a:underline prose-a:font-medium prose-a:transition-colors
              prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:text-slate-700 prose-blockquote:rounded-r-lg prose-blockquote:my-8
              prose-code:bg-slate-100 prose-code:px-3 prose-code:py-1 prose-code:rounded-md prose-code:text-base prose-code:font-mono prose-code:text-slate-800
              prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-xl prose-pre:p-6 prose-pre:my-8
              prose-img:rounded-xl prose-img:w-full prose-img:shadow-lg prose-img:my-8
              prose-hr:border-slate-200 prose-hr:my-12
              prose-ul:text-slate-700 prose-ol:text-slate-700 prose-ul:text-lg prose-ol:text-lg
              prose-li:text-lg prose-li:leading-relaxed prose-li:mb-2
              prose-strong:text-slate-900 prose-strong:font-bold
              prose-table:shadow-lg prose-table:border prose-table:border-slate-200 prose-table:rounded-lg
              prose-th:bg-slate-50 prose-th:font-bold prose-th:text-slate-900
              prose-td:border-slate-200"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </main>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gray-900 transition-all duration-150"
          style={{
            width: `${Math.min(
              100,
              (window.pageYOffset /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
