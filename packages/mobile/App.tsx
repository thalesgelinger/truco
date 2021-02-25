import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/stores';

export default function App() {
  let [fontsLoaded] = useFonts({
    EraserRegular: require('./src/assets/fonts/EraserRegular.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar />
        <Routes />
      </Provider>
    );
  }
}
