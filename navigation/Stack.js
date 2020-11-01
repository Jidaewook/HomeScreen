import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
);
