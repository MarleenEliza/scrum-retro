interface VoteSymbolProps {
  variant: "default" | "primary" | "empty";
}
const STYLING = {
  primary: "bg-blue-500",
  default: "bg-gray-500",
  empty: "border-2 border-gray-200",
} as const;

export const VoteSymbol: React.FC<VoteSymbolProps> = ({ variant }) => {
  return (
    <li
      className={`w-6 h-6 rounded-full ${STYLING[variant]} flex items-center justify-center`}
      aria-label="Vote symbol"
      role="img"
    ></li>
  );
};
