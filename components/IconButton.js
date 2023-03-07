/** @format */

import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}
export default IconButton;

const styles = StyleSheet.create({
  pressed: { color: "black" },
});
