import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

import toast from "react-hot-toast";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/project" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const companyLinks = [
    { name: "Support", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook />,
      href: "https://www.facebook.com/iconiqnp/?rdid=rNX7SW2qKqC4mgto",
      color: "hover:text-white",
      bgcolor: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/iconiqnp/#",
      color: "hover:text-white-",
      bgcolor: "hover:bg-pink-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin />,
      href: "https://www.linkedin.com/in/iconiq/",
      bgcolor: "hover:bg-blue-400 ",
      color: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#C848C1] via-[#8B5CF6] to-[#54A6F9] text-white mt-16 rouned-4xl relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-300 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-6 lg:col-span-1">
            <div>
              <h2 className="text-3xl font-extrabold mb-2 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                Let's Talk
              </h2>
              <p className="text-white/80 text-sm">
                Ready to bring your ideas to life?
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:info@iconiq.com"
                className="flex items-center space-x-3 text-lg hover:text-yellow-400 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Iconiqnp@gmail.com</span>
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("+9779812345678");
                  toast.success("Phone number copied to clipboard!");
                }}
                className="flex items-center space-x-3 text-lg hover:text-yellow-400 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>+977 986‑4687572</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:col-span-2">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                Explore
                <ArrowRight className="w-4 h-4 ml-2 opacity-60" />
              </h3>
              <ul className="space-y-2">
                {navigationLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                Company
                <ArrowRight className="w-4 h-4 ml-2 opacity-60" />
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-block relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-1">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Our Office
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-sm space-y-2">
                <a
                  href="https://www.google.com/maps?q=Sankhamul,+Kathmandu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-1 hover:text-yellow-400 transition-colors duration-300"
                >
                  <p className="font-semibold text-yellow-200">
                    Sankhamul, Naya Baneshwor
                  </p>
                  <p className="text-white/90">Kathmandu, Nepal</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80 text-center">
              © {currentYear} Iconiq. All rights reserved.
            </p>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`${social.color} ${social.bgcolor} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 p-2 rounded-full`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
