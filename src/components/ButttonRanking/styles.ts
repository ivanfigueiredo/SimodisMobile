import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 120,
        backgroundColor: theme.colors.secondary50,
        borderRadius: 8,
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingVertical: 15,
        
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 30,
        textAlign: 'center',
    },

    icon:{
        width: 50,
        height: 50
    }
})