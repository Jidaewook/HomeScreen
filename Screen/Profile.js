import React, {useState} from 'react';
import {View, SectionList, StatusBar, ScrollView, Text, Modal, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import {SimpleLineIcons, Octicons, MaterialCommunityIcons} from '@expo/vector-icons';
import themes from '../config/themes';
import {ListItem, SingleItem, ToggleList} from '../component/common/ListItem';
import Slide from '../component/common/Slide';


const Common = styled.SafeAreaView`
  background-color: white;
  ${Platform.select({
    android: {
        paddingTop: StatusBar.currentHeight,
    },
})}
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const HLine = styled.View`
  width: 90%;
  margin: 0 auto;
  height: 1px;
  background-color: ${'#fff'};
`;

const MenuItem = [
    {
        title: "서비스 정보",
        data: [
            {title: '버전정보', icon: "user", screen: null}
        ]
    },
    {
        title: '개인정보',
        data: [
            {title: '계정정보', icon: 'user', screen: 'Account'},
            {title: '서비스 이용약관', icon: 'mail', screen: 'Agreement'}
        ]
    },
    {
        title: '알림설정',
        data: [
            {title: '공지수신'},
            {title: '학습알람'},
            {title: '푸시설정'}
        ]
    },
    {
        title: '고객센터/도움말',
        data: [
            {title: '고객센터/도움말', icon: 'mail', screen: 'SendMessage'}
        ]
    }
]

const Profile = () => {

    const navigation = useNavigation();
    const [modal, setModal] = useState(false);
    const renderTermService = () => {
        return (
            <Modal
                animationType="slide"
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
        <Text 
            style={{fontSize: 24, fontWeight: '600', marginTop: 30, marginLeft: 20}}
        >
            Terms of Service
          </Text>

          <ScrollView style={{ marginVertical: 10 }}>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              1. Your use of the Service is at your sole risk. The service is
              provided on an "as is" and "as available" basis.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              2. Support for Expo services is only available in English, via
              e-mail.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              3. You understand that Expo uses third-party vendors and hosting
              partners to provide the necessary hardware, software, networking,
              storage, and related technology required to run the Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              4. You must not modify, adapt or hack the Service or modify
              another website so as to falsely imply that it is associated with
              the Service, Expo, or any other Expo service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              5. You may use the Expo Pages static hosting service solely as
              permitted and intended to host your organization pages, personal
              pages, or project pages, and for no other purpose. You may not use
              Expo Pages in violation of Expo's trademark or other rights or in
              violation of applicable law. Expo reserves the right at all times
              to reclaim any Expo subdomain without liability to you.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              6. You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service, use of the Service, or access
              to the Service without the express written permission by Expo.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              7. We may, but have no obligation to, remove Content and Accounts
              containing Content that we determine in our sole discretion are
              unlawful, offensive, threatening, libelous, defamatory,
              pornographic, obscene or otherwise objectionable or violates any
              party's intellectual property or these Terms of Service.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              8. Verbal, physical, written or other abuse (including threats of
              abuse or retribution) of any Expo customer, employee, member, or
              officer will result in immediate account termination.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              9. You understand that the technical processing and transmission
              of the Service, including your Content, may be transferred
              unencrypted and involve (a) transmissions over various networks;
              and (b) changes to conform and adapt to technical requirements of
              connecting networks or devices.
            </Text>
            <Text
              caption
              gray
              height={24}
              style={{ marginBottom: 10 }}
            >
              10. You must not upload, post, host, or transmit unsolicited
              e-mail, SMSs, or "spam" messages.
            </Text>
          </ScrollView>
                <View>
                    <Button 
                        onPress={() => setModal(false)}
                        title="I understand"
                    />
                </View>
            </Modal>
        );
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: 'black'}}
        >
            <Common>
                <Container>
                    <SectionList 
                        contentContainerStyle={{paddingVertical: 40}}
                        ListHeaderComponent={
                            <ListItem 
                                title="JD"
                                subtitle="View Profile"
                                image={require("../images/13.png")}
                            />
                        }
                        sections={MenuItem}
                        keyExtractor={(item, index) => item + index}
                        renderSectionHeader={({section: {title}}) => (
                            <View
                                style={{marginLeft: 20, marginTop: 30, marginBottom: 10}}
                            >
                                <Text
                                    style={{color: themes.colors.title}}
                                >{title}</Text>
                            </View>
                        )}
                        stickySectionHeadersEnabled={false}
                        renderItem={({item}) => (
                            
                            // { item[1] ? (
                            //     <ToggleList 
                            //         title={item.title}
                            //     >
                            // ) : (
                                <SingleItem 
                                    title={item.title}
                                    icon={item.icon}
                                    iconcolor={themes.colors.main}
                                    onPress={() => setModal(true) }
                                />
                            // )}
                            
                        )}
                        ItemSeparatorComponent={() => <HLine />}
                    />
                    {modal ? (renderTermService()) : (null)}
                </Container>
            </Common>
        </ScrollView>
    );
};

export default Profile;