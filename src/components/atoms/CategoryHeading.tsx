interface CategoryHeadingProps {
  children: React.ReactNode;
}

export const CategoryHeading: React.FC<CategoryHeadingProps> = ({
  children,
}) => {
  return (
    <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
      {children}
    </h2>
  );
};
