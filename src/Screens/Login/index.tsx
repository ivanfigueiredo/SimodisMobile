import React, { useEffect, useState } from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from './styles'
import { ButtonEnter } from "../../components/ButtonEnter";
import { useNavigation } from "@react-navigation/native";
import { ButtonRegister } from "../../components/ButtonRegister";
import { useUser } from "../../hook/useUser";

import  AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../../services/api";


export const Login = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() =>{
        async function storageData(){
            const value = await AsyncStorage.getItem('Token')
            console.log(value)
            if(value){
                navigation.replace('Home',{
                   email: email
               })
           }
        }
        storageData();
    },[])

    async function handleRegistro(){
        navigation.navigate('Register')
    }

    const handleFazerLogin = async () => {
        const {data} = await API.post("user/signin",{
            email: email,
            password: password,
        }) as any
        
        console.log(data.token)
        await AsyncStorage.setItem('Token', data.token)
         
        if(data.token){
             navigation.navigate('Home',{
                email: email
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
            value={email}
            onChangeText={setEmail}
        />
        <Text style={styles.senha}>Senha</Text>
        <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
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