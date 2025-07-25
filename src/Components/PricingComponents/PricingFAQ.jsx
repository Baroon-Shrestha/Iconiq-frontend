// FAQSection.jsx
import React from "react";
import Accordion from "../HelperComponents/Accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "What are your core services as a UX design and branding firm?",
      answer: (
        <div className="space-y-4">
          <p>
            At Clay, user experience is not just a capability but the
            cornerstone of our approach. We first began as a UX design agency in
            San Francisco, focusing on mobile apps and enterprise/SaaS software.
          </p>
          <p>
            However, our passion for branding and the demand from our clients
            led us to expand our offering to provide full-service brand design
            practice and web design and development of marketing websites.
          </p>
          <p>
            Today, our projects encompass a wide range, from building new
            products and defining brands to revitalizing existing mobile apps,
            websites, and enterprise software. We specialize in crafting digital
            products that wholeheartedly embody the brand's personality and
            deliver delightful experiences to your customers.
          </p>
          <p>
            Our team handles every aspect required to bring a digital product to
            life. This includes user research, product strategy, branding, user
            interface and experience design, usability testing, prototyping, web
            design, and development.
          </p>
        </div>
      ),
    },
    {
      question:
        "What separates Clay from other branding and web design agencies?",
      answer: (
        <div className="space-y-4">
          <p>
            Clay stands out through our unique combination of deep UX expertise
            and strategic branding capabilities. Unlike traditional agencies
            that focus on just one area, we bring together user experience
            research, brand strategy, and technical implementation under one
            roof.
          </p>
          <p>
            Our approach is data-driven and user-centered, ensuring that every
            design decision is backed by research and testing. We don't just
            create beautiful designs - we create solutions that solve real
            business problems and delight users.
          </p>
        </div>
      ),
    },
    {
      question: "Do you work with clients in different timezones?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes, we work with clients across different timezones. Our team has
            experience collaborating with companies globally, and we've
            developed efficient processes to ensure smooth communication
            regardless of location.
          </p>
          <p>
            We use modern collaboration tools and establish clear communication
            schedules that work for all parties involved. Our project management
            approach is designed to minimize timezone friction while maintaining
            high-quality deliverables.
          </p>
        </div>
      ),
    },
    {
      question: "How much does hiring you for a design project cost?",
      answer: (
        <div className="space-y-4">
          <p>
            Project costs vary depending on scope, complexity, and timeline. We
            offer both fixed-price project engagements and ongoing retainer
            relationships.
          </p>
          <p>
            During our initial consultation, we'll discuss your specific needs
            and provide a detailed proposal with transparent pricing. We believe
            in providing clear value propositions and work within budgets that
            make sense for your business goals.
          </p>
        </div>
      ),
    },
    {
      question: "Do you work with startups?",
      answer: (
        <div className="space-y-4">
          <p>
            Absolutely! We have extensive experience working with startups at
            various stages, from early-stage companies defining their MVP to
            growth-stage startups scaling their products.
          </p>
          <p>
            We understand the unique challenges startups face and can adapt our
            processes to work within startup timelines and budgets. Our team has
            helped numerous startups successfully launch and scale their
            products.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 xt-white">
      <div className="container mx-auto px-6 py-20">
        <div className="mb-16  text-center flex items-center justify-center flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frequently Asked Questions (
            <span className="bg-gradient-to-r from-[#C848C1] to-[#54A6F9] bg-clip-text text-transparent">
              FAQ
            </span>
            )❓
          </h1>
          <p className="text-center text-lg md:text-xl max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            obcaecati pariatur magnam temporibus ad dignissimos alias sapiente
            omnis, quo earum.
          </p>
        </div>
        <Accordion items={faqData} />
      </div>
    </div>
  );
};

export default FAQSection;
