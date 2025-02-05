import React from "react";

const features = [
  {
    image: "/business-decision.png",
    title: "Business Consultation",
    description:
      "Professional advisory services for business strategy and legal compliance.",
    benefits: [
      "Expert advice from industry professionals",
      "Tailored strategies for your business",
      "Ensures legal compliance",
    ],
  },
  {
    image: "/filing.png",
    title: "Accounting & Taxation",
    description:
      "Comprehensive financial management and tax planning for businesses.",
    benefits: [
      "Accurate financial records",
      "Optimized tax planning",
      "Compliance with regulations",
    ],
  },
  {
    image: "/income-tax.png",
    title: "Income Tax Returns (ITR)",
    description:
      "Expert assistance in preparing and filing accurate income tax returns.",
    benefits: [
      "Accurate tax return preparation",
      "Maximized tax benefits",
      "Timely filing",
    ],
  },
  {
    image: "/certification.png",
    title: "CA Certification / Reports",
    description:
      "Official Chartered Accountant certifications and financial reporting services.",
    benefits: [
      "Certified financial reports",
      "Compliance with standards",
      "Professional CA services",
    ],
  },
  {
    image: "/web-development.jpeg",
    title: "Web Application Development",
    description:
      "We build custom web applications that are tailored to your unique needs.",
    benefits: [
      "Custom solutions",
      "Scalable applications",
      "User-friendly design",
    ],
  },
  {
    image: "/ecommerce.png",
    title: "E-Commerce Solutions",
    description:
      "We create online stores that are user-friendly and secure for your customers.",
    benefits: [
      "Secure transactions",
      "User-friendly interface",
      "Customizable features",
    ],
  },
  {
    image: "/app-development.png",
    title: "Mobile App Development",
    description:
      "We develop mobile apps for iOS and Android devices to help you reach a wider audience.",
    benefits: [
      "Cross-platform compatibility",
      "User-friendly design",
      "Scalable solutions",
    ],
  },
  {
    image: "/ux.png",
    title: "Landing Page Design",
    description:
      "We design landing pages that convert visitors into customers and drive sales.",
    benefits: ["High conversion rates", "Attractive design", "SEO optimized"],
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
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="flex flex-wrap mt-2">
                {feature.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="bg-violet-200 text-violet-800 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
