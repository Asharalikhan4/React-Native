import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../Store/context/favourites";

const FavuriteScreen = () => {
  const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteMealsCtx?.ids?.includes(meal?.id),
  );
  
  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }
  
  return <MealsList items={favouriteMeals} />;
};

export default FavuriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  }
});
