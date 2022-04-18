import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

import { singleBusiness } from '../interfaces/interfaces';
import Home from '../screen/Home';
import RestaurantDeatails from '../screen/RestaurantDeatails';
import OrderCompleted from '../screen/OrderCompleted';

const Stack = createStackNavigator();
LogBox.ignoreLogs(["react-native-gesture-handler","ViewPropTypes will be removed","ViewPropTypes will be removed from React Native.",]);

interface usdCash {
    totalUSD: any,
}

export type RootStackParam = {
    Home: undefined,
    RestaurantDeatails: singleBusiness,
    OrderCompleted: usdCash,
}

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDeatails" component={RestaurantDeatails} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>

    )
}

export default StackNavigation