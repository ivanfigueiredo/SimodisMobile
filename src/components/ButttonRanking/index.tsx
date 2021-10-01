import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image} from 'react-native'


import { styles } from './styles'
import RankedSvg from '../../assets/ranked.svg'

type Props = RectButtonProps & {
    title?: string
}


export function ButtonRanking ({title, ...rest} : Props) {
    return (
        <RectButton 
        style={styles.container}
        {...rest}
        >

            <RankedSvg />    

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton >

    )
}