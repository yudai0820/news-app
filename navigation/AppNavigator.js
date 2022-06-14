import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import StarScreen from '../screens/StarScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Article' component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const StarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Star' component={StarScreen} />
      <Stack.Screen name='Article' component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Star') {
      iconName = 'star';
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default AppNavigaotor = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Star'
          component={StarStack}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
