import React, { useEffect, useState } from 'react';
import { Text, TextInput, ScrollView, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardListPets, Container, ImageCardListPets, InputSearch, TextButtonAddPet, TextCardListPets, TitleHome, ViewButtonAddPet } from './styles';
import { getAllPets } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface Pet {
  id: number;
  name: string;
  user_id: number;
  image_url: string;
}

const HomeScreen = () => {
  const [pets, setPets] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasData, setHasData] = useState(true);
  const navigation = useNavigation();
  useEffect(()=>{
    getPets()
  },[searchText])

  function getPets() {
    setIsLoading(true);
    setHasData(true); 
    getAllPets(searchText)
      .then((response) => {
        setPets(response.data.data.data);
        setHasData(response.data.data.data.length > 0);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);

    if (text.length >= 3) {
      getPets();
    }
  };

  const handleCreatePet = () => {
    navigation.navigate('CreatePet');
  };

  const renderPets = () => {
    if (isLoading) {
      return (
        <ActivityIndicator size="large" color="blue" />
      );
    }

    if (!hasData) {
      return (
        <Text>Nenhum resultado encontrado</Text>
      );
    }

    return pets.map((pet: Pet) => (
      <ImageCardListPets
        key={pet.id}
        source={{ uri: pet.image_url }}
        imageStyle={{ borderRadius: 12 }}
      >
        <TextCardListPets>
          {pet.name}
        </TextCardListPets>
      </ImageCardListPets>
    ));
  };

  return (
    <SafeAreaView>
      <Container>
        <TitleHome>Seus Pets</TitleHome>
        <ViewButtonAddPet onPress={handleCreatePet}>
          <TextButtonAddPet>
            Novo Pet
          </TextButtonAddPet>
        </ViewButtonAddPet>
      </Container>
      <ScrollView>
        <CardListPets>
          <InputSearch>
            <Text>🔍</Text>
            <TextInput 
              placeholder='Pesquisar um pet'
              value={searchText}
              onChangeText={handleSearchTextChange}
              style={{fontSize: 14, marginLeft: 12}}
            />
          </InputSearch>
          {renderPets()}
        </CardListPets>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
