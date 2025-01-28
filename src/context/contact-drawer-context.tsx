"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface ContactDrawerData {
  isOpen: boolean;
  handleOpen: (open_state: boolean) => void;
}

const ContactDrawerContext = createContext({} as ContactDrawerData);

interface ContactDrawerContextProps {
  children: React.ReactNode;
}

export function ContactDrawerProvider({ children }: ContactDrawerContextProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(
    (open_state: boolean) => {
      setIsOpen(open_state);
    },
    [setIsOpen]
  );

  return (
    <ContactDrawerContext.Provider value={{ isOpen, handleOpen }}>
      {children}
    </ContactDrawerContext.Provider>
  );
}

export const useContactConfirmationDrawer = () =>
  useContext(ContactDrawerContext);
