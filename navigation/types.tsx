import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Onboarding: undefined;
  MainNavigator: NavigatorScreenParams<MainTabParamList>;
  Profile: undefined;
  ProductDetail: {product: {}} | undefined;
  Checkout: undefined;
  DeliveryDetails: undefined;
  Invoice: {details: {}; products: {}} | undefined;
  Login: undefined;
  Signup: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  WishList: {product: {}} | undefined;
  Cart: undefined;
  More: undefined;
};
