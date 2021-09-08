
import React from "react";
import styled from "styled-components";
import {View,Text} from "react-native";

const ViewSettings= styled(View)`
flex: 1;
`;
const SettingsView= styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: green;
`;
export const Settings = () =>{
    return(
        <ViewSettings >
            <SettingsView>
                <Text>
                    Welcome to Settings screen!
                </Text>
            </SettingsView>
        </ViewSettings>
    )
}