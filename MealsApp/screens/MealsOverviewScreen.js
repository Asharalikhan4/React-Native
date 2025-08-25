import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// we can also implement the route thing using the hok also
import { useRoute } from "@react-navigation/native"; // main difference between the two is we can use hook if the screen is not defined.
import MealItem from "../components/MealList/MealItem";
import MealsList from "../components/MealList/MealsList";

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // Setting header dynamically
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <MealsList items={displayedMeals} />
  );
};

export default MealsOverviewScreen;