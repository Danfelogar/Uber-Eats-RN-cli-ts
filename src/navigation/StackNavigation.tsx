import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';

import { arrayLocalRestaurants, PropsFoods, singleBusiness } from '../interfaces/interfaces';
import Home from '../screen/Home';
import RestaurantDeatails from '../screen/RestaurantDeatails';

const Stack = createStackNavigator();
LogBox.ignoreLogs(['react-native-gesture-handler'])

export type RootStackParam = {
    Home: undefined,
    RestaurantDeatails: singleBusiness,
}

const StackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RestaurantDeatails" component={RestaurantDeatails} />
        </Stack.Navigator>

    )
}

export default StackNavigation