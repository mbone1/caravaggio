import React, { useState, createContext, useContext } from "react";

export const CounterContext = createContext();
export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(0);
  return (
    <CounterContext.Provider
      value={[counter, setCounter]}
      {...props}></CounterContext.Provider>
  );
};
export const useCounterStore = () => useContext(CounterContext);
