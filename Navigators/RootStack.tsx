import React, { FunctionComponent } from 'react'

//screens
import Welcome from '../screens/Welcome'
import Home from '../screens/Home'

//custom component
import { colors } from '../components/colors';

//react navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import Avi from "./../assets/avi/avatar.png";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();



const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator  
            // screenOptions={{
            //     headerStyle: {
            //         backgroundColor: colors.graylight,
            //         borderBottomWidth: 0,
            //         shadowColor: "transparent",
            //         shadowOpacity: 0,
            //         height: 120,
            //     },
            //     headerTintColor: colors.secondary,
            //     headerRightContainerStyle: {
            //         paddingRight: 25,
            //     },
            //     headerLeftContainerStyle: {
            //         paddingRight: 10,
            //     },
            //     headerRight: () => (
            //         <Profile
            //             image={Avi}
            //             imageContainerStyle={{
            //                 backgroundColor: colors.tertiary
            //             }}
            //         />
            //     )
            // }}
            // initialRouteName='Home'
            >
            <Stack.Screen 
                name='Welcome' 
                component={Welcome}
                options={{ headerShown: false}}
            />
            <Stack.Screen 
                name='Home' 
                component={Home}
                options={{ headerTitle: (props) => (
                    <Greeting 
                     mainText="Hey Cas!"
                     subText='Welcome back'
                     {...props}
                     />
                ),
                headerLeft: () => (<></>)
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
