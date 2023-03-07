/** @format */

import { StyleSheet, Text, View } from "react-native";
function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: "bold",
    color: "#ccc",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    padding: 6,
    margin: 4,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginHorizontal: 24,
    marginVertical: 4,
  },
});
