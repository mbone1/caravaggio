import React, { useState, createContext, useContext } from "react";

export const RotateContext = createContext();
export const RotateProvider = (props) => {
  const [rotate, setRotate] = useState();
  return (
    <RotateContext.Provider
      value={[rotate, setRotate]}
      {...props}></RotateContext.Provider>
  );
};
export const useRotateStore = () => useContext(RotateContext);
