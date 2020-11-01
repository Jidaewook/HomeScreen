import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);
