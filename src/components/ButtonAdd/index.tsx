import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
    
}


export function ButtonAdd({...rest }: Props){
    return(
        <RectButton 
            style={styles.container}
            {...rest}
        >
            <AntDesign name="infocirlceo" size={24} color="black" />
        </RectButton>
    )
}