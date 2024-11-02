import { useAuthContext } from "context/AuthContext";
import { VoteSymbol } from "components/atoms/VoteSymbol";
import { RetroTicketType } from "types/RetroScrum";
import { useMemo } from "react";
interface RetroTicketProps {
  title: string;
  votes: RetroTicketType["votes"];
  onVote: () => void;
  onRemove: () => void;
  onRemoveVote: () => void;
}

export const RetroTicket: React.FC<RetroTicketProps> = ({
  title,
  votes,
  onVote,
  onRemove,
  onRemoveVote,
}) => {
  const DETAILS_BY_VOTE = {
    voted: {
      voteButton: {
        "aria-label": "Remove vote",
        onClick: onRemoveVote,
      },
    },
    unvoted: {
      voteButton: {
        "aria-label": "Add vote",
        onClick: onVote,
      },
    },
  } as const;

  const { token } = useAuthContext();
  const isVotedByUser = useMemo(() => {
    return token && votes.has(token) ? "voted" : "unvoted";
  }, [token, votes]);

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
          className="text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 mb-auto ml-2"
        >
          ✕
        </button>
      </div>
      <button
        className="flex items-center"
        {...DETAILS_BY_VOTE[isVotedByUser].voteButton}
      >
        <ul className="flex gap-2">
          {votes.size > 0 ? (
            Array.from(votes).map((vote, voteIndex) => (
              <VoteSymbol
                variant={vote === token ? "primary" : "default"}
                key={voteIndex}
              ></VoteSymbol>
            ))
          ) : (
            <VoteSymbol variant="empty"></VoteSymbol>
          )}
        </ul>
      </button>
    </div>
  );
};
