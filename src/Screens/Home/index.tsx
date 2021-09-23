import React, { useState } from 'react'
import { View } from "react-native";


import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { useNavigation } from '@react-navigation/native';

import { styles } from "./styles";

export function Home({navigation}){
    const [category, setCategory] = useState('')

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory ('') : setCategory(categoryId);
    }

    function handleProfile(){
        navigation.navigate('Perfil')
    }

    return(
        <View>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd
                    onPress={handleProfile}
                />
            </View>
            <View>
                <CategorySelect 
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />                
            </View>
        </View>
    )
}