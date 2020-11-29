import React, {useState, useEffect} from 'react';
import {View, Text, Button, Modal, StyleSheet, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {TextInput, ScrollView} from 'react-native-gesture-handler';
import themes from '../config/themes';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {SearchInput, SearchTap} from '../component/common/Search';

import NoticeCard from '../component/common/NoticeCard';
import NcsCard from '../component/common/NcsCard';
import PsatCard from '../component/common/PsatCard';

import ContentTitle from '../component/common/ContentTitle';

import {lectureApi, noticeApi} from '../api';

const Home = ({}) => {

    const [lectures, setLectures] = useState({
        ncs: [],
        psat: [],
        ncsError: null,
        psatError: null
    });

    const [notices, setNotices] = useState({
        notice: [],
        noticeError: null
    })

    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice(); 

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError
        });

        setNotices({
            notice,
            noticeError
        });

        setLoading(false);

    };

    useEffect(() => {
        getData();
    }, []);

    const navigation = useNavigation();
    const goToDetail = (id) => {
        console.log("ID", id)
        navigation.navigate("Detail", {id})
    };

    const [modal, setModal] = useState(false);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.ScrollContainter}
        >
            <Modal
                animationType="slide"
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <View>
                    <Button 
                        onPress={() => setModal(false)}
                        title="I understand"
                    />
                </View>
            </Modal>
            {loading ? <ActivityIndicator /> : (
        <>
            <View style={styles.ViewContainer}>
                <View style={styles.ViewBox}>
                    <Text style={styles.TitleFont}>
                        Main
                    </Text>
                </View>
                <View style={styles.ViewSetting}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Setting")}
                    >
                        <SimpleLineIcons
                            name="settings"
                            size={22}
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 10
                            }}                        
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.SearchView}
                onPress={() => {setModal(true)}}
            >
                <SearchTap 
                    placeholder={"Search..."}
                    icon={"search"}
                    size={20}
                    setSearch={() => setModal(true)}
                />
                {/* <View style={styles.SearchBar}>
                    <Octicons 
                        name="search"
                        size={22}
                    />
                        
                        <View style={styles.ViewSort}>
                            {/* <Text
                                style={styles.SearchInput}
                            />
                                123123
                            </Text> */}
                            {/* <MaterialCommunityIcons
                                name="sort"
                                size={22}
                                style={styles.IconSort}
                            />
                        </View>
                </View> */} 
            </TouchableOpacity>
            <View style={{flex: 1, flexDirection: 'row'}}>
            <ContentTitle 
                title={"NOTICE"}
            />
            
            </View>
           
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginLeft: 15, marginRight: 10, marginTop: 5}}
            >
                
                {notices.notice.map(item => (
                        <NoticeCard 
                            onPress={() => goToDetail(item.id)}
                            
                            name={item.title}
                            src={item.thumbnail[0].url}
                            desc={item.desc}
                        />
                ))}
            </ScrollView>
            
            <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
                <ContentTitle 
                    title={"NCS Class"}
                />
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{marginLeft: 15, marginRight: 10, marginTop: 5, marginBottom: 20}}
            >
                {lectures.ncs.map(item => (
                        <NcsCard
                            // src={item.thumbnail[0].url}
                            title={item.title}
                        />
                ))}
                      
            </ScrollView>
            <ContentTitle 
                    title={"PSAT Class"}
                />
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {lectures.psat.map(item => (
                        <PsatCard  
                            title={item.title}
                            src={item.thumbnail[0].url}
                            desc={item.desc}
                        />
                ))}
            </ScrollView>
            
                </>
            )}

        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    TopContainer: {
        backgroundColor: themes.colors.theme
    },
    ScrollContainter: {
        backgroundColor: themes.colors.view,
        paddingHorizontal: 0
    },
    ViewContainer : {
        flexDirection: 'row',
        width: '100%',
        marginTop: 40,
        alignItems: 'center',
        // backgroundColor: themes.colors.basic
    }, 
    ViewBox: {
        width: '50%',
        backgroundColor: themes.colors.view
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
        alignItems: 'flex-end'
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
})