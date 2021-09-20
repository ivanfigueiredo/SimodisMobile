import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 90,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 30,
        textAlign: 'center',
    },
    iconWrapper:{
        width: 56,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: theme.colors.line
    },
    icon:{
        width: 50,
        height: 50
    }
})