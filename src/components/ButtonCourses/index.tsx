import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image} from 'react-native'


import { styles } from './styles'
import  DuelSvg  from '../../assets/duel.svg'

type Props = RectButtonProps & {
    title?: string
}


export function ButtonCourses ({title, ...rest} : Props) {
    return (
        <RectButton 
        style={styles.container}
        {...rest}
        >
            <View style={styles.iconWrapper}>
                <DuelSvg style={styles.icon}/>
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton >

    )
}