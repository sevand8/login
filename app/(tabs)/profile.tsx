import BurgerStack from '@/components/burger/BurgerStack';
import React, { useState } from "react";
import { Button, View } from 'react-native';

export default function Profile() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Agregar Carne" onPress={() => setIngredients([...ingredients, 'carne'])} />
      <Button title="Agregar Queso" onPress={() => setIngredients([...ingredients, 'queso'])} />
      <Button title="Agregar Lechuga" onPress={() => setIngredients([...ingredients, 'lechuga'])} />
      <Button title="Agregar Tomate" onPress={() => setIngredients([...ingredients, 'tomate'])} />
      <Button title="Quitar último" onPress={() => setIngredients(ingredients.slice(0, -1))} />

      <BurgerStack ingredients={ingredients} />
    </View>
  );
}
