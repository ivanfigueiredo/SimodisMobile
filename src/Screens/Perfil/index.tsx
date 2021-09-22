import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 




export function Perfil(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="user" size={100} color="black" />
                <Text style={styles.name}>
                    Julio
                </Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Matricula: </Text>
                <Text style={styles.title}>Email: </Text>
                <Text style={styles.title}>Curso: </Text>
            </View>
        </View>
    )
}