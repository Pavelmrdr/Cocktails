import { CocktailProps } from "./CocktailCard.types";

const CocktailCard = ({
  onClick,
  cocktail,
}: {
  onClick: () => void;
  cocktail: CocktailProps;
}) => {
  return (
    <div>
      <article
        onClick={onClick}
        className="flex flex-col justify-start items-stretch w-1/7 bg-white border-2 border-white rounded-lg p-2 mb-16 relative hover:cursor-pointer"
      >
        <img
          className="min-h-32 object-center w-full block h-48 object-cover"
          src={cocktail.strDrinkThumb}
          alt="cocktail image"
        />
        <h3 className="absolute bottom-0 right-0 bg-black text-white p-4 text-center mb-0 uppercase font-mono text-lg rounded">
          {cocktail.strDrink}
        </h3>
      </article>
    </div>
  );
};

export default CocktailCard;
