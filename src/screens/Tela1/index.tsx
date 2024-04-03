import { Image, View, Text} from "react-native"
import { styles } from "./styles"
import { Botao } from '../../components/Botao'
import { IPage } from "../../../App"

export function Tela1({setPage}:IPage) {
    const logo = require('../../assets/icon.png')
    return (
            <View style={styles.container}>
                      <View style={styles.espaco}></View>
                       <Image  source={logo}/>
                            <View style={styles.centrao}>
                                <Text style={styles.semitopo}></Text>
                                <Text style={styles.semitopo}>aprenda um novo idioma online e gratuito!</Text>
                            </View>
                            <View style={styles.espaco}></View>
                 <View style={styles.buttons}>
                    <View style={styles.buttons}>
                        <Botao onPress={() => setPage(1)} cor = {true}/>
                    </View> 
                    <View style={styles.buttons}>
                        <Botao onPress={() => setPage(2)} cor = {false}/>
                    </View> 
                </View>
            </View>
    )        
}