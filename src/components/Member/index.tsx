import React from "react";
import { Text, View } from "react-native";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";

import { styles } from "./styles";

type MemberProps = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
    score: number;
}

type Props = {
    data: MemberProps
}

export function Member({ data }: Props) {
    const { on, primary } = theme.colors
    const isOnline = data.status === 'Online';


    return (
        <View style={styles.container}>
            <Avatar
                urlImage={data.avatar_url}
            />

            <View>
                <Text style={styles.title}>
                    {data.username}
                </Text>

                <View style={styles.status}>
                    <View
                        style={[
                            styles.bulletStatus,
                            {
                                backgroundColor: isOnline ? on : primary
                            }
                        ]}
                    />

                    <Text style={styles.nameStatus}>
                        {isOnline ? 'Online' : 'Offline'}
                    </Text>
                </View>
            </View>
            <Text style={styles.score}>
                    Score: {data.score}
             </Text>
        </View>
    )
}