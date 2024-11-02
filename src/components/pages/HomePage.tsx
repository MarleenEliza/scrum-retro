import { useRetroScrumContext } from "context/RetroScrumContext";
import { ScrumBoard } from "components/organisms/ScrumBoard";

export const HomePage: React.FC = () => {
  const { categories } = useRetroScrumContext();

  return (
    <div className="my-4 mx-6 lg:mx-8 lg:my-6">
      <h1 className="font-bold text-2xl mb-4">Home Page</h1>
      <ScrumBoard content={categories}></ScrumBoard>
    </div>
  );
};
