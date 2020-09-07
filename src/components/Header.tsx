import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Instagram</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    position: "absolute",
    top: 0,
    height: 120,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
});
export default Header;
