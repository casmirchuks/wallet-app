import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { StyleProp, TextStyle } from "react-native";

const StyledView = styled.view`
    flex-direction: column;
    flex: 1;
    justify-content: center;
`
// custom component
import RegularText from "../Texts/BigText";
import SmallText from "../Texts/SmallText";

import { colors } from '../colors';

interface GreetingProps {
    mainText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>
    subTextStyles?: StyleProp<TextStyle>
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
        <RegularText
            textStyles={[
                {
                color: colors.secondary,
                fontSize: 22,
            },
            props.mainTextStyles
        ]}
        >
            {props.mainText}
        </RegularText>
        <SmallText
         textStyles={[
            {
            color: colors.graydark,
        },
        props.subTextStyles
        ]}
        >
            {props.subText}
        </SmallText>
    </StyledView>
  );
};

export default Greeting