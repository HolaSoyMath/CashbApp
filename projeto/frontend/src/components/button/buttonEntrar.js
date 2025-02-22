import { StyleSheet, Text, TouchableOpacity } from 'react-native' 

export default function ButtonEntrar({texto, onPress, check}){

  return(
    <TouchableOpacity 
      style={[
        stylesBody.containerEntrar,
        check ? stylesBody.habilitarEntrar : stylesBody.desabilitarEntrar
      ]}  
      onPress={onPress}
      disabled={!check}
    >
      <Text style={stylesBody.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  )
}

const stylesBody = StyleSheet.create({
  containerEntrar:{
    width: '100%',
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  habilitarEntrar:{
    backgroundColor: '#2A59C2',
  },
  desabilitarEntrar:{
    backgroundColor: '#A3A29E',
  },
  textoBotao:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
})