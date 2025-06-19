import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/homescreen';
import ButtonRoutes from './button.routes';
import NewCommandScreen from '../screens/new_command'

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator 
    initialRouteName="home" 
    screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="home" 
        component={Home} 
      />
      <Stack.Screen
        name="command"
        component={ButtonRoutes}
      />
      <Stack.Screen 
      name="NewCommand" 
      component={NewCommandScreen} 
      options={{ title: 'Novo Pedido' }} />
    </Stack.Navigator>
  );
}
