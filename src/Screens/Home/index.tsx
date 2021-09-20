import React from "react";
import { Image, Text, View } from "react-native";
import { ButtonForm } from "../../components/ButtonForm";
import { ButtonVacina } from "../../components/ButtonVacina";
import { styles } from "./styles";
import dentro from '../../assets/Dentro.jpeg'
import { ButtonRandom } from "../../components/ButtonAleatorio";


export function Home(){
    return(
        <View style={styles.container}>
            <Image 
                source={dentro}
                style={styles.image}
            />
            <ButtonForm
                title= 'Formulario'
            />
            <ButtonVacina
                title='Cartão de vacina'
            />
            <ButtonRandom 
                title='Teste'
            />
        </View>
    )
}