import React from "react";

const features = [
  {
    image: "/web-development.jpeg",
    title: "Web Application Development",
    description:
      "We build custom web applications that are tailored to your unique needs.",
  },
  {
    image: "/tax-filing.jpeg",
    title: "Tax Filing Services",
    description:
      "We offer tax preparation and filing services for individuals and businesses.",
  },
  {
    image: "/finance.png",
    title: "Financial Consulting",
    description:
      "Our financial experts provide strategic advice to help you achieve your goals.",
  },
  {
    image: "/ecommerce.png",
    title: "E-Commerce Solutions",
    description:
      "We create online stores that are user-friendly and secure for your customers.",
  },
  {
    image: "/app-development.png",
    title: "Mobile App Development",
    description:
      "We develop mobile apps for iOS and Android devices to help you reach a wider audience.",
  },
  {
    image: "/ux.png",
    title: "Landing Page Design",
    description:
      "We design landing pages that convert visitors into customers and drive sales.",
  },
];

const ServicesSection = () => {
  return (
    <div
      id="services"
      className="flex flex-wrap justify-center items-center scroll-mt-16"
    >
      {features.map((feature, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 md:w-1/3 p-4 ${
            index % 2 === 0 ? "mt-0" : "mt-8"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg shadow-violet-200 overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-contain "
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
