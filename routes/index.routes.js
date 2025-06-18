import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/homescreen'; // ou Comanda, como preferir
import ButtonRoutes from './button.routes'; // rota com abas

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs"
        component={ButtonRoutes}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
