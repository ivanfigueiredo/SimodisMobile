import React, {Fragment}from "react";
import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";

import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { Rajdhani_500Medium,Rajdhani_700Bold} from '@expo-google-fonts/rajdhani'
import AppLoading from "expo-app-loading";

import { Login } from "./src/Screens/Login";
import { Home } from "./src/Screens/Home";
import { Routes } from "./src/routes";
import { Register } from "./src/Screens/Register";



export default function App(){

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Register />
    </Background>
  )
}