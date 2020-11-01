import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Save from '../Screen/Save';
import Setting from '../Screen/Setting';

const Tabs = createBottomTabNavigator();

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Save" component={Save} />
        <Tabs.Screen name="Setting" component={Setting} />
    </Tabs.Navigator>
)