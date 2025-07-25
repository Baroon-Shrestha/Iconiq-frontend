import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importing framer motion

const projects = [
  {
    image: "/Uploads/momiji2.jpg",
    title: "Momiji International Academy",
    subtitle: "Integrating AR to elevate social commerce",
  },
  {
    image: "/Uploads/kansai.png",
    title: "Kansai International Language Center",
    subtitle: "Host your child's birthday at Joe",
  },
  {
    image: "/Uploads/nisani.jpg",
    title: "Nisani",
    subtitle: "Immersive product experience",
  },
  {
    image: "/Uploads/namodebi.jpg",
    title: "Navadebi Jwellers",
    subtitle: "Educational Consultancy",
  },
];

export default function HomeProjects() {
  const [cursorState, setCursorState] = useState({
    isVisible: false,
    position: { x: 0, y: 0 },
    text: "View all Projects",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorState((prev) => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    if (cursorState.isVisible) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorState.isVisible]);

  const handleMouseEnter = () => {
    setCursorState((prev) => ({ ...prev, isVisible: true }));
    document.body.style.cursor = "none";
  };

  const handleMouseLeave = () => {
    setCursorState((prev) => ({ ...prev, isVisible: false }));
    document.body.style.cursor = "auto";
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-gray-50 ">
      <div className="container mx-auto px-4 pt-12 md:py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800">
            Our{" "}
            <span className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text logo">
              Projects
            </span>
          </h2>
          <p className="text-lg font-light text-gray-600 mt-4 max-w-3xl mx-auto">
            Explore a curated selection of our work. Each project reflects our
            commitment to excellence and innovation.
          </p>
        </motion.div>

        {/* Centered Grid Layout with animations */}
        <div className="flex justify-center">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Group 1: Momiji + Nisani */}
            <div className="flex justify-center space-x-8">
              {projects.slice(0, 2).map((project, index) => (
                <motion.div
                  className="w-full max-w-xs"
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  whileInView={{ opacity: 1 }} // Fade in when in view
                  viewport={{ once: true }} // Trigger animation only once
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 hover:shadow-2xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-yellow-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Group 2: Kansai + Navadebi */}
            <div className="flex justify-center space-x-8">
              {projects.slice(2).map((project, index) => (
                <motion.div
                  className="w-full max-w-xs"
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  whileInView={{ opacity: 1 }} // Fade in when in view
                  viewport={{ once: true }} // Trigger animation only once
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all ease-in-out duration-300 hover:shadow-2xl group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-yellow-400 transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Link to="/projects">
              <button className="text-lg font-medium text-gray-700 border-b-2 border-gray-300 hover:border-gray-500 transition-all duration-300 hover:text-yellow-400">
                View All Projects →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
