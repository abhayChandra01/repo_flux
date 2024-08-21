"use client";
import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "@/context/UserProvider";
import { ClimbingBoxLoader, SquareLoader } from "react-spinners";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Header from "@/components/Header/Header";

export default function Layout({ children }) {
  const { isLoading, setIsLoading } = useContext(UserContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      <CustomCursor />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 1, y: "0%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-50"
          >
            <div className="w-full h-full flex items-center justify-center relative">
              <SquareLoader color="white" />

              <div className="absolute bottom-[20%] z-[51]">
                <h1 className="text-white text-2xl">LOADING . . .</h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header />
      <div
        className={`transition-opacity duration-500 pt-[120px] ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
