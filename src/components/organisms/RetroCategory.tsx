import { RetroCategoryType } from "types/RetroScrum";
import { RetroTicket } from "components/molecules/RetroTicket";
import { useRetroScrumContext } from "context/RetroScrumContext";
import { useAuthContext } from "context/AuthContext";
import { TheButton } from "components/atoms/TheButton";
import { useState } from "react";
import { RetroTicketForm } from "../molecules/RetroTicketForm";

type RetroCategoryProps = {
  categoryIndex: number;
} & RetroCategoryType;

export const RetroCategory: React.FC<RetroCategoryProps> = ({
  title,
  tickets,
  categoryIndex,
}) => {
  const {
    addVoteToTicket,
    removeVoteFromTicket,
    addTicketToCategory,
    removeTicketFromCategory,
  } = useRetroScrumContext();
  const { token } = useAuthContext();
  const [isNewTicketForm, setIsNewTicketForm] = useState(false);
  const toggleIsNewTicketForm = () => {
    setIsNewTicketForm(!isNewTicketForm);
  };

  const onVote = (ticketIndex: number) => {
    try {
      if (!token) throw Error("unable to acces token for voting");
      addVoteToTicket(categoryIndex, ticketIndex, token);
    } catch (error) {
      console.error("error occured while voting");
      console.log(error);
    }
  };

  const onRemoveVote = (ticketIndex: number) => {
    try {
      if (!token) throw Error("unable to acces token for voting");
      removeVoteFromTicket(categoryIndex, ticketIndex, token);
    } catch (error) {
      console.error("error occured while removing vote");
      console.log(error);
    }
  };
  const onAddTicket = (inputValue: string) => {
    addTicketToCategory(categoryIndex, {
      title: inputValue,
      votes: new Set(),
    });
    setIsNewTicketForm(false);
  };

  return (
    <section
      aria-labelledby={`retro-category-${title}`}
      className="p-4 bg-gray-50 border border-gray-300 rounded shadow-md mb-6"
    >
      <h2
        id={`retro-category-${title}`}
        className="text-xl font-bold text-gray-800 mb-4"
      >
        {title}
      </h2>
      {tickets.length > 0 ? (
        tickets.map((ticket, index) => (
          <RetroTicket
            key={index}
            title={ticket.title}
            votes={ticket.votes}
            onVote={() => onVote(index)}
            onRemoveVote={() => onRemoveVote(index)}
            onRemove={() => removeTicketFromCategory(categoryIndex, index)}
          />
        ))
      ) : (
        <p className="text-gray-600 mb-2">No tickets yet</p>
      )}
      {isNewTicketForm ? (
        <RetroTicketForm
          onCancel={toggleIsNewTicketForm}
          onConfirm={onAddTicket}
        ></RetroTicketForm>
      ) : (
        <TheButton
          ariaLabel="Add new ticket"
          type="button"
          variant="default"
          clickFunction={toggleIsNewTicketForm}
        >
          Add Ticket
        </TheButton>
      )}
    </section>
  );
};
