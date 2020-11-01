import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { apiImage } from '../../api';

const PsatCard = ({title, desc, src}) => {
    return (
        <ImageBackground
           source={{uri: apiImage(src)}}
           style={{
               height:130,
               width:230,
               marginRight:20,
               borderRadius:10,
               marginBottom:40,
               opacity:0.7,
               backgroundColor:"#000",
               marginLeft:3,
               padding:12,
               marginTop:20
           }}
           >
               <Text style={{
                   fontWeight:"bold",
                   color:"black",
                   fontSize:15
               }}>
                   {title}
               </Text>
               <Text style={{
                   fontWeight:"bold",
                   color:"red",
                   fontSize:12
               }}>
                   {desc}
               </Text>
           </ImageBackground>
    );
};

export default PsatCard;