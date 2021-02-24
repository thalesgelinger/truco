import React from 'react';
import { Background, Button, Form, Input } from '../../components';

import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import background from '../../assets/images/background.png';
import * as Google from 'expo-google-app-auth';

import { ANDROID_CLIENT_ID, CLIENT_ID } from '@env';

interface Props {
  navigation: StackNavigationProp<any>;
}

export function Login({ navigation }: Props) {
  const { setItem } = useAsyncStorage('@Truco:user');

  async function signInWithGoogle() {
    try {
      const { user } = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        clientId: CLIENT_ID,
        scopes: ['profile', 'email']
      });

      setItem(user);

      navigation.navigate('Profile', {
        user
      });
    } catch (e) {
      console.error(e.message);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Background source={background}>
        <Form>
          <Button onPress={signInWithGoogle}>Entrar com google</Button>
        </Form>
      </Background>
    </KeyboardAvoidingView>
  );
}
