import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screen/Home';
import Detail from '../Screen/Detail';

import Tabs from './Tabs';
import NoticeBbs from '../BBS/NoticeBbs';
import NcsBbs from '../BBS/NcsBbs';
import PsatBbs from '../BBS/PsatBbs';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Main"
    >
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="Detail" component={Detail} />
        {/* <Stack.screen name="Noticebbs" component={NoticeBbs} /> */}
        {/* <Stack.Screen name="Ncs" component={NcsBbs}  /> */}
        {/* <Stack.Screen name="Psat" component={PsatBbs} /> */}
    </Stack.Navigator>
);
