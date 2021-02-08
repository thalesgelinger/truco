import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    EraserRegular: require('./src/assets/fonts/EraserRegular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar />
        <Routes />
      </>
    );
  }
}
