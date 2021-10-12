import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";


import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

export function Ranking() {
    const [checked, setChecked] = useState('')
    const members = [
        {
            id: '1',
            username: 'Julio',
            avatar_url: 'https://github.com/lionev.png',
            status: 'Online',
            score: 100
        },
        {
            id: '2',
            username: 'Matheus',
            avatar_url: 'https://github.com/matheuusu.png',
            status: 'Offline',
            score: 100,
        },
        {
            id: '3',
            username: 'Fernanda',
            avatar_url: 'https://github.com/nandaanascimentto.png',
            status: 'Online',
            score: 100,
        },
        {
            id: '4',
            username: 'Jonatas',
            avatar_url: 'https://github.com/Johnv95.png',
            status: 'Offline',
            score: 100,
        },
        {
            id: '5',
            username: 'Natalia',
            avatar_url: 'https://github.com/nati-br.png',
            status: 'Online',
            score: 100,
        },
        {
            id: '6',
            username: 'Jorge',
            avatar_url: 'https://github.com/lionev.png',
            status: 'Offline',
            score: 100,
        },

    ]

    return (
        <View style={styles.container}>
            <View style={styles.table}>
                <View style={styles.header}>
                    <Text style={styles.title}>Sua pontuação é: 541</Text>
                </View>
        
                    <FlatList
                        data={members}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Member data={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={() => <ListDivider />}
                        style={styles.members}
                    />
            </View>
        </View>
    )
}