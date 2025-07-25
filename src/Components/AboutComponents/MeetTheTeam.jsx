import React, { useState } from "react";
import { X, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { FaBehance, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
// import { Linkedin, Twitter, Github, Mail } from "lucide-react";
// import { FaBehance, FaWhatsapp } from "react-icons/fa";
export default function MeetTheTeam() {
  const [selectedMember, setSelectedMember] = useState(null);

  const team = [
    {
      name: "Roshan KC",
      role: "Founder & CEO",
      img: "Uploads/defaultpp.jpg",
      description:
        "Roshan KC is the visionary founder behind our organization. With a strong focus on leadership and innovation, he has been instrumental in shaping the company’s mission, building strong partnerships, and guiding the team toward sustainable growth.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },
        {
          icon: FaWhatsapp,
          url: "#",
          label: "Whatsapp",
          color: "hover:bg-green-500",
          color2: "hover:text-white",
        },
        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
    {
      name: "Rabindra Giri",
      role: "Co-founder & COO",
      img: "Uploads/rabin.png",
      description:
        "Rabindra Giri leads the team as Manager, ensuring day-to-day operations run smoothly. His expertise lies in team coordination, project management, and ensuring client satisfaction through efficient workflow and clear communication.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },
        {
          icon: FaWhatsapp,
          url: "#",
          label: "Whatsapp",
          color: "hover:bg-green-500",
          color2: "hover:text-white",
        },
        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
    {
      name: "Abiral Poudel",
      role: "Sr. Graphics Designer",
      img: "/Uploads/Abiral.png",
      description:
        "Abiral Poudel is a creative Graphics Designer, bringing visual ideas to life through thoughtful design and branding. His skills cover everything from digital illustrations to UI assets, maintaining visual consistency across all platforms.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },
        {
          icon: FaBehance,
          url: "#",
          label: "Behance",
          color: "hover:bg-blue-500",
          color2: "hover:text-white",
        },
        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
    {
      name: "Abhay Shrestha",
      role: "Graphics Designer",
      img: "Uploads/abhay.jpg",
      description:
        "Abhay Shrestha specializes in crafting engaging graphic designs for both digital and print media. His attention to detail and creativity helps our brand stand out through impactful visuals and well-crafted marketing materials.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },

        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
    {
      name: "Baroon Shrestha",
      role: "Web Developer",
      img: "Uploads/Barun.png",
      description:
        "Baroon Shrestha is a skilled Web Developer specializing in modern frontend and backend technologies. From building responsive interfaces to integrating APIs, Baroon ensures a smooth and efficient web experience for all our users.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },
        {
          icon: Github,
          url: "#",
          label: "GitHub",
          color: "hover:bg-gray-700",
          color2: "hover:text-white",
        },
        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
    {
      name: "Sara Lamichhane",
      role: "Web Developer",
      img: "/Uploads/sara.jpeg",
      description:
        "Sara Lamichhane is a dedicated Web Developer focused on creating user-friendly web applications. Her strengths include front-end development, responsive design, and collaborating closely with designers and project managers.",
      socialLinks: [
        {
          icon: Linkedin,
          url: "#",
          label: "LinkedIn",
          color: "hover:bg-blue-600",
          color2: "hover:text-white",
        },
        {
          icon: Github,
          url: "#",
          label: "GitHub",
          color: "hover:bg-gray-700",
          color2: "hover:text-white",
        },
        {
          icon: Mail,
          url: "#",
          label: "Email",
          color: "hover:bg-red-500",
          color2: "hover:text-white",
        },
      ],
    },
  ];

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-b from-[#C848C1] to-[#54A6F9] text-transparent bg-clip-text logo">
              Team
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-extralight max-w-2xl mx-auto">
            Passionate innovators dedicated to your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden"
              onClick={() => openModal(member)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="text-xl font-semibold text-center mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 text-center mb-4">{member.role}</p>

              <div className="social-links flex justify-center space-x-3 transition-all duration-300">
                {member.socialLinks.map((social, socialIndex) => (
                  <a
                    key={socialIndex}
                    href={social.url}
                    onClick={(e) => e.stopPropagation()}
                    className={`p-3 rounded-full bg-gray-100 transition-colors duration-300 ${social.color} ${social.color2}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <motion.div
          className="modal-backdrop fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="modal-content bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <img
                      src={selectedMember.img}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      {selectedMember.name}
                    </h3>
                    <p className="text-gray-600">{selectedMember.role}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">About</h4>
                <p className="text-gray-700 leading-relaxed">
                  {selectedMember.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Connect</h4>
                <div className="flex space-x-3 space-y-3 flex-wrap">
                  {selectedMember.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 transition-colors duration-300 ${social.color} ${social.color2}`}
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
