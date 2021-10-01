import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    table:{
        width: '95%',
        height: 300,
        borderRadius: 8,
        backgroundColor: theme.colors.heading
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 20
    },
})