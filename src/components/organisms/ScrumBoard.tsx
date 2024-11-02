import { RetroCategoryType } from "@/types/RetroScrum";
import { RetroCategory } from "components/organisms/RetroCategory";

interface ScrumBoardProps {
  content: RetroCategoryType[];
}

export const ScrumBoard: React.FC<ScrumBoardProps> = ({ content }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {content.map((category, index) => (
        <RetroCategory
          key={index}
          categoryIndex={index}
          title={category.title}
          tickets={category.tickets}
        />
      ))}
    </div>
  );
};
