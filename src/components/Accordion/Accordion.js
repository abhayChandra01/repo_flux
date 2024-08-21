"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Accordion() {
  const mockData = [
    {
      id: 1,
      title: "Website Development Service",
      content:
        "We craft powerful engaging, highly aesthetic & lightning fast websites for your Product, Service or other Intellectual Property. Our websites are intricately laden with high quality bespoke UI-UX, modern aesthetics & animations and our proprietary development systems ensure fast turnaround times with high attention to detail. Products: Corporate Sites, Landing Pages, Unique Experiences. eCommerce Stores, Booking Platforms, & much more. Technologies we use: RAD (Rapid Application Development) Platforms, WordPress CMS, WooCommerce, Shopify, Webflow, WIX Studio etc.",
    },
    {
      id: 2,
      title: "Progressive WebApp Development",
      content:
        "We craft intricate Progressive Webapps that not only plug into your existing systems, but can replace them. Optimize your operational efficiency by automating and digitizing your manual workflows and systems and deploy webapps that you and your team can use to ensure your business runs smoothly.Products: eCommerce, Booking management, workflow management apps, purchase management apps & more Technologies: RAD (Rapid Application Development) Platforms, MERN Stack & Low-Code Tools.",
    },
    {
      id: 3,
      title: "Ad-hoc Value Added Services",
      content:
        "Take your websites & webapps to the next level with our ad-hoc value added services that empower you to grow your business: Services: Marketing Funnel Integration, SEO, Advanced Analytics, Monitoring, UI Branding, Email Marketing, CRM Integration,AI Integration, Automation, Media Creation, Video Editing & Motion Animation, Digital Marketing, iOS Development, Android Development & much more Note: Some services may be availed through our expert partners.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {mockData.map((item, index) => (
        <div key={item.id} className="w-full mb-4">
          <div
            onClick={() => handleToggle(index)}
            className="w-full text-center text-white py-4 sm:p-4 flex justify-between text=[14px] md:text-[24px] font-extralight border-b border-b-gray-500"
          >
            <span>({item.id})</span>
            <span>{item.title}</span>
            <span>
              {openIndex === index ? (
                <IoIosArrowUp size={24} />
              ) : (
                <IoIosArrowDown size={24} />
              )}
            </span>
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { type: "tween", duration: 0.4, ease: "easeInOut" },
                  opacity: { duration: 0.3, ease: "easeInOut" },
                }}
                className="overflow-hidden text-white p-4 rounded-lg mt-2 text-[16px] font-thin"
              >
                {item.content}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
