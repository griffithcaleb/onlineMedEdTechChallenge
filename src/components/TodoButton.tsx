import { StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import React, { FC } from 'react';

interface TodoButtonProps {
  title: string;
  onButtonPress: () => void;
  buttonStyle: StyleProp<ViewStyle>;
  titleStyle: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const TodoButton: FC<TodoButtonProps> = (
  {buttonStyle, titleStyle, title, onButtonPress, disabled}) => {
  return (
    <TouchableOpacity
      disabled={disabled && disabled || false}
      onPress={onButtonPress}
      style={buttonStyle}
    >
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
