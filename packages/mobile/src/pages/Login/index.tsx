import React from 'react';
import { Background, Button, Form, Input } from '../../components';

import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import background from '../../assets/images/background.png';
import * as Google from 'expo-google-app-auth';

import { ANDROID_CLIENT_ID, CLIENT_ID } from '@env';
import { useDispatch } from 'react-redux';

interface Props {
  navigation: StackNavigationProp<any>;
}

export function Login({ navigation }: Props) {
  const { setItem } = useAsyncStorage('@Truco:user');
  const dispatch = useDispatch();

  async function signInWithGoogle() {
    try {
      const { user } = await Google.logInAsync({
        androidClientId: ANDROID_CLIENT_ID,
        clientId: CLIENT_ID,
        scopes: ['profile', 'email']
      });

      setItem(JSON.stringify(user));

      dispatch({
        type: 'ADD_USER',
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
