import React, { Component } from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import Header from "../components/Header";
import Button from "../components/Button";

export default class Profile extends Component {
  onPress = () => {
    console.log("Button PRESSED");
  };
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>USER PROFILE</Text>
        <Button onPress={this.onPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d09da6",
    alignItems: "center",
    justifyContent: "center",
  },
});
