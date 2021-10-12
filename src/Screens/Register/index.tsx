import React, { useEffect, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'
import { InputRegister } from '../../components/InputRegister'
import { ButtonEnter } from '../../components/ButtonEnter'

import { useUser } from '../../hook/useUser'


export function Register(){

    const [nome, onChangeNome] = useState("");
    const [matricula, onChangeMatricula] = useState("");
    const [senha, onChangeSenha] = useState("");
    const [curso, onChangeCurso] = useState("");

    const { createUser } = useUser()

    function handleRegister(){
        try {
            createUser({nome, matricula, senha, curso})
            .catch(console.log)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.Registro}>
                Registro de Alunos
            </Text>


            <Text style={styles.title}>Nome</Text>
            <InputRegister 
                value={nome}
                onChangeText={onChangeNome}
            />
            <Text style={styles.title}>Matricula</Text>
            <InputRegister
                value={matricula}
                onChangeText={onChangeMatricula}
                keyboardType='numeric'
            />
            <Text style={styles.title}>Senha</Text>
            <InputRegister 
                value={senha}
                onChangeText={onChangeSenha}
            />
            <Text style={styles.title}>Nome do Curso</Text>
            <InputRegister
                value={curso}
                onChangeText={onChangeCurso}
            />

            <ButtonEnter
                title='Registrar'
                onPress={handleRegister}
            />
        </View>
    )
}