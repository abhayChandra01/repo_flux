import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="w-full px-4">
      <div className="flex flex-col gap-4">
        <h2 className="text-[44px] md:text-[60px] lg:text-[100px] leading-none font-thin">
          YOUR <br /> STRATEGIC <br /> PARTNER FOR <br />
          <ReactTypingEffect
            speed={50}
            typingDelay={20}
            text={[
              "UI/UX DESIGN",
              "WEBAPP DEV",
              "IT SOLUTIONS",
              "WEBSITE DEV",
              "BRANDING",
            ]}
          />
        </h2>
        <div>
          <h4 className="text-[20px] md:text-[24px] font-thin max-w-lg md:max-w-2xl lg:max-w-4xl">
            Expert Bespoke Digital Solutions designed to boost revenue, elevate
            your brand presence & increase operational efficiency.
          </h4>
        </div>
        <div className="flex items-center">
          <motion.div
            className="text-green-500 mr-2"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <FaCircle size={10} />
          </motion.div>
          <h5>Currently available globally.</h5>
        </div>
      </div>
    </div>
  );
}
