import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { InputRegister } from '../../components/InputRegister'
import { ButtonEnter } from '../../components/ButtonEnter'


export function Register(){
    return (
        <View style={styles.container}>

            <Text style={styles.Registro}>
                Registro de Alunos
            </Text>



            <Text style={styles.title}>Nome</Text>
            <InputRegister />
            <Text style={styles.title}>Matricula</Text>
            <InputRegister />
            <Text style={styles.title}>Senha</Text>
            <InputRegister />
            <Text style={styles.title}>Nome do Curso</Text>
            <InputRegister />
            <Text style={styles.title}>Email</Text>
            <InputRegister />


            <ButtonEnter
                title='Registrar'
            />
        </View>
    )
}