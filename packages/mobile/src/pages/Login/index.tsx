import React from 'react';
import { Background, Button, Form, Input } from '../../components';

import { StackNavigationProp } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import background from '../../assets/images/background.png';

interface Props {
  navigation: StackNavigationProp<any>;
}
export function Login({ navigation }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Background source={background}>
        <Form>
          <Input placeholder="usuario" />
          <Input placeholder="Senha" />
          <Button onPress={() => navigation.navigate('Profile')}>Entrar</Button>
        </Form>
      </Background>
    </KeyboardAvoidingView>
  );
}
