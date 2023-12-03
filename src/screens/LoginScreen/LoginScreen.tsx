import React from 'react';
import { View, Button, SafeAreaView, TextInput } from 'react-native';
import api, { setAuthToken } from '../../services/api';
import Logo from '../../../assets/images/Logo';
import { ButtonLogin, Container, LogoView, TextForgotPassword, TitleFormText, TitleText, TitleView, TxtButton, ViewForm, ViewTextForgotPassword } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import FloatingLabelInput from '../../components/Input/Input';

const LoginScreen = ({ navigation, handleLoginSuccess }) => {
  
  const handleLogin = async () => {
    try {
      const response = await api.post('/api/login', {
        email: 'teste23@example.com.br',
        password: 'password',
      });
  
      console.log(response.data.data.token);
      setAuthToken(response.data.data.token);
      handleLoginSuccess();
      // navigation.navigate('Home');          
    } catch (error) {
      console.error(error);
    }
  };

  function changeTextEmail(){
    console.log('aq')
  }

  return (
    <Container>
      <LinearGradient
        colors={['#00B8C4', '#197EA0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1}}
      >
        <TitleView>
          <LogoView>
            <Logo />
          </LogoView>
          <TitleText>
            Bitzen Pet
          </TitleText>
        </TitleView>
        <ViewForm>
          <TitleFormText>
            Que bom te ver por aqui!
          </TitleFormText>
          <FloatingLabelInput 
            label='Insira' 
            value='Teste' 
            onChangeText={changeTextEmail}
          />
          <FloatingLabelInput 
            label='Insira' 
            value='Teste' 
            onChangeText={changeTextEmail}
          />
          <ViewTextForgotPassword>
            <TextForgotPassword>
              Esqueceu sua senha?
            </TextForgotPassword>
          </ViewTextForgotPassword>
          <ButtonLogin onPress={handleLogin}>
            <TxtButton>
              Entrar
            </TxtButton>
          </ButtonLogin>
        </ViewForm>
      </LinearGradient>
    </Container>
  );
};

export default LoginScreen;
