import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CreatePetScreen from './src/screens/CreatePetScreen/CreatePetScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import { Text } from 'react-native';
import Logo from './assets/images/Logo';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const AuthStack = () => (
//   <Stack.Navigator screenOptions={{ headerShown: false }}>
//     {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
//     <Stack.Screen name="Login">
//       {(props) => <LoginScreen {...props} handleLoginSuccess={handleLoginSuccess} />}
//     </Stack.Screen>
//     {/* <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//     <Stack.Screen name="CreateUser" component={CreateUserScreen} /> */}
//   </Stack.Navigator>
// );
const AuthStack = ({ handleLoginSuccess }) => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login">
      {(props) => <LoginScreen {...props} handleLoginSuccess={handleLoginSuccess} />}
    </Stack.Screen>
    {/* ... Outros screens, se houver */}
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === 'Pets') {
        iconName = focused ? 'Pets' : 'home-outline';
      } else if (route.name === 'Conta') {
        iconName = focused ? 'Conta' : 'add-circle-outline';
      } 
        return iconName === 'Pets' ? <Logo /> : null;
      },
      headerShown: false
    })}
    >
    <Tab.Screen name="Pets" component={HomeScreen} />
    <Tab.Screen name="Conta" component={ProfileScreen} />
    
  </Tab.Navigator>
);

const App = () => {
  const [userToken, setUserToken] = useState(false);
  const handleLoginSuccess = () => {
    setUserToken(true);
  };

  return (
    <NavigationContainer>
      {userToken ? <MainTabs /> : <AuthStack handleLoginSuccess={handleLoginSuccess} />}
      {/* <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePet" component={CreatePetScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
