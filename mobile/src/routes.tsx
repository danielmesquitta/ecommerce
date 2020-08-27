import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Home from './pages/Home';
import Cart from './pages/Cart';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
