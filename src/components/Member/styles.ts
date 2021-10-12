import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.heading
    },
    nameStatus:{
        marginRight: 100,
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13
    },
    status:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    bulletStatus:{
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    },
    score:{
        marginRight: 20,
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        fontSize: 20
    }
})