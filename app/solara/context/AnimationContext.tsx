"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  startHeroAnimation: boolean;
  setStartHeroAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const [startHeroAnimation, setStartHeroAnimation] = useState(false);

  return (
    <AnimationContext.Provider
      value={{ startHeroAnimation, setStartHeroAnimation }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error(
      "useAnimationContext must be used within an AnimationProvider"
    );
  }
  return context;
};
