import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 50 : -50,
  }),
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -50 : 50,
    transition: { duration: 0.4 },
  }),
};

export default function Carousel({ data }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const testimonial = data[index];

  return (
    <div className="relative container mx-auto min-h-[vh] bg-whie text-white py-8 md:py-16 flex flex-col justify-center">
      <div className="absolute bottom-1/6 right-10 transform -translate-y-1/2 flex gap-6 text-3xl font-light z-10">
        <button onClick={handlePrev}>←</button>
        <button onClick={handleNext}>→</button>
      </div>

      <div className="max-w-5xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="p-4"
          >
            <p className="text-xl md:text-3xl font-light mb-10 leading-snug">
              “{testimonial.quote}”
            </p>
            <div>
              <div>
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-gry-500">{testimonial.position}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Blurred image */}
      {/* <div className="absolute bottom-10 right-10 w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-xl shadow-xl">
        <img
          src={testimonial.image}
          alt="profile"
          className="w-full h-full object-cover blur-sm"
        />
      </div> */}
    </div>
  );
}
