import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from './styles'
import { Input } from "../../components/Input";
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";
import { ButtonRegister } from "../../components/ButtonRegister";
import { useUser } from "../../hook/useUser";


export const Login = () => {
    const navigation = useNavigation()
    const { user, signIn, isLoading } = useUser()
    const [matricula, setMatricula] = useState("");
    const [senha, setSenha] = useState("");



    // function handleSignIn() {
    //     signIn()
    //     navigation.navigate('Home')
    // }

    function handleRegistro(){
        navigation.navigate('Register')
    }

    const handleFazerLogin = async () => {
        const req = await fetch('https://backend-simodis.herokuapp.com/user/signin',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: matricula,
                password: senha,
            })
        });

        const json = await req.json();

        if(json.token){
            navigation.navigate('Home',{
                email: matricula
            })
        } else{
            alert("Matricula ou senha invalidos!")
        };
        

    };

return (
    <View style={styles.container}>


        <Text style={styles.matricula}>E-Mail</Text>
        <TextInput
            style={styles.input}
            value={matricula}
            onChangeText={(t) =>setMatricula(t)}
        />
        <Text style={styles.senha}>Senha</Text>
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={senha}
            onChangeText={(t) =>setSenha(t)}
        />

        <View style={styles.containerButton}>
            <View style={styles.Buttons}>
                <ButtonRegister
                    title='Registro'
                    onPress={handleRegistro}
                />
                <ButtonEnter
                    title='Entrar'
                    onPress={handleFazerLogin}
                />

            </View>
        </View>
    </View>
)
}