import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import More from '../screens/More';
import HomeScreen from '../screens/HomeScreen';
import {Cart} from '../screens/Cart';
import {WishList} from '../screens/WishList';

const Main = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="WishList"
        component={WishList}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="More"
        component={More}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
};

export default Main;
