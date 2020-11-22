import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Profile from '../Screen/Profile';
import Account from '../Screen/ProfileDetail/Account';
import Agreement from '../Screen/ProfileDetail/Agreement';
import Check from '../Screen/ProfileDetail/Check';
import SendMessage from '../Screen/ProfileDetail/SendMessage';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Profile"
    >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Agreement" component={Agreement} />
        <Stack.Screen name="Check" component={Check} />
        

    </Stack.Navigator>
)

;