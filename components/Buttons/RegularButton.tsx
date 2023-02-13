import React, { FunctionComponent, ReactNode} from 'react'
import styled from 'styled-components/native'
import { StyleProp, TextStyle, ViewStyle, GestureResponderEvent } from "react-native";

// custom component
import { colors } from '../colors'
import RegularText from '../Texts/RegularText'

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.primary};
    width: 100%;
    padding: 20px;
    border-radius: 20px;
`;

//types
interface ButtonProps {
    btnStyle?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void | undefined);
    textStyles?: StyleProp<TextStyle>;
    children: ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => { 
  return (
    <ButtonView onPress={props.onPress} style={props.btnStyle}>
        <RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
  )
}

export default RegularButton