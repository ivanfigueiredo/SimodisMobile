import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 100,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: theme.fonts.text500
    },
    iconWrapper:{
        width: 60,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon:{
        width: 24,
        height: 18
    }
})