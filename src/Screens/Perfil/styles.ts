import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    header:{
        width: '100%',
        alignItems: 'center',
        marginTop: getStatusBarHeight() + 26,
    },
    name:{
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
    },
    content:{
        width: '95%',
        minHeight: 100,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.primary,
        
    },
    image:{
        backgroundColor: theme.colors.heading,
        borderRadius: 50,
        
    },
    title:{
        // alignSelf: 'flex-start',
        fontSize: 18,
        color: theme.colors.primary,
        // fontFamily: theme.fonts.title500,
        // marginBottom: 10,
        // marginTop: 5,
        // marginLeft: 5
    },
})