import React, {Fragment}from "react";
import { StatusBar } from "expo-status-bar";
import { Background } from "./src/components/Background";

import { Login } from "./src/Screens/Login";
import { Home } from "./src/Screens/Home";
import { Routes } from "./src/routes";



export default function App(){
  return(
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </Background>
  )
}