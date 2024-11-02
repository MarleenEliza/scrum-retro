interface RetroTicketInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RetroTicketInput: React.FC<RetroTicketInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter ticket text"
      aria-label="Retro ticket input"
      className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
