import React from "react";
import MyContext from "./MyContext";

const MyStateContext = () => {
  const yojana = {
    pansion: 600,
    work: 700,
    narega: 900,
    
  };
  return <MyContext.Provider value={{yojana}}>
    {probs.children}
  </MyContext.Provider>
};

export default MyStateContext;
