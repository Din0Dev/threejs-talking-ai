import React, { createContext, useContext, useState } from "react";

const TalkContext = createContext();

export const TalkProvider = ({ children }) => {
  const [talk, setTalk] = useState("Welcome");

  const updateTalk = (newTalk) => {
    setTalk(newTalk);
  };

  return (
    <TalkContext.Provider value={{ talk, updateTalk }}>
      {children}
    </TalkContext.Provider>
  );
};

export const useTalk = () => useContext(TalkContext);
