import React, { createContext, useState, ReactNode, useContext } from "react";
import { RetroTicketType, RetroCategoryType } from "@/types/RetroScrum";

/**
 * Context for RetroScrum.
 * - can add a ticket to a specific category
 * - can remove a ticket from a specific category
 * - can add or remove a vote to/from a ticket
 */
interface RetroScrumContextProps {
  categories: RetroCategoryType[];
  addTicketToCategory: (categoryIndex: number, ticket: RetroTicketType) => void;
  removeTicketFromCategory: (
    categoryIndex: number,
    ticketIndex: number
  ) => void;
  addVoteToTicket: (
    categoryIndex: number,
    ticketIndex: number,
    token: string
  ) => void;
  removeVoteFromTicket: (
    categoryIndex: number,
    ticketIndex: number,
    token: string
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
  const [categories, setCategories] = useState<RetroCategoryType[]>([
    { title: "Good", tickets: [] },
    { title: "Bad", tickets: [] },
    { title: "Actions", tickets: [] },
    { title: "Ideas", tickets: [] },
  ]);

  const addTicketToCategory = (
    categoryIndex: number,
    ticket: RetroTicketType
  ) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[categoryIndex].tickets.push(ticket);
      return updatedCategories;
    });
  };

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

  const addVoteToTicket = (
    categoryIndex: number,
    ticketIndex: number,
    token: string
  ) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      const ticket = updatedCategories[categoryIndex].tickets[ticketIndex];

      // Add the token if it doesn't already exist in the set
      if (!ticket.votes.has(token)) {
        ticket.votes.add(token);
      }

      return updatedCategories;
    });
  };

  const removeVoteFromTicket = (
    categoryIndex: number,
    ticketIndex: number,
    token: string
  ) => {
    setCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      const ticket = updatedCategories[categoryIndex].tickets[ticketIndex];

      // Remove the token if it exists in the set
      if (ticket.votes.has(token)) {
        ticket.votes.delete(token);
      }

      return updatedCategories;
    });
  };

  return (
    <RetroScrumContext.Provider
      value={{
        categories,
        addTicketToCategory,
        removeTicketFromCategory,
        addVoteToTicket,
        removeVoteFromTicket,
      }}
    >
      {children}
    </RetroScrumContext.Provider>
  );
};

/**
 * Hook for easier access
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
