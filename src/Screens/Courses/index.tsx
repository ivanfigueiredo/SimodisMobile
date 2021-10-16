import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { ButtonCourses } from '../../components/ButtonCourses'
import { Profile } from '../../components/Profile'
import { styles } from './styles'



export function Courses({ navigation }) {

    function handleProfile() {
        navigation.navigate('Perfil')
    }

    function handleLogica(){
        navigation.navigate('Questions')
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleProfile}
                />
            </View>
            <Text style={styles.title}> Cursos </Text>
            <ScrollView>
                <View style={styles.content}>
                    <ButtonCourses
                        title='Lógica de programação'
                        onPress={handleLogica}
                    />
                    <ButtonCourses
                        title='Estrutura de dados'
                    />
                    <ButtonCourses
                        title='Arquitetura de Software'
                    />
                    <ButtonCourses
                        title='Design Responsivo'
                    />
                    <ButtonCourses
                        title='Programação Orientada a objetos'
                    />
                    <ButtonCourses
                        title='Programação Orientada a objetos'
                    />
                    <ButtonCourses
                        title='Programação Orientada a objetos'
                    />
                </View>
            </ScrollView>
        </View>
    )
}


//  lógica de programação
//  estrutura de dados
//  arquitetura de softwere
//  design responsivo
//  programação orientada a objetos