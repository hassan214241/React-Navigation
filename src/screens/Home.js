

import React from "react";
import styled from "styled-components";
import {View,Text,Button} from "react-native";
import {useNavigation} from '@react-navigation/native';
const ViewHome = styled(View)`
flex: 1;
`;
const HomeView= styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: yellow;
`;
export const Home = () =>{
    const {navigate} = useNavigation();
    return(
        <ViewHome >
            <HomeView>
                <Button title="Profile" onPress={() => navigate('Profile')} />
                    
                
            </HomeView>
        </ViewHome>
    )
}