import React from "react";
import styled from "styled-components";
import {View,Text} from "react-native";

const ViewEmail = styled(View)`
flex: 1;
`;
const EmailView= styled(View)`
flex: 1;
justify-content: center;
align-items: center;
background-color: brown;

`
export const Email = () =>{
    return(
        <ViewEmail>
            <EmailView>
                <Text>
                    Welcome to email screen!
                </Text>
            </EmailView>
        </ViewEmail>
    )
}