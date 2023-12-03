import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Camera from '../../../assets/images/Camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InputImage, TextTitle, ViewInputPhoto } from './styles';
import { Container } from './styles';
import FloatingLabelInput from '../../components/Input/Input';
import DateTimePicker from '@react-native-community/datetimepicker'; // Importar o DatePicker
import moment from 'moment';
import { salvaPets } from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const CreatePetForm = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [petInfo, setPetInfo] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const { assets } = result;

    console.log(assets)

    if (!result?.cancelled) {
      setImage(result?.assets[0]?.uri);
    }
  };

  const handleDateChange = (event:any, selectedDate:any) => {
    const currentDate = selectedDate || birthdate;
    setShowDatePicker(Platform.OS === 'ios');
    setBirthdate(currentDate);
  };
 
  function handleFormSubmit(){
    const formData = {
      name,
      color,
      birthdate: '2022-05-05',
      description: petInfo,
      image,
    };

    
    console.log(formData);
    salvaPets(formData)
    .then((response) => {
      navigation.navigate('Home')
    })
    .catch((error) => console.log(error))
    // .finally(() => setIsLoading(false));
  }

  return (
    <SafeAreaView>
        <Container>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthdate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          <TextTitle>Foto</TextTitle>
          <ViewInputPhoto>
            <TouchableOpacity onPress={pickImage}>
                {image ? (
                    <Image source={{ uri: image }} style={{ width: 351, height: 262, borderRadius: 8 }} />
                    ) : (
                    <InputImage>
                      <Camera />
                      <Text>Clique para adicionar uma imagem</Text>
                    </InputImage>
                )}
            </TouchableOpacity>
          </ViewInputPhoto>
          <TextTitle>Informações</TextTitle>
          <FloatingLabelInput
              label="Nome"
              value={name}
              onChangeText={(text) => setName(text)}
          />
          <FloatingLabelInput
              label="Cor"
              value={color}
              onChangeText={(text) => setColor(text)}
          />
          {/* <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <FloatingLabelInput
                label="Data de Nascimento"
                value={'birthdate'}
                onChangeText={(text) => setBirthdate(text)}
            />
            {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthdate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextTitle>Data de Nascimento</TextTitle>
            <Text>{moment(birthdate).format('DD/MM/YYYY')}</Text>
            {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={birthdate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
          </TouchableOpacity> */}
          <TextInput
              placeholder="Sobre o Pet"
              multiline
              numberOfLines={4}
              value={petInfo}
              onChangeText={(text) => setPetInfo(text)}
          />

          <TouchableOpacity onPress={handleFormSubmit}>
            <TextTitle>Enviar</TextTitle>
          </TouchableOpacity>
        </Container>
    </SafeAreaView>
  );
};

export default CreatePetForm;
