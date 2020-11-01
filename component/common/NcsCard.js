import React from 'react';
import {View, Text, Image} from 'react-native';
import {apiImage} from '../../api';

const NcsCard = ({src, description}) => {
    return (
        <View style={{
            flexDirection:"row",
            height:60,
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
                 height:50,
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
                fontSize:8,
                fontWeight:"600",

            }}>
                {description}
            </Text>
            <Text style={{
                fontSize:11,
                fontWeight:"bold",
            }}>
                454.69
            </Text>

        </View>
        <View style={{
            width:"5%",
            justifyContent:"flex-end",
            height:"100%"
        }}>
            <Image
             source={require('../../images/add.png')}
             style={{
                 height:17,
                 width:17
             }}
            />
        </View>

        </View>
    );
};

export default NcsCard;