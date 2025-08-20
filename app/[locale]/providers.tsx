"use client";
import { createContext } from "react";
import { PropsWithChildren } from "react";

export const LocaleContext = createContext("fr");

export const Providers = (props: PropsWithChildren<{ locale: string }>) => {
  return (
    <LocaleContext.Provider value={props.locale}>
      {props.children}
    </LocaleContext.Provider>
  );
};