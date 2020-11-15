import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {apiImage} from '../../api';
import {useNavigation} from '@react-navigation/native';


const NcsCard = ({src, title}) => {

    // const navigation = useNavigation();

    // const goToDetail = () => 
    // navigation.navigate("Detail");

    return (
        <View style={{
            flexDirection:"row",
            height:100,
            width:240,
            backgroundColor:"#fff",
            elevation:2,
            padding:6,
            marginVertical:5,
            marginRight:20,
            marginLeft:2,
            borderRadius:10
        }}> 
        <View>
            <Image
             source={{uri: apiImage(src)}}
             style={{
                 height:80,
                 width:60,
                 borderRadius:10
             }}
            />
        </View>

        <View style={{
            width:"65%",
            justifyContent:"flex-end",
            paddingHorizontal:10,
            height:"100%"
        }}>
            <Text style={{
                fontSize:12,
                fontWeight:"600",

            }}>
                {title}
            </Text>
        </View>
    </View>
    );
};

export default NcsCard;