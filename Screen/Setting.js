import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';

import Title from '../component/common/Title';
import Category from '../component/common/Category';
import Likes from '../component/common/Likes';
import Count from '../component/common/Count';
import themes from '../config/themes';
import SettingTitle from '../component/common/SettingTitle';
import SettingContent from '../component/common/SettingContent';
import SettingContentToggle from '../component/common/SettingContentToggle';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


const Setting = () => {

    const navigation = useNavigation();

    return (
    
    <View
    >
    <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.ScrollContainter}
    >
        <ActivityIndicator />

        <View style={styles.ViewContainer}>
            <View style={styles.ViewBox}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="ios-arrow-back"
                        size={22}
                        style={{
                            width: 24,
                            height: 24,
                            marginRight: 10
                        }}                        
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.ViewSetting}>
                <Text style={styles.TitleFont}>
                    Setting
                </Text>
            </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <SettingTitle 
                title={"서비스정보"}
            />
        </View>
        <View>
            <SettingContent 
                title={"버전정보"}
                desc={"1.0.0"}
            />
        </View>
        <View style={{marginTop: 20}}>
            <SettingTitle 
                title={"개인정보"}
            />
            <SettingContent 
                title={"계정정보"}
                desc={"수정하기"}
            />
            <SettingContent 
                title={"서비스 이용동의"}
                desc={"수정하기"}
            />
        </View>
        <View style={{marginTop: 20}}>
            <SettingTitle 
                title={"알림설정"}
                name
            />
            <SettingContentToggle
                title={"공지수신"}
                desc={"토글설정"}
            />
            <SettingContentToggle 
                title={"학습알람"}
                desc={"토글설정"}
            />
            <SettingContentToggle 
                title={"푸시설정"}
                desc={"토글설정"}
            />
        </View>
        <View style={{marginTop: 20}}>
            <SettingTitle 
                title={"고객센터/도움말"}
            />
            <SettingContent 
                title={"고객센터/도움말"}
                desc={"메시지 보내기"}
            />
        </View>
        
    </ScrollView>
    </View>
);
};

export default Setting;

const styles = StyleSheet.create({
    TopContainer: {
        backgroundColor: themes.colors.theme
    },
    ScrollContainter: {
        backgroundColor: themes.colors.view,
        paddingHorizontal: 0,
        height: '100%',
        
    },
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 40,
        marginBottom: 40,
        alignItems: 'center',
        // backgroundColor: themes.colors.basic
    }, 
    ViewBox: {
        width: '60%',
        backgroundColor: themes.colors.view,
        marginLeft: 20
    },
    TitleFont: {
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: 20
    },
    MoreFont: {
        fontWeight: '200',
        fontSize: 15,
        
    },
    ViewSetting: {
        width: '50%',
        alignItems: 'flex-start'
        // backgroundColor: themes.colors.view

    }, 
    SearchView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginVertical: 30
    },
    SearchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        width: '90%',
        backgroundColor: themes.colors.search,
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 10,
        marginLeft: 20
    },
    SearchInput: {
        fontWeight: '600',
        // backgroundColor: '#1111',
        paddingHorizontal: 10,
        fontSize: 20,
        marginLeft: 15
    },
    ViewSort: {
        alignItems: 'center',
        elevation: 2,
        width: 50,
        backgroundColor: '#fff',
        marginLeft: 5,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center'
    },
    IconSort: {
        marginLeft: 10
    },
    add: {
        alignItems: 'flex-end'
    }
});