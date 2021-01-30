import React from 'react';
import { Text } from 'react-native';
import { Container } from '../../components/BackgroundContainer';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';

export default function Login() {
  return (
    <Container source={require('../../assets/images/background.png')}>
      <Form>
        <Input placeholder="usuário" />
        <Input placeholder="Senha" />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}
