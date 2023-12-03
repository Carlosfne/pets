import React, { useEffect, useState } from 'react';
import { Text, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getInfoUser } from '../../services/api';

interface Pet {
  id: number;
  name: string;
  user_id: number;
  image_url: string;
}

const ProfileScreen = () => {
  useEffect(()=>{
    getInfoUser()
    .then(r=>console.log(r))
    .catch(e=>console.log(e))
  },[])

  return (
    <SafeAreaView>
      <Text>Perfil</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
