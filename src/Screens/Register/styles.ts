import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
    },
    Registro:{
        color: 'white',
        fontSize: 30,
        marginBottom: 50,
        fontFamily: theme.fonts.title500
    },
    title:{
        color: 'white',
        width: '80%',
    }
})