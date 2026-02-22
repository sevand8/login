import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import React from "react"

type ButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`py-3 rounded-xl items-center ${
        disabled ? 'bg-gray-400' : 'bg-blue-600'
      }`}
    >
      <Text className="text-white font-bold text-lg">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
