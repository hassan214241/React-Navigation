
import React from "react";
import styled from "styled-components";
import {View,Text,Button} from "react-native";

const ViewContact= styled(View)`
flex: 1;
`;
const ContactView= styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: green;
`;
export const Contact = () =>{
    return(
        <ViewContact >
            <ContactView>
            <Text>
                Welcome to Contact us Screen!
            </Text>
            </ContactView>
        </ViewContact>
    )
}