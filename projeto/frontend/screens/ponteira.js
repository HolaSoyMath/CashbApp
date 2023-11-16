import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import React, { useState, useEffect } from 'react'
import ButtonPonteira from '../src/components/button/buttonPonteira';
import Pesquisar from '../src/components/input/inputPesquisar';
import Modal from '../src/components/modalPonteira';
import MenuBar from '../src/components/menu-bar';
import teste from '../src/images/ponteiras/base/ponteiraUnicaPolida.png';

const Ponteira = (props) => {
  const [modal, setModal] = useState(false)
  const [iconePonteira, setIconePonteira] = useState(); // Ícone da ponteira
  const [imagem1, setImagem1] = useState(); // Imagem da ponteira instalada no veículo (ANTES)
  const [imagem2, setImagem2] = useState(); // Imagem da ponteira instalada no veículo (DEPOIS)
  const [pontosVenda, setPontosVenda] = useState(); // Quantos pontos o vendedor ganhará com aquela venda
  const [tipoPonteira, setTipoPonteira] = useState(); // Qual o tipo da ponteira ? polida ? dupla ? (texto)
  const [nomeVeiculo, setNomeVeiculo] = useState(); // Qual o nome do veículo

  useEffect(() => {
    setIconePonteira({imagem: require('../src/images/ponteiras/base/ponteiraUnicaPolida.png')});
    setImagem1('../src/images/ponteiras/hilux1.png');
    setImagem2('../src/images/ponteiras/hilux1.png');
    setPontosVenda('+10');
    setTipoPonteira('Duplo polida');
    setNomeVeiculo('Hi lux');
  }, [])
  console.log(iconePonteira.nature)

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = '#1e1e1e'
        translucent = {false}
        networkActivityIndicatorVisible ={true}
        />
      <View style={styles.header}>
        <Text style={styles.text}>Ponteiras</Text>
      </View>
      <Pesquisar
        placeholder="Buscar por tipo"
        imageSource={require('../assets/Search.png')}
      />
      <View style={styles.main}>
        <ScrollView>
          <ButtonPonteira
            imageSource={iconePonteira.imagem}
            title= {tipoPonteira}
            text= {nomeVeiculo}
            pontos={pontosVenda}
            onPress={() =>setModal(true)}
          /> 
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <MenuBar option = {3} props={props}></MenuBar>
      </View>

      <Modal 
        show={modal}
        close={() => setModal(false)}
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
    height: '20%',
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
    height: '58%',
    paddingLeft: 30,
    paddingRight: 30
  },

  button: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#2A59C2',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
  },

  titleButton:{
    color: '#f6f6f6',
    fontWeight: '600',
  },
  
  footer: {
    width: '100%',
    height: '22%',
    alignItems: 'center',
  },

})

export default Ponteira;
