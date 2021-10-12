import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    QuestionsNumber:{
        marginTop: 10,
        fontFamily: theme.fonts.title500,
        fontSize: 20,
        marginBottom: 10
    },
    table:{
        width: '95%',
        paddingHorizontal: 20,
        height: 500,
        borderRadius: 8,
        backgroundColor: theme.colors.heading
    },
    title:{
        fontFamily: theme.fonts.title700,
        fontSize: 20
    },
    FooterButton:{
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10
    },
})






















