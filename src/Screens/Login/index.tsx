import React from "react";
import { Text, View } from "react-native";
import { styles } from './styles'
import { Input } from "../../components/Input";
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";


export const Login = () => {
    const navigation = useNavigation ()

    function SignIn(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.matricula}>Matricula</Text>
            <Input />
            <Text style={styles.senha}>Senha</Text>
            <Input />
            <ButtonEnter
                title='Entrar'
                onPress={SignIn}
            />
        </View>
    )
}