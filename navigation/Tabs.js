import React, {useLayoutEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Save from '../Screen/Save';
import Setting from '../Screen/Setting';
import Stack from './Stack';
import ProfileStack from '../navigation/ProfileStack';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';
import NoticeStack from "../navigation/NoticeStack";

const Tabs = createBottomTabNavigator();

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";

export default ({navigation, route}) => {
    useLayoutEffect(() => {
        const name = getHeaderName(route);
        navigation.setOptions({
            title: name
        });
    }, [route]);

    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
                    if (route.name === "Home") {
                        iconName += "home";
                    } else if (route.name === "Save") {
                        iconName += "save";
                    } else if (route.name === "Profile") {
                        iconName += "settings"
                    }
                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? "red" : "grey"}
                            size={24}
                        />  
                    );
                }
            })}
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tabs.Screen name="Profile" component={ProfileStack} />

            <Tabs.Screen 
                name="Home" 
                component={Home} 
                
            />
            <Tabs.Screen name="Save" component={Save} />
            {/* <Tabs.Screen name="Profile" component={Profile} /> */}
        </Tabs.Navigator>
    )
}