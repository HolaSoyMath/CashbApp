import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import iconPerfil from '../../images/perfil/info-pessoal.png'
import iconEditar from '../../images/perfil/editar.png'
import { useState } from 'react'

export default function inputPerfil({icone, nome, editar, alterarInfo=false, onPress, onChangeText, value}) {

  const [texto, setTexto] = useState(nome);

    return (
        <View style={[styles.containerInput]}>
            <Image source={icone} style={styles.iconPerfil} />
            {alterarInfo ? 
            <TextInput style={styles.input} value={texto} onChangeText={(text) => setTexto(text)} /> :
            <Text style={styles.input}>{nome}</Text> }
            <TouchableOpacity onPress={onPress}>
              {editar == 1 && <Image source={iconEditar} style={styles.iconEditar} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    iconEditar: {
        width: 14,
        height: 14,
    },
    iconPerfil: {
        width: "5%",
        height: "30%",
        marginRight: 22
    },
    containerInput: {
        flex: 0,
        flexDirection: 'row',
        height: 60,
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingright: 10,
        borderBottomColor: 'rgba(0,0,0,0.22)',
        borderBottomWidth: 1,
        borderRadius:2,
    },
    input: {
        flex:0,
        paddingLeft: 10,
        paddingRight: 10,
        width: "80%",
        color: 'rgba(0,0,0, 0.8)'
    },
})