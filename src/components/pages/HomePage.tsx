import { useRetroScrumContext } from "context/RetroScrumContext";
import { ScrumBoard } from "components/organisms/ScrumBoard";

export const HomePage: React.FC = () => {
  const { categories } = useRetroScrumContext();

  return (
    <div>
      <h1>Home Page</h1>
      <ScrumBoard content={categories}></ScrumBoard>
    </div>
  );
};
