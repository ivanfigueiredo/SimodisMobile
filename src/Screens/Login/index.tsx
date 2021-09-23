import React from "react";
import { Text, View } from "react-native";
import { styles } from './styles'
import { Input } from "../../components/Input";
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";
import { ButtonRegister } from "../../components/ButtonRegister";


export const Login = () => {
    const navigation = useNavigation ()

    function handleSignIn(){
        navigation.navigate('Home')
    }

    function handleRegistro(){
        navigation.navigate('Register')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.matricula}>Matricula</Text>
            <Input />
            <Text style={styles.senha}>Senha</Text>
            <Input />
            <View style={styles.containerButton}>
                <View style={styles.Buttons}>
                    <ButtonEnter
                        title='Entrar'
                        onPress={handleSignIn}
                    />
                    <ButtonRegister
                        title='Registrar'
                        onPress={handleRegistro}
                    />
                </View>    
            </View>
        </View>
    )
}