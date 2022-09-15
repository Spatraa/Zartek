import React, { createContext, useState } from "react";
export const Data = createContext();

const ContextAPI = ({ children }) => {
  const [info, setInfo] = useState("i need to be updated from my child");

  return <Data.Provider value={{ info, setInfo }}>{children}</Data.Provider>;
};

export default ContextAPI;