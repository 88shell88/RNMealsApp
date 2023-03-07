/** @format */

import { FlatList, StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useLayoutEffect } from "react"; // not recomended, only for very specific use cases as parent renders may have not been called
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

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

      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        affordability={meal.affordability}
        textStyle={styles.textStyle}
      />
      <ScrollView style={{ maxWidwidt: "80%" }}>
        <Subtitle>Ingredients</Subtitle>
        <List data={meal.ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={meal.steps} />
      </ScrollView>
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
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },

  item: {
    color: "white",
  },
});
