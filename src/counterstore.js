import React, { useState, createContext, useContext } from "react";

export const CounterContext = createContext();
export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(false);
  return (
    <ActiveContext.Provider
      value={[counter, setCounter]}
      {...props}></ActiveContext.Provider>
  );
};
export const useCounterStore = () => useContext(CounterContext);
