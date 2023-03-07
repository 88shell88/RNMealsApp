/** @format */

import { View, Text, StyleSheet } from "react-native";

function List({ data }) {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 4,
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: "#ccc",
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#888",
  },
});
