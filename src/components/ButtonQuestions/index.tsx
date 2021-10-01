import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text, Image} from 'react-native'

import {QuestionImage} from '../../assets/unnamed.png'
import { styles } from './styles'
import FunSvg from '../../assets/fun.svg'


type Props = RectButtonProps & {
    title?: string
}


export function ButtonQuestions ({title, ...rest} : Props) {
    return (
        <RectButton 
        style={styles.container}
        {...rest}
        >  

            <FunSvg />
        
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton >

    )
}