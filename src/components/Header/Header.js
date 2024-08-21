import React, { useContext } from "react";
import { PuffLoader } from "react-spinners";
import { AnimatePresence, motion } from "framer-motion";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FiPlus } from "react-icons/fi";
import { UserContext } from "@/context/UserProvider";
import Sidebar from "../Sidebar/Sidebar";

export default function Header() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(UserContext);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-[120px] flex items-center justify-between gap-4 px-2 lg:px-4 fixed w-full">
      <div className="flex justify-center items-center gap-4 bg-black h-[60px] lg:h-[80px] rounded-[50px] px-5 lg:px-10">
        <div className="block lg:hidden">
          <PuffLoader color="white" size={30} />
        </div>

        <div className="hidden lg:block">
          <PuffLoader color="white" />
        </div>

        <div className="text-center">
          <div className="text-lg lg:text-2xl font-extralight">FLUXATIC</div>
          <div className="text-[10px] lg:text-xs font-extralight tracking-wider text-right">
            ABHAY
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex justify-center items-center gap-4 bg-black h-[30px] lg:h-[50px] w-[100px] lg:w-[150px] rounded-[50px] px-5 lg:px-10 py-4 text-xs lg:text-base overflow-hidden">
          <motion.div
            className="whitespace-nowrap text-white flex items-center gap-2"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            CONTACT US <TfiArrowTopRight />
            &nbsp; CONTACT US <TfiArrowTopRight />
            &nbsp; CONTACT US <TfiArrowTopRight />
          </motion.div>
        </div>

        <div
          onClick={toggleSidebar}
          className="flex justify-center cursor-pointer items-center bg-black h-[30px] w-[30px] lg:h-[50px] lg:w-[50px] rounded-full"
        >
          <FiPlus color="white" className="text-xl lg:text-4xl" />
        </div>
      </div>

      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
