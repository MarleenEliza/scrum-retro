import React, { createContext, useState, ReactNode, useContext } from "react";
import { RetroTicket, RetroCategory } from "@/types/RetroScrum";

/**
 * Context for RetroScrum.
 * - can add a ticket to a specific category
 * - can remove a ticket from a specific category
 * All data handling is done with the usage of indexes because of the small scale of the app. In a larger context, I would opt for unique IDs
 */
interface RetroScrumContextProps {
  categories: RetroCategory[];
  addTicketToCategory: (categoryIndex: number, ticket: RetroTicket) => void;
  removeTicketFromCategory: (
    categoryIndex: number,
    ticketIndex: number
  ) => void;
}

const RetroScrumContext = createContext<RetroScrumContextProps | undefined>(
  undefined
);

/**
 * Provider component
 */
export const RetroScrumProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<RetroCategory[]>([
    { title: "Good", tickets: [] },
    { title: "Bad", tickets: [] },
    { title: "Actions", tickets: [] },
    { title: "Ideas", tickets: [] },
  ]);

  /**
   * Function to add a RetroTicket to a RetroCategory by index
   */
  const addTicketToCategory = (categoryIndex: number, ticket: RetroTicket) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[categoryIndex].tickets.push(ticket);
      return updatedCategories;
    });
  };

  /**
   * Function to remove a RetroTicket to a RetroCategory by index
   */
  const removeTicketFromCategory = (
    categoryIndex: number,
    ticketIndex: number
  ) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[categoryIndex].tickets.splice(ticketIndex, 1);
      return updatedCategories;
    });
  };

  return (
    <RetroScrumContext.Provider
      value={{ categories, addTicketToCategory, removeTicketFromCategory }}
    >
      {children}
    </RetroScrumContext.Provider>
  );
};

/**
 * Hook for easier acces
 */
export const useRetroScrumContext = () => {
  const context = useContext(RetroScrumContext);
  if (context === undefined) {
    throw new Error(
      "useRetroScrumContext must be used within a RetroScrumProvider"
    );
  }
  return context;
};
