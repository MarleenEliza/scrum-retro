// @/components/molecules/RetroTicketForm.tsx

import { useState } from "react";
import { RetroTicketInput } from "components/atoms/RetroTicketInput";
import { TheButton } from "components/atoms/TheButton";

interface RetroTicketFormProps {
  onCancel: () => void;
  onConfirm: (inputValue: string) => void;
}

export const RetroTicketForm: React.FC<RetroTicketFormProps> = ({
  onCancel,
  onConfirm,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.length >= 3) {
      onConfirm(inputValue);
      setInputValue("");
    } else {
      alert("Input must be at least 3 characters long.");
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      aria-label="Retro ticket creation form"
      className="p-4 bg-gray-50 border border-gray-300 rounded shadow-md"
    >
      <RetroTicketInput value={inputValue} onChange={handleInputChange} />
      <div className="flex justify-end mt-3 space-x-2">
        <TheButton ariaLabel="Cancel ticket creation" clickFunction={onCancel}>
          Cancel
        </TheButton>
        <TheButton
          ariaLabel="Confirm ticket creation"
          clickFunction={handleFormSubmit}
          type="submit"
        >
          Add Ticket
        </TheButton>
      </div>
    </form>
  );
};
