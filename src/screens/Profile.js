
import React from "react";
import styled from "styled-components";
import {View,Text,Button} from "react-native";
import {useNavigation} from '@react-navigation/native';
const ViewProfile= styled(View)`
flex: 1;
`;
const ProfileView= styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: green;
`;
export const Profile = () =>{
    const {navigate} = useNavigation();
    return(
        <ViewProfile >
            <ProfileView>
            <Button title="Contact" onPress={() => navigate('Contact')} />
            </ProfileView>
        </ViewProfile>
    )
}