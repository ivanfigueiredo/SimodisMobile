import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    logo: {
    },
    matricula:{
        color: theme.colors.line,
        marginRight: 180
    },
    senha:{
        color: theme.colors.line,
        marginRight: 200,
        marginTop: 10
    },
})