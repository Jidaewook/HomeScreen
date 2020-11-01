import React, {useState, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import themes from '../config/themes';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import NoticeCard from '../component/common/NoticeCard';
import NcsCard from '../component/common/NcsCard';
import PsatCard from '../component/common/PsatCard';

import {lectureApi, noticeApi} from '../api';

const Home = ({navigation}) => {

    const [lectures, setLectures] = useState({
        loading: true,
        ncs: [],
        psat: [],
        ncsError: null,
        psatError: null
    });

    const [notices, setNotices] = useState({
        loading: true,
        notice: [],
        noticeError: null
    })

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice(); 

        setLectures({
            loading: false,
            ncs,
            ncsError,
            psat,
            psatError
        });

        setNotices({
            loading: false,
            notice,
            noticeError
        })
        console.log("+++++++", notice);

    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScrollContainter}
        >
            <View style={styles.ViewContainer}>
                <View style={styles.ViewBox}>
                    <Text style={styles.TitleFont}>
                        Main
                    </Text>
                </View>
                <View style={styles.ViewSetting}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Detail")}
                    >
                        <SimpleLineIcons
                            name="settings"
                            size={22}
                            style={{
                                width: 24,
                                height: 24
                            }}                        
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.SearchView}>
                    <View style={styles.SearchBar}>
                        <Octicons 
                            name="search"
                            size={22}
                        />
                        <TextInput 
                            placeholder={"Search the Class..."}
                            style={styles.SearchInput}
                        />
                        <View style={styles.ViewSort}>
                            <MaterialCommunityIcons
                                name="sort"
                                size={22}
                                style={styles.IconSort}
                            />
                        </View>
                    </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        // 칼라는 테마에 들어가야 한다.
                        color: '#4f4a4a'
                    }}    
                >
                    NOTICE
                </Text>
                    <View
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: 5,
                            backgroundColor: '#4f4a4a',
                            marginLeft: 10
                        }}
                    />
                    <Text 
                        style={{
                            fontWeight: 'bold',
                            fontSize: 10,
                            color: '#4f4a4a',
                            
                        }}
                    >
                        채용공고
                    </Text> 
                    <Text
                        
                    >
                        더보기
                    </Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {notices.notice.map(item => (
                        <NoticeCard  
                            name={item.title}
                            src={item.thumbnail.url}
                            desc={item.desc}
                        />
                ))}
            </ScrollView>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    alignItems: 'center',
                    marginTop: 20
                }}
            >
                <Text
                    style={{
                        fontWeight: 'bold',
                        fontSize: 18,
                        // 칼라는 테마에 들어가야 한다.
                        color: '#4f4a4a'
                    }}    
                >
                    NCS Class
                </Text>
                    <View
                        style={{
                            width: 5,
                            height: 5,
                            borderRadius: 5,
                            marginHorizontal: 5,
                            backgroundColor: '#4f4a4a',
                            marginLeft: 10
                        }}
                    />
                    <Text 
                        style={{
                            fontWeight: 'bold',
                            fontSize: 10,
                            color: '#4f4a4a',
                            
                        }}
                    >
                        NCS 합격하기
                    </Text> 
                    <Text
                        
                    >
                        더보기
                    </Text>
            </View>  
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {lectures.ncs.map(item => (
                        <NcsCard
                            src={item.thumbnail.url}
                            description={item.description}
                        />
                ))}
                      
            </ScrollView>
            <Text style={{
                marginTop:20,
                color:"#4f4a4a",
                fontSize:18,
                fontWeight: '700'                
            }}>
                PSAT Class
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {lectures.psat.map(item => (
                        <PsatCard  
                            title={item.title}
                            src={item.thumbnail.url}
                            desc={item.desc}
                        />
                ))}
            </ScrollView>
            
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    ScrollContainter: {
        backgroundColor: themes.colors.main,
        paddingHorizontal: 30
    },
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 40,
        alignItems: 'center'
    }, 
    ViewBox: {
        width: '50%'

    },
    TitleFont: {
        fontWeight: 'bold',
        fontSize: 24
    },
    ViewSetting: {
        width: '50%',
        alignItems: 'flex-end'
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
        width: '120%',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        height: 35,
        borderRadius: 10,
        marginLeft: 1
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
        width: '15%',
        backgroundColor: '#fff',
        marginLeft: 5,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center'
    },
    IconSort: {
        marginLeft: 30
    }
})