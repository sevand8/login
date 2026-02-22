import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import React from "react"

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export default function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <View className="relative mb-4">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry && !visible}
        placeholderTextColor="#9CA3AF"
        className="border border-slate-300 rounded-xl px-4 py-3 text-black bg-white"
      />

      {secureTextEntry && (
        <TouchableOpacity
          onPress={() => setVisible(!visible)}
          className="absolute right-4 top-3"
        >
          <Text className="text-blue-600">
            {visible ? 'Ocultar' : 'Ver'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
