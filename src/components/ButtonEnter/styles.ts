import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
    container:{
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        width: '40%',
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 15
    },
    title:{
        color: 'white',
        fontSize: 15
    }
})