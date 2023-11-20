import { useState } from "react";
import { All_COCKTAILS_ENDPOINT } from "@/constants/apiEndpoints";
import useFetchHook from "@/hooks/useSearchCocktails";
import { useRouter } from "next/router";
import { CocktailProps } from "./CocktailCard/CocktailCard.types";
import SearchBox from "./SearchBox/SearchBox";
import CocktailCard from "./CocktailCard/CocktailCard";

const SearchCocktailScreen = () => {
  const [searchText, setSearchText] = useState("a");
  const router = useRouter();

  const {
    data,
    error: fetchError,
    isLoading,
  } = useFetchHook(All_COCKTAILS_ENDPOINT + searchText);

  const allCocktails = data?.drinks;

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  if (fetchError) {
    return <div>Error: {fetchError.message}</div>;
  }

  return (
    <div className=" flex flex-col mx-auto">
      <h1>Cocktails API</h1>
      <SearchBox handleSearch={handleSearch} />
      <div>{isLoading && "LOADING..."}</div>
      <div className="flex flex-row justify-around flex-wrap p-20 mt-50">
        {allCocktails && allCocktails.length ? (
          allCocktails.map((cocktail: CocktailProps) => (
            <CocktailCard
              key={cocktail.idDrink}
              onClick={() => {
                router.push(`/${cocktail.idDrink}`);
              }}
              cocktail={cocktail}
            />
          ))
        ) : (
          <h3>Sorry, No Drinks Matched Your Search</h3>
        )}
      </div>
    </div>
  );
};

export default SearchCocktailScreen;
