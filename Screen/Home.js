import React from 'react';
import {View, Text, Button} from 'react-native';


const Home = ({navigation}) => {
    return (
        <View>
            <Text>
                Home
            </Text>
            <Button 
                onPress={() => navigation.navigate("Detail")}
                title="GO TO DETAIL"
            />
        </View>
    );
};

export default Home;