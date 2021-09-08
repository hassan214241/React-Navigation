
import React from "react";
import styled from "styled-components";
import {View,Text} from "react-native";

const NotificationView = styled(View)`
flex: 1;
`;
const ScreenView = styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: gray;

`
export const Notification = () =>{
    return(
        <NotificationView>
            <ScreenView>
                <Text>
                    Welcome to Notification screen!
                </Text>
            </ScreenView>
        </NotificationView>
    )
}