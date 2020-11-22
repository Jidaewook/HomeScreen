import React, {useState} from 'react';
import { 
    View, Text, TouchableHighlight, TouchableWithoutFeedback, Switch
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {EvilIcons, MaterialIcons} from '@expo/vector-icons';
import styled from 'styled-components';
import themes from '../../config/themes';

const Container = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    ${Platform.select({
        ios: {
            fontFamily: "Avenir",
        },
        android: {
            fontFamily: "Roboto",
        },
    })};
`;

const TripContainer = styled.View`
    background-color: white;
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    ${Platform.select({
        ios: {
            fontFamily: "Avenir",
        },
        android: {
            fontFamily: "Roboto",
        },
    })};
`;

const SingleContainer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
    margin-right: 15px;
`;

const Marker = styled.View`
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: ${themes.colors.view};
    border-radius: 8px;
    border: 1px solid ${themes.colors.view};
    margin-right: 15px;
`;

const Icon = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`;

const ProfileContainer = styled.View`
    flex: 1;
`;

const FirstLine = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

const ProfileTitle = styled.Text`
    font-size: 16px;
    color: ${themes.colors.view};
    margin-bottom: 6px;
`;

const ProfileSubTitle = styled.Text`
    font-size: 13px;
    color: ${themes.colors.view};
`;

export const ListItem = ({
    RightActions,
    onPress,
    image,
    title,
    subtitle,
    arrow
}) => {
    return (
        <Swipeable
            renderRightActions={RightActions}
            
        >
            <TouchableHighlight
                underlayColor={themes.colors.view} onPress={onPress}
            >
                <Container>
                    {image && <Avatar source={image} /> }
                    <ProfileContainer>
                        <ProfileTitle>{title}</ProfileTitle>
                        {subtitle && (
                            <ProfileSubTitle 
                                numberOfLines={1}
                            >
                                {subtitle}
                            </ProfileSubTitle>
                        )}
                    </ProfileContainer>
                    {/* {arrow && <EvilIcons name={arrow} size={20} />} */}
                </Container>
            </TouchableHighlight>

        </Swipeable>
    );
};

export const SingleItem = ({
    onPress, title, subTitle
}) => {

    return (
        <TouchableHighlight
            underlayColor={themes.colors.view}
            onPress={onPress}
        >
            <Container>
                <SingleContainer>
                    <ProfileContainer>
                        <ProfileTitle>
                            {title}
                        </ProfileTitle>
                        {subTitle && <ProfileSubTitle>{subTitle}</ProfileSubTitle>}
                    </ProfileContainer>
                                  
                </SingleContainer>
            </Container>
            
        </TouchableHighlight>
    );
}

export const ToggleList = ({
    title, subTitle, onPress, toggleSwitch, toggleValue
}) => {
    return (
        <TouchableHighlight
            underlayColor={themes.colors.view}
            onPress={onPress}
        >
            <Container>
                <SingleContainer>
                    <ProfileContainer>
                        <ProfileTitle>
                            {title}
                        </ProfileTitle>
                        {subTitle && <ProfileSubTitle>{subTitle}</ProfileSubTitle>}
                    </ProfileContainer>
                    <Switch 
                        trackColor={{ false: 'black', true: '#fff'}}
                        thumbColor={isEnabled ? 'red' : 'blue'}
                        onValueChange={toggleSwitch}
                        value={toggleValue}
                    />  
                </SingleContainer>
            </Container>
            
        </TouchableHighlight>
    )
}