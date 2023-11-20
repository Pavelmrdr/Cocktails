import Link from "next/link";
import useFetchHook from "@/hooks/useCocktailDetails";
import { COCKTAILS_DETAILS_ENDPOINT } from "@/constants/apiEndpoints";

const CocktailDetailsScreen = ({ cocktailID }: { cocktailID: string }) => {
  const {
    data,
    error: error,
    isLoading,
  } = useFetchHook(COCKTAILS_DETAILS_ENDPOINT + cocktailID);

  const cocktailDetails = data.drinks?.[0];

  const availableIngredients = Object.entries(cocktailDetails || {})
    .filter(([key, value]) => key.startsWith("strIngredient") && value !== null)
    .map(([key, value]) => value as string);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-lg">
        <h1 className="text-3xl font-bold mb-4">{cocktailDetails?.strDrink}</h1>
        <p className="mb-4">{cocktailDetails?.strInstructions}</p>
        <ul className="mb-4">
          {availableIngredients.map((ingredient: any, index: number) => (
            <li key={index} className="list-none mb-2">
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <img
            className="rounded-lg shadow-md"
            src={cocktailDetails?.strDrinkThumb}
            alt="Cocktail Image"
          />
        </div>
        <Link href="/">ALL COCKTAILS</Link>
      </div>
    </div>
  );
};

export default CocktailDetailsScreen;
