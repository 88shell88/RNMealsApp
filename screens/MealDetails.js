/** @format */

import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react"; // not recomended, only for very specific use cases as parent renders may have not been called
import { MEALS } from "../data/dummy-data";

function MealsDetailsScreen({ route, navigation }) {
  const mId = route.params.mealId; // can use useRoute hook


  useLayoutEffect(() => {
    const mealTitle = MEALS.find(
      (meal) => meal.id === mId
    ).title;
    navigation.setOptions({ title: mealTitle });
  }, [navigation, mId]);

  

  return (
    <View style={styles.container}>
      <Text>Dummy text</Text>
    </View>
  );
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
