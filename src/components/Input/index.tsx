import React from "react";
import { TextInput, TextInputProps } from "react-native"
import { styles } from './styles'

type Props = TextInputProps 


export function Input ({style,...rest}: Props){
    return(
        <TextInput
            {...rest}
            style={[styles.container, style]}
        />
    )
}