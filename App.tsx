import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


//react navigation
import Welcome from './screens/Welcome';
import RootStack from './Navigators/RootStack';

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

//custom font
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoading] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf")
  });

  if(!fontsLoading){
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
  /* your app */
  <RootStack/>

</GestureHandlerRootView>
  );
}


