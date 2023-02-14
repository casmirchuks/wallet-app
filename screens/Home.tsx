import React, { FunctionComponent } from 'react'
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

//custom component
import { Container } from "../components/shared"
import { colors } from '../components/colors';
import CardSection from '../components/Cards/CardSection';

const HomeContainer = styled(Container)`
    background-color: ${colors.graylight}
    width: 100%;
    flex: 1;
`;

// logos
import logo1 from "../assets/cards/visa_white.png";
import logo2 from "../assets/cards/mc.png";

const Home: FunctionComponent = () => {
    const cardsData = [
        {
            id: 1,
            accountNo: "4858852343",
            balance: "20000.20",
            alias: "Work Debit",
            logo: logo1,
        },
        {
            id: 2,
            accountNo: "4575756743",
            balance: "20000.01",
            alias: "Personal Prepaid",
            logo: logo2,
        },
        {
            id: 3,
            accountNo: "4030349856",
            balance: "5000.20",
            alias: "School Prepaid",
            logo: logo1,
        }

    ];

  return (
    <HomeContainer>
        <StatusBar style="dark"/>
        <CardSection data={cardsData} />
    </HomeContainer>
  )
}

export default Home