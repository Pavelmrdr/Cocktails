import CocktailDetailsScreen from "@/screens/CocktailDetailsScreen/CocktailDetailsScreen";
import { useRouter } from "next/router";

const CocktailsDetailsPage = () => {
  const router = useRouter();

  const cocktailID: string = router.query.cocktailId as string;

  return cocktailID && <CocktailDetailsScreen cocktailID={cocktailID} />;
};

export default CocktailsDetailsPage;
