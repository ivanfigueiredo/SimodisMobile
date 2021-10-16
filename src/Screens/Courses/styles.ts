import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,     
    },
    header:{
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 20
    },
    content:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        width: '100%',
        marginHorizontal: 145,
        fontSize: 30,
        color: theme.colors.heading,
        marginBottom: 20,
    }
})