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
        height: 500,
        borderRadius: 8,
        backgroundColor: theme.colors.secondary50
    },
    header:{
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: theme.colors.secondary30,
        borderRadius: 8
    },
    title:{
        fontFamily: theme.fonts.text500,
        fontSize: 30
    },
    members:{
        width:'100%',
        backgroundColor: theme.colors.secondary50,
        paddingHorizontal: 20,
        marginVertical: 20
    }
})