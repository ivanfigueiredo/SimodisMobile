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
        marginRight: 180,
        fontSize: 18
    },
    senha:{
        color: theme.colors.line,
        marginRight: 200,
        marginTop: 10,
        fontSize: 19
    },
    containerButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Buttons:{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 70,
        justifyContent: 'space-between',
    },
    input:{
        backgroundColor: 'white', 
        borderRadius: 10,
        width: '65%',
        height: 40,
        marginTop: 8,
        marginBottom: 5,
        color: theme.colors.input
    },
})