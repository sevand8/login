import { View, Text, TouchableOpacity } from 'react-native';
import React from "react"

const INGREDIENTS = [
  { id: 'carne', label: '🥩 Carne' },
  { id: 'queso', label: '🧀 Queso' },
  { id: 'lechuga', label: '🥬 Lechuga' },
  { id: 'tomate', label: '🍅 Tomate' },
];

export default function Ingredients({
  onAdd,
  onRemove,
}: {
  onAdd: (id: string) => void;
  onRemove: () => void;
}) {
  return (
    <View className="mt-4">
      <Text className="text-white text-lg font-bold mb-3 text-center">
        Ingredientes
      </Text>

      <View className="flex-row flex-wrap justify-center gap-2">
        {INGREDIENTS.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onAdd(item.id)}
            className="bg-emerald-600 px-4 py-2 rounded-xl"
          >
            <Text className="text-white font-semibold">
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={onRemove}
          className="bg-red-600 px-4 py-2 rounded-xl"
        >
          <Text className="text-white font-semibold">
            ❌ Quitar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
