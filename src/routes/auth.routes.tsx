import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { theme } from "../global/styles/theme";

import { Home } from "../Screens/Home";
import { Login } from "../Screens/Login";

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
        </Navigator>
    )
}