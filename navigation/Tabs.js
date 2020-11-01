import React, {useLayoutEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Save from '../Screen/Save';
import Setting from '../Screen/Setting';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native';

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
                    } else if (route.name === "Setting") {
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
            <Tabs.Screen 
                name="Home" 
                component={Home} 
                
            />
            <Tabs.Screen name="Save" component={Save} />
            <Tabs.Screen name="Setting" component={Setting} />
        </Tabs.Navigator>
    )
}