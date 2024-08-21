"use client";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const userContext = {
    isLoading,
    setIsLoading,
    isSidebarOpen,
    setIsSidebarOpen,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
