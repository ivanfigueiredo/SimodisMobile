import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
    container:{
        backgroundColor: 'white', 
        borderRadius: 10,
        width: '80%',
        height: 30,
        marginTop: 8,
        marginBottom: 5,
        color: theme.colors.input
    },
})