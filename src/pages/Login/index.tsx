import React from 'react';
import { Background, Button, Form, Input } from '../../components';

import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
  navigation: StackNavigationProp<any>;
}
export default function Login({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Background source={require('../../assets/images/background.png')}>
        <Form>
          <Input placeholder="usuario" />
          <Input placeholder="Senha" />
          <Button onPress={() => navigation.navigate('Profile')}>Entrar</Button>
        </Form>
      </Background>
    </KeyboardAvoidingView>
  );
}
