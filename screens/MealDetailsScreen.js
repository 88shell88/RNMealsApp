/** @format */

import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { useLayoutEffect } from "react"; // not recomended, only for very specific use cases as parent renders may have not been called
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const mId = route.params.mealId; // can use useRoute hook
  const meal = MEALS.find((meal) => meal.id === mId);

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mId).title;
    navigation.setOptions({ title: mealTitle });
  }, [navigation, mId]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />

      <Text>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{meal.duration}m</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text>Ingredients</Text>
      <Text>Steps</Text>
    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
