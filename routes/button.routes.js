import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Command from '../screens/command';

const Tab = createBottomTabNavigator();

export default function ButtonRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="command" component={Command} 
      options={{tabBarButton: () => null}}
        />
    </Tab.Navigator>
  );
}
