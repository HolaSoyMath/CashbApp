import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import ButtonPonteira from '../src/components/button/buttonPonteira';
import Pesquisar from '../src/components/input/inputPesquisar';
import Modal from '../src/components/modalPonteira';

const Ponteira = () => {
  const [modal, setModal] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Ponteiras</Text>
      </View>
      <Pesquisar
        placeholder="Buscar por tipo"
        imageSource={require('../assets/Search.png')}
      />
      <View style={styles.main}>
        <ButtonPonteira
          imageSource={require('../assets/ponteira2.png')}
          title= "Ponteira Unica Polida"
          text= "Ram Laramie 1500"
          pontos= "+07"
          onPress={() =>setModal(true)}
        />  
      </View>
      
      <Modal 
        show={modal}
        
        close={() => setModal(false)}
      />

      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = '#1e1e1e'
        translucent = {false}
        networkActivityIndicatorVisible = {true}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },

  header:{
    width: '100%',
    height: 160,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center'
  },

  text:{
    color: '#F2F2F2', 
    fontSize: 23, 
    fontWeight: '600',
    textAlign: 'center',
    
  },

  main: {
    height: 700,
    margin: 30,
  },

  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2A59C2',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    marginTop: 20
  },

  titleButton:{
    color: '#f6f6f6',
    fontWeight: '600',
  },
  
})

export default Ponteira;
