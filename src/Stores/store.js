import React, { useState, createContext, useContext } from "react";

export const ActiveContext = createContext();
export const ActiveProvider = (props) => {
  const [active, setActive] = useState(true);
  return (
    <ActiveContext.Provider
      value={[active, setActive]}
      {...props}></ActiveContext.Provider>
  );
};
export const useActiveStore = () => useContext(ActiveContext);
