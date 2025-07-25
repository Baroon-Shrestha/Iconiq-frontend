import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bgImages = [
  "Uploads/about1.jpg",
  "Uploads/about2.jpg",
  "Uploads/about3.jpg",
  "Uploads/about4.jpg",
];

export default function BlogsHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full min-h-[60vh] md:min-h-[80vh] overflow-hidden rounded-b-4xl flex flex-col justify-end text-white shadow-2xl shadow-slate-500">
      {/* Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImages[current]})` }}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12">
          <div className="col-span-3">
            <h1 className="text-3xl md:text-6xl font-bold logo mb-4 drop-shadow-lg">
              Blogs
            </h1>
            <p className="text-lg md:text-xl font-extralight max-w-2xl leading-relaxed text-white/90 drop-shadow-sm">
              Insights, Ideas, and Inspiration — Explore Our Latest Blog
              Articles on Design, Development, and Digital Trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
