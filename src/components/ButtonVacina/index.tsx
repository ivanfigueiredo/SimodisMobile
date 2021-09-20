import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image} from 'react-native'


import { styles } from './styles'
import cartao from '../../assets/Cartao.png'


type Props = RectButtonProps & {
    title?: string
}


export function ButtonVacina ({title, ...rest} : Props) {
    return (
        <RectButton 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image source={cartao} style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton >

    )
}