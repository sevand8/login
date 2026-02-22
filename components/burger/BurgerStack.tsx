import React from "react";

import { View } from 'react-native';

type Props = {
  ingredients: string[];
};

export default function BurgerStack({ ingredients }: Props) {
  const getColor = (item: string) => {
    switch (item) {
      case 'carne':
        return '#7f1d1d';
      case 'queso':
        return '#facc15';
      case 'lechuga':
        return '#22c55e';
      case 'tomate':
        return '#ef4444';
      default:
        return '#ccc';
    }
  };

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
        marginTop: 40,
      }}
    >
      {ingredients.map((item, index) => (
        <View
          key={index}
          style={{
            width: 200,
            height: 30,
            backgroundColor: getColor(item),
            borderRadius: 20,
            marginBottom: 5,
          }}
        />
      ))}
    </View>
  );
}
