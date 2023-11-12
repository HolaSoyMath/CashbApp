import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import imgLogo from '../src/images/login/logo.png'
import imgPerfil from '../src/images/login/info-pessoal.png'
import imgSenha from '../src/images/login/senha.png'
import InputLogin from '../src/components/input/inputLogin.js'
import { useFonts } from 'expo-font';
import ButtonEntrar from '../src/components/button/buttonEntrar.js'

export default function Login(props){   

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      console.log(formataCPF(cpf));
      console.log(senha);
      const response = await fetch(`http://soamer-api.onreader.com/login?cpf=${formataCPF(cpf)}&password=${senha}`);
      const data = await response.json();

      // Faça algo com os dados da resposta, como verificar se a autenticação foi bem-sucedida
      console.log(data);

      // Navegar para a próxima tela se a autenticação for bem-sucedida
      navigation.navigate('Home');

    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  function formataCPF(cpf){
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "");
    
    //realizar a formatação...
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

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
          <Text style={stylesBody.textoTitulo}>Bem Vindo !</Text>
          <Text style={stylesBody.textoSubTitulo}>Aqui cada venda vale cashback</Text>
        </View>
        <View>
          <InputLogin icone={imgPerfil} texto={'CPF'} teclado="numeric" value={cpf} onChangeText={(text) => setCpf(text)}/>
        </View>
        <View style={{marginTop: 30}}>
          <InputLogin icone={imgSenha} texto={'Senha'} senha={true} value={senha} onChangeText={(text) => setSenha(text)}/>
        </View>
        <View style={{marginTop: 50}}>
          <ButtonEntrar texto='Entrar' onPress={handleLogin}/>
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