import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import imgLogo from '../src/images/login/logo.png'
import imgSenha from '../src/images/login/senha.png'
import InputLogin from '../src/components/input/inputLogin.js'
import ButtonEntrar from '../src/components/button/buttonEntrar.js'
import Globais from '../src/globais'

export default function AlterarSenha(props){

  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [senhasCoincidem, setSenhasCoincidem] = useState(true);
  const [tamanhoSenha, setTamanhoSenha] = useState(true);

  const objetoJSON = {
    "cuid": Globais.id,
    "newPassword": senha,
  };

  const novaSenha = async () => {
    try {
      if (senha == confSenha) {
        if (senha.length >= 4){
          setTamanhoSenha(true);
          setSenhasCoincidem(true);
          // Enviar o JSON para o servidor
          fetch('http://soamer-api.onrender.com/change-password', {
            method: 'PUT',
            body: JSON.stringify({
              cuid: Globais.id,
              newPassword: senha,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          // Senhas coincidem, redirecionar para a tela 'Home'
          props.navigation.navigate('Home');
        }
        else {
          setTamanhoSenha(false);
        }
      } else {
        // Senhas não coincidem, exibir mensagem de erro e desabilitar o botão
        setSenhasCoincidem(false);
      };
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return(
    <View style={styles.principal}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = {corBackground}
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <View style={stylesHeader.principal}>
        <Image source={imgSuperior} style={stylesHeader.imgSuperior}/>
        <Image source={imgLogo} style={stylesHeader.logo}/>
      </View>
      <View style={stylesBody.principal}>
        <View style={stylesBody.containerTitulo}> 
          <Text style={stylesBody.textoTitulo}>Altere sua senha</Text>
          <Text style={stylesBody.textoSubTitulo}>Altere a senha fornecida para garantir a segurança da sua conta.</Text>
        </View>
        <View>
          <InputLogin 
            icone={imgSenha} 
            texto={'Senha'} 
            senha={true} 
            value={senha} 
            onChangeText={(text) => setSenha(text)}
          />
        </View>
        <View style={{marginTop: 30}}>
          <InputLogin 
            icone={imgSenha} 
            texto={'Confirme sua senha'} 
            senha={true}
            value={confSenha} 
            onChangeText={(text) => {
              setConfSenha(text);
              setSenhasCoincidem(true);
            }}
          />
          {!senhasCoincidem && (
            <Text style={{ color: 'red', marginTop: 5 }}>
              As senhas não coincidem
            </Text>
          )}
          {!tamanhoSenha && (
            <Text style={{ color: 'red', marginTop: 5 }}>
              A senha deve conter 4 caracteres ou mais
            </Text>
          )}
        </View>
        <View style={{marginTop: 50}}>
          <ButtonEntrar texto='Confirmar' onPress={novaSenha} />
        </View>
      </View>
      <Image source={imgInferior} style={stylesBody.imgInferior}/>
    </View>
  )
}
const corBackground = '#1e1e1e';

const stylesBody = StyleSheet.create({
  principal:{
    height: '100%', 
    width: '100%',
    width: '91%',
  },
  containerTitulo:{
    width: '100%',
    height: '18%',
  },
  textoTitulo: {
    fontWeight:'bold',
    fontSize: 25,
    color: '#fff'
  },
  textoSubTitulo: {
    color: '#fff'
  },
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
  imgInferior:{
    position:'absolute',
    marginTop: 514,
  }
})

const stylesHeader = StyleSheet.create({
  principal: {
    height:'25%',
    width:'100%',
  },
  imgSuperior: {
    flex: 1,
    marginLeft: '43%',
    height: 194,
    position: 'absolute'
  },
  logo:{
    marginTop: 70,
    height: 22,
    width: 100
  },
})

const styles = StyleSheet.create({
  principal: {
    backgroundColor: corBackground,
    height:'100%',
    width:'100%',
    paddingLeft: '9%',
  }
})