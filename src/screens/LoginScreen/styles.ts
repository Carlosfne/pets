import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const LogoView = styled.View`
  width: 106px;
  height: 106px;
  border-radius: 53px;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-top: 83px;
`;

export const TitleView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  color: #fff;
  margin-top: 16px;
`;

export const TitleFormText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: center;
  color: #262626;
  margin-top: 48px;
  margin-bottom: 42px;
`;

export const ViewForm = styled.View`
  background-color: white;
  width: 100%;
  height: 568px;
  top: 0px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  align-items: center;
`;

export const ViewTextForgotPassword = styled.View`
  flex-direction: row-reverse;
  width: 80%;
`;

export const TextForgotPassword = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: #183E4B;
  text-align: right;
`;

export const ButtonLogin = styled.TouchableOpacity`
  width: 80%;
  height: 48px;
  border-radius: 8px;
  background-color: #183E4B;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const TxtButton = styled.Text`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  text-align: center;
  color: #fff;
`;