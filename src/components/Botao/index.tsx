import { Button, TouchableOpacity, TouchableOpacityProps } from "react-native"
import {styles} from "./styles"

interface IButton extends TouchableOpacityProps {
    onPress: () => void
    cor: boolean
}
    
export function Botao({onPress, cor}: IButton){
    return(
        <>
            <TouchableOpacity style={cor ? styles.chapaCor : styles.chapa} onPress={onPress}/> 
        </>
    )
    
        
}