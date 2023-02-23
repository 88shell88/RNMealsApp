/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react"; // not recomended, only for very specific use cases as parent renders may have not been called
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId; // can use useRoute hook

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catId]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    function pressHandler() {
      navigation.navigate("MealDetails", { mealId: itemData.item.id });
    }

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onPress: pressHandler,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(itemData) => itemData.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
