import { StyleSheet } from "react-native"
import { colors } from "../../styles/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.greenLogo,
        alignItems: 'center',
        justifyContent: 'center'
    },

    centrao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },

    centro1: {
        fontFamily: 'RubikMonoOne_400Regular',
        fontSize: 20,
        color: colors.white
    },

    centro2: {
        fontFamily: 'RubikMonoOne_400Regular',
        fontSize: 20,
        color: colors.black
    },


    buttons: {
        justifyContent: 'center',
        padding: 20,
        flexDirection: 'row',
       
    },
    semitopo: {
        paddingLeft: 4,
        color: colors.white,
        fontSize: 25 ,
        fontFamily: 'RubikMonoOne_400Regular'
    },

    espaco: {
        flex: 2
    }
    
})