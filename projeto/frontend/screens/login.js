import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native'
import imgSuperior from '../src/images/login/detalheSuperior.png'
import imgInferior from '../src/images/login/detalheInferior.png'
import imgLogo from '../src/images/login/logo.png'
import imgPerfil from '../src/images/login/info-pessoal.png'
import imgSenha from '../src/images/login/senha.png'
import InputLogin from '../src/components/input/inputLogin.js'
import ButtonEntrar from '../src/components/button/buttonEntrar.js'
import Globais from '../src/globais'
import CheckBox from 'react-native-check-box'

export default function Login(props){   

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [credencial, setCredencial] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(`https://soamer-api.onrender.com/login?cpf=${formataCPF(cpf)}&password=${senha}`); // requisição de Login
      const responseData = await response.text();  // Receber a resposta em texto
      if (responseData == "Credenciais inválidas"){ // Verificar se a resposta é de Credencial Inválida
        setCredencial(false); // Setar crendencial como falsa para aparecer o texto de "CPF/Senha inválidos"
      }
      else{
        setCredencial(true); // Setar crendencial como Verdadeira para NÃO aparecer o texto de "CPF/Senha inválidos"
        const data = JSON.parse(responseData); //Transformar o texto em JSON
        Globais.id = data.cuid; // Setar o ID Global com a resposta do CUID
        if (data.isNewUser == true) { // Verificar se é um novo usuário
          props.navigation.navigate('AlterarSenha'); // Encaminhar para a tela de Alterar Senha
        }
        else{
          props.navigation.navigate('Home'); // Encaminhar para a tela de Home
        }
      } 
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
          {!credencial && (
            <Text style={{ color: 'red', marginTop: 5 }}>
              CPF/Senha inválidos
            </Text>
          )}
        </View>
        <View style={stylesBody.containerTermos}>
          <CheckBox
            isChecked={isChecked} 
            onClick={() => setIsChecked(!isChecked)}
            checkBoxColor='#fff'
          />
          <Text style={stylesBody.textoSubTitulo}>Eu li e concordo com os </Text>
          <TouchableOpacity>
            <Text style={stylesBody.termosDeUso}>termos de uso</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 50}}>
          <ButtonEntrar texto='Entrar' onPress={handleLogin} check={isChecked}/>
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
  containerTermos: {
    marginTop: 30,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  termosDeUso: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
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