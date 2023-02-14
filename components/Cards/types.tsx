import { ImageSourcePropType } from "react-native";

export interface CardProps {
    id: number;
    accountNo: String;
    balance: String;
    alies?: String;
    logo: ImageSourcePropType
}

export interface CardSectionProps {
   data: Array<CardProps>, 
}