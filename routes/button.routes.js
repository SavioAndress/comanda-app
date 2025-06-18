import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../screens/list';

const Tab = createBottomTabNavigator();

export default function ButtonRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pedidos" component={List} />
    </Tab.Navigator>
  );
}
