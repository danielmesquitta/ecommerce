import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

import Header from './components/Header';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          header: () => <Header />,
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
