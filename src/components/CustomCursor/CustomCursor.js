"use client";
import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[15px] h-[15px] rounded-full bg-white pointer-events-none"
      style={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
      }}
    />
  );
};

export default CustomCursor;
