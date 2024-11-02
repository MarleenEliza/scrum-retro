import { MouseEventHandler } from "react";

// @/components/atoms/TheButton.tsx
interface TheButtonProps {
  ariaLabel: string;
  clickFunction: MouseEventHandler;
  type?: HTMLButtonElement["type"];
  children: React.ReactNode;
  variant?: "confirm" | "cancel" | "default";
}

const STYLING_BY_VARIANT = {
  confirm:
    "bg-green-500 text-white rounded hover:bg-green-600 focus:ring-green-400",
  cancel: "bg-gray-200 rounded hover:bg-gray-400 focus:ring-gray-400",
  default:
    "bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-blue-400",
} as const;

export const TheButton: React.FC<TheButtonProps> = ({
  ariaLabel,
  clickFunction,
  children,
  variant = "default",
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={clickFunction}
      className={`${STYLING_BY_VARIANT[variant]} px-4 py-2 focus:ring-2 focus:outline-none`}
    >
      {children}
    </button>
  );
};
