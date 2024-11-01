interface RetroTicketProps {
  title: string;
  numberOfVotes: number;
  onVote: () => void;
  onRemove: () => void;
}

export const RetroTicket: React.FC<RetroTicketProps> = ({
  title,
  numberOfVotes,
  onVote,
  onRemove,
}) => {
  return (
    <div
      className="p-4 bg-white border border-gray-300 rounded shadow-md mb-4"
      aria-label={`Retro ticket: ${title}`}
      role="region"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          aria-label="Remove ticket"
          onClick={onRemove}
          className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          ✕ {/* This symbol indicates a remove button */}
        </button>
      </div>
      <div className="flex items-center">
        <button
          aria-label="Vote for this ticket"
          onClick={onVote}
          className="px-2 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Vote
        </button>
        <span
          className="ml-2 text-sm text-gray-600"
          aria-live="polite"
          aria-atomic="true"
        >
          {numberOfVotes} votes
        </span>
      </div>
    </div>
  );
};
