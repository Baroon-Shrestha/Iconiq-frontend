import Carousel from "../HelperComponents/Carousel";

const clientTestimonials = [
  {
    quote:
      "You truly transformed our academy's digital presence. From brand marketing to web development, everything feels modern and student-friendly. Our online inquiries have definitely increased.",
    name: "Momiji International Academy",
    position: "Japanese Educational Consultancy",
    image: "/uploads/client1.jpg",
  },
  {
    quote:
      "Thank you for elevating our brand through both digital marketing and e-commerce development. The new platform is user-friendly, and our sales numbers reflect that.",
    name: "Navadebi Jewellers",
    position: "E-commerce Platform",
    image: "/uploads/client2.jpg",
  },
  {
    quote:
      "You supported us from branding to digital marketing and web development. Our consultancy is now more visible to students in both Nepal and Japan, thanks to your work.",
    name: "Kansai International Japanese Language Center",
    position: "Japanese Educational Consultancy",
    image: "/uploads/client4.jpg",
  },
  {
    quote:
      "We appreciate how your team handled our inventory system and also took care of our brand marketing. It’s helped both our internal operations and public image grow.",
    name: "Navadebi Jewellers",
    position: "Jewelry Inventory System",
    image: "/uploads/client3.jpg",
  },
  {
    quote:
      "You truly transformed our academy's digital presence. From digital marketing to web development, everything feels new, modern and user-friendly. Our online presence as well as inquiries have definitely increased.",
    name: "Omni Global Consultancy",
    position: "Educational Consultancy",
    image: "/uploads/client5.jpg",
  },
  {
    quote:
      "We needed everything — brand strategy, digital marketing, and a functional car sales website. You delivered across all fronts, and it’s made a big difference for our business.",
    name: "Kings Motors",
    position: "Automobile Sales Platform",
    image: "/uploads/client6.jpg",
  },
  {
    quote:
      "Your digital solutions and marketing efforts helped Dollersewa become more reliable and recognizable. From backend systems to branding, we’re happy with the outcome.",
    name: "Dollersewa",
    position: "Online Services Platform",
    image: "/uploads/client7.jpg",
  },
];

export default function ServicesTestimonials() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#C848C1] to-[#54A6F9] pt-12 p-4 ">
        <div className="text-4xl md:text-6xl px-4 md:px-0 text-center capitalize text-white">
          Hear what our{" "}
          <span className="logo  bg-gradint-to-b from-[#C848C1] to-[#54A6F9] text-trasparent b-clip-text">
            Clients
          </span>{" "}
          say about us
        </div>
        <Carousel
          data={clientTestimonials}
          heading="What our"
          highlight="Clients"
          subtext="say about working with us."
        />
      </div>
    </>
  );
}
