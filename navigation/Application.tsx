import React from 'react';
import MainNavigator from './Main';
import {Onboarding} from '../onboarding/Onboarding';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/ProfileScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {ProductDetail} from '../screens/ProductDetail';
import {Checkout} from '../screens/Checkout';
import {DeliveryDetails} from '../screens/DeliveryDetails';
import {Invoice} from '../screens/Invoice';
import Login from '../screens/Login';
import Signup from '../screens/Signup';

const Application = () => {
  const Stack = createStackNavigator();
  // const user = useSelector((state: RootState) => state.userDetails.userName);
  const token = useSelector(
    (state: RootState) => state.userDetails.authenticationToken,
  );
  console.log('token!!', token);
  return (
    <Stack.Navigator>
      {!token && (
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
      )}
      <Stack.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Application;
