import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import { useNavigation } from "@react-navigation/native";

type Props = {
    email: string;
    message: string,
}

export function Profile({message, email }: Props){
    

    return (
        <View style={styles.container}>
            <Avatar
                urlImage="https://github.com/lionev.png"
            />

            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá,
                    </Text>

                    <Text style={styles.username}>
                        {email}
                    </Text>
                </View>
                <Text style={styles.message}>
                    {message}
                </Text>
            </View>
        </View>
    )
}