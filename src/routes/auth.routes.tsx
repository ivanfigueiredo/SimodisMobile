import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../global/styles/theme";

import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";
import { Questions } from "../Screens/Questions";
import { Perfil } from "../Screens/Perfil";
import { Register } from "../Screens/Register";
import { Ranking } from "../Screens/Ranking";


const {Navigator, Screen} = createNativeStackNavigator();

export function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{headerStyle: {backgroundColor: 'transparent'},
            headerShown: false, 
        }}
        >
            <Screen 
                name="Login"
                component={Login}
            />
            <Screen 
                name="Home"
                component={Home}
            />
            <Screen
                name="Perfil"
                component={Perfil}
            />
            <Screen
                name='Register'
                component={Register}
            />
            <Screen
                name='Questions'
                component={Questions}
            />
            <Screen
                name='Ranking'
                component={Ranking}
            />

        </Navigator>
    )
}
