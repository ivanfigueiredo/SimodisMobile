import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from './styles'
import LogoPNG from '../../assets/logo.png'
import { Input } from "../../components/Input";
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";



export function Login({navigation}){

    function SignIn(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Image source={ LogoPNG } style={styles.logo} />
            <Input />
            <Input />
            <ButtonEnter
                title='Entrar'
                onPress={SignIn}
            />
        </View>
    )
}