import { ImageBackground, View, Text} from "react-native"
import { styles } from "./styles"
import {Botao} from '../../components/Botao'
import { IPage } from "../../../App"

export function Tela2({setPage}:IPage) {
    const tela = require('../../assets/bandeiras.png')
    return (
        <ImageBackground style={styles.container} source={tela}>
            <View style={styles.supertopo}>
                <Text style={styles.topo}>Globalizando!</Text>
        
            </View>
            <View>
                <Text style={styles.semitopo}>Escolha qual idioma deseja apreender!</Text>
            </View>
            <View style={styles.espaco}></View>
            <View style={styles.button}>
                    <View style={styles.button}>
                        <Botao onPress={() => setPage(1)} cor = {false}/>
                    </View> 
                    <View style={styles.button}>
                        <Botao onPress={() => setPage(2)} cor = {true}/>
                    </View> 
            </View>
        </ImageBackground>
    )
}