import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { GoArrowUpRight } from "react-icons/go";
import { RiWhatsappLine } from "react-icons/ri";

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <AnimatePresence>
      {isSidebarOpen && (
        <motion.div
          key="sidebar"
          className="fixed top-0 right-0 h-[calc(100vh-16px)] md:h-[calc(100vh-32px)] w-[calc(100vw-16px)] md:!w-[40%] bg-[#0E0E0E] text-white shadow-lg z-[50] m-2 md:m-4 rounded-[32px]"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            duration: 0.6, // Smooth duration for entry and exit
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <div className="p-10 relative flex flex-col gap-8 h-full">
            <RiCloseLargeLine
              size={24}
              className="absolute right-[18px] top-[18px] z-[55] cursor-pointer"
              color="white"
              onClick={toggleSidebar}
            />
            <h2 className="text-[20px] md:text-[35px] lg:text-[50px] leading-none font-thin cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-300">
              HOME
            </h2>
            <h2 className="text-[20px] md:text-[35px] lg:text-[50px] leading-none font-thin cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-300">
              PORTFOLIO
            </h2>
            <h2 className="text-[20px] md:text-[35px] lg:text-[50px] leading-none font-thin cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-300">
              ABOUT US
            </h2>
            <h2 className="text-[20px] md:text-[35px] lg:text-[50px] leading-none font-thin cursor-pointer hover:text-gray-500 transition-all ease-in-out duration-300">
              CONTACT US
            </h2>
            <h4 className="text-[20px] md:text-[24px] font-thin max-w-lg md:max-w-2xl lg:max-w-4xl">
              Expert Bespoke Digital Solutions designed to boost revenue,
              elevate your brand presence & increase operational efficiency.
            </h4>

            <div className="mt-auto space-y-4">
              <div>
                <a
                  href="mailto:business@fluxatic.com"
                  className="text-white underline-offset-6 hover:underline inline-flex items-center gap-1"
                >
                  business@fluxatic.com
                  <GoArrowUpRight color="white" size={20} />
                </a>
              </div>
              <div>
                <a
                  href="tel:+918329221624"
                  className="text-white underline-offset-6 hover:underline inline-flex items-center gap-1"
                >
                  +91 8329221624{" "}
                  <RiWhatsappLine color="white" size={20} className="-mt-2" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
