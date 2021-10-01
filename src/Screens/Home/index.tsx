import React, { useState } from 'react'
import { View } from "react-native";


import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";
import { ButtonQuestions } from '../../components/ButtonQuestions';
import { ButtonRanking } from '../../components/ButttonRanking';

export function Home({navigation}){
    const [category, setCategory] = useState('')

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory ('') : setCategory(categoryId);
    }

    function handleProfile(){
        navigation.navigate('Perfil')
    }

    function handleRanked(){
        navigation.navigate('Ranking')
    }

    function handleQuestions(){
        navigation.navigate('Questions')
    }


    return(
        <View>
            <View style={styles.header}>
                <Profile />
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
                    title='Atividades'
                    onPress={handleQuestions}
                /> 
            </View>
        </View>
    )
}