import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 22px;
`;

export const TitleHome = styled.Text`
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    text-align: left;
    color: #262626;
`;

export const ViewButtonAddPet = styled.TouchableOpacity`
`;

export const TextButtonAddPet = styled.Text`
    font-size: 14px;
    font-weight: 600;
    line-height: 24px;
    text-align: right;
    color: #183E4B;
`;

export const CardListPets = styled.View`
    background-color: white;
    align-items: center;
`;

export const InputSearch = styled.View`
    flexDirection: row;
    alignItems: 'center';
    border-width: 1px;
    border-color: #E6E6E6;
    border-radius: 8px;
    padding-horizontal: 8px;
    width: 350px;
    height: 48px;
    margin-top: 40px;
    margin-bottom: 32px;
    align-items: center;
    font-size: 14px;
`;
    
export const ImageCardListPets = styled.ImageBackground`
    width: 350px;
    height: 344px;
    justifyContent: flex-end;
    margin-bottom: 24px;
`;

export const TextCardListPets = styled.Text`
    font-size: 24px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    color: white;
    padding: 24px;
`;