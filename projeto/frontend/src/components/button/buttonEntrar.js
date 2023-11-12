import { StyleSheet, Text, TouchableOpacity } from 'react-native' 

export default function ButtonEntrar({texto, onPress}){

  return(
    <TouchableOpacity 
    style={stylesBody.containerEntrar} 
    onPress={onPress}
    >
      <Text style={stylesBody.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  )
}

const stylesBody = StyleSheet.create({
  containerEntrar:{
    width: '100%',
    height: 45,
    backgroundColor: '#2A59C2',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
  },
})