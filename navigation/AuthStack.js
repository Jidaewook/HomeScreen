import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SigninScreen from '../Screen/auth/SigninScreen';
import SignupScreen from '../Screen/auth/SignupScreen';
import ForgotScreen from '../Screen/auth/ForgotpasswordScreen';
import MainStack from '../navigation/Stack';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SigninScreen"
    >
        <Stack.Screen name="SigninScreen" component={SigninScreen}  />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotpasswordScreen" component={ForgotScreen} />
        <Stack.Screen name="MainStack" component={MainStack} />

    </Stack.Navigator>
);