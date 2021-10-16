import React, { useState } from 'react'
import { View } from "react-native";


import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";
import { ButtonQuestions } from '../../components/ButtonQuestions';
import { ButtonRanking } from '../../components/ButttonRanking';

export function Home({route ,navigation}: any){
    

    const { email } = route.params;

    function handleProfile(){
        navigation.navigate('Perfil',{ 
            email
        })
    }

    function handleRanked(){
        navigation.navigate('Ranking')
    }

    function handleCourses(){
        navigation.navigate('Courses')
    }


    console.log(email)


    return(
        <View>
            <View style={styles.header}>
                <Profile
                    email={email}
                    message='Hoje é dia de vitoria?'
                />
                <ButtonAdd
                    onPress={handleProfile}
                />
            </View>
            <View style={styles.content}>
                <ButtonRanking
                    title="Ranking"
                    onPress={handleRanked}
                />          
                <ButtonQuestions
                    title='Cursos'
                    onPress={handleCourses}
                /> 
            </View>
        </View>
    )
}