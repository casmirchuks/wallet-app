import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome';
import * as SplashScreen from 'expo-splash-screen';

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
    <Welcome/>
  );
}


