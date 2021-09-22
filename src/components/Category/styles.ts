import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
    container:{
        width: 300,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8,
        marginBottom: 15,
    },
    content:{
        width: '100%',
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 7,
    },
    title:{
        fontFamily: theme.fonts.text500,
        color: theme.colors.heading,
        fontSize: 15,
    },
    check:{
        width: 12,
        height: 12,
        backgroundColor: theme.colors.secondary100,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderColor: theme.colors.secondary50,
        borderWidth: 3,
        borderRadius: 3
    },
    checked:{
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-end',
        marginRight: 7,
        borderRadius: 3
    },
})