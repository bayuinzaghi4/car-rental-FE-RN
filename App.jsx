import HomeScreen from './src/screens/Home';
import CartScreen from './src/screens/Cart';
import ListScreen from './src/screens/List';
import Profilecreen from './src/screens/Profile';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Detail from './src/screens/Detail';

import Icon from 'react-native-vector-icons/Feather';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name={"home"} size={25} color="#A43333" />
      }} 
      name="Home" component={HomeScreen} />
      <Tab.Screen 
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name={"list"} size={25} color="#A43333" />
      }} 
      name="List" component={ListScreen} />
      <Tab.Screen 
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name={"shopping-cart"} size={25} color="#A43333" />
      }} 
      name="Cart" component={CartScreen} />
      <Tab.Screen 
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name={"user"} size={25} color="#A43333" />
      }} 
      name="Profile" component={Profilecreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }} name='HomeTabs' component={BottomTabs} />
        <Stack.Screen options={{
          headerShown: false
        }} name='SignIn' component={SignIn} />
        <Stack.Screen options={{
          headerShown: false
        }} name='SignUp' component={SignUp} />
        <Stack.Screen options={{
          headerShown: false
        }} name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
