import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  onPress: Function;
  outline?: boolean;
  text?: string;
}

export default function Button({
  onPress,
  outline = false,
  text = 'Press Here',
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
  },
});
