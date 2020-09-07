import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  onPress: any;
  outline?: boolean;
  text?: string;
}

export default function Button({
  onPress,
  outline = false,
  text = 'Press Here',
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
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
    margin: 10,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
  },
});
