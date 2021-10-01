import React, {useState} from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import {} from 'react'

export function Ranking(){
    const [checked, setChecked] = useState('')

    return(
        <View style={styles.container}>
            <View style={styles.table}>
                <Text style={styles.title}>
                    Pergunta 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatum quos, nobis voluptate culpa tempore sunt adipisci mollitia animi voluptatibus eum unde! Molestias necessitatibus, nemo beatae est inventore veritatis? Soluta?
                </Text>
            </View>
        </View>
    )
}