import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import MenuBar from '../src/components/menu-bar/index'
import ButtonSaveAlt from '../src/components/button/buttonSalvarAlteracao.js'
import ButtonSair from '../src/components/button/buttonSair'
import InputPerfil from '../src/components/input/inputPerfil.js'
import detalheTopo from '../src/images/perfil/detalhe-topo.png'
import foto from '../src/images/perfil/foto-perfil.png'
import iconPerfil from '../src/images/perfil/info-pessoal.png'
import iconEditar from '../src/images/perfil/editar.png'
import iconEmail from '../src/images/perfil/email.png'
import iconSenha from '../src/images/perfil/senha.png'
import iconEndereco from '../src/images/perfil/endereco.png'
import iconTelefone from '../src/images/perfil/telefone.png'

export default function Perfil(props) {

  const [altInfo, setAltInfo] = useState(false);

  const MinhaTela = () => {
  useEffect(() => {
    // Função a ser executada antes do componente ser renderizado
    minhaFuncao();
  }, []); // O array vazio como segundo argumento faz com que o efeito seja executado apenas uma vez, equivalente ao componentDidMount

  const minhaFuncao = () => {
    const nome = props.route.params.userData.data.sellerName
    console.log('Função executada antes do componente ser renderizado');
  };}

  const toggleAltInfo = () => {
    setAltInfo(!altInfo);
  };

  const handleSaveChanges = () => {
    // Aqui você pode adicionar a lógica para salvar as alterações nos dados do usuário
    // por exemplo, fazer uma chamada à API, ou atualizar o estado, etc.

    // Após salvar, voltar para o modo de exibição padrão
    setAltInfo(false);
  };

  return (
    <View style={styles.principal}>
      <View style={styles.containerHeader}>
        <Image source={detalheTopo} style={styles.image}/> 
        <Text style={styles.textHeader}>{props.route.params.userData.data.sellerName}</Text>
      </View>

      <View style={styles.containerPerfil}>
        <View style={styles.containerFotoPerfil}>
          <Image source={foto} style={styles.fotoPerfil} />
        </View>
      </View>

      <View style={{paddingLeft: 15, paddingRight: 15, marginTop: 80}}>

        <InputPerfil 
          icone={iconPerfil} 
          nome={props.route.params.userData.data.sellerName} 
          editar={1} 
          onPress={toggleAltInfo}
          alterarInfo={altInfo}
        />

        <InputPerfil 
          icone={iconPerfil} 
          nome={props.route.params.userData.data.cpfSeller}
        />

        <InputPerfil 
          icone={iconEmail} 
          nome={props.route.params.userData.data.user.email} 
          editar={1} 
          onPress={toggleAltInfo}
          alterarInfo={altInfo}
        />

        <InputPerfil 
          icone={iconTelefone} 
          nome={props.route.params.userData.data.user.cellphone} 
          editar={1} 
          onPress={toggleAltInfo}
          alterarInfo={altInfo}
        />

        <InputPerfil 
          icone={iconSenha} 
          nome={props.route.params.userData.data.user.password} 
          editar={1} 
          onPress={toggleAltInfo}
          alterarInfo={altInfo}
        />

        <InputPerfil 
          icone={iconEndereco} 
          nome={props.route.params.userData.data.carDealerShip.cnpj} 
        />

        <View>
          <View style={[styles.containerInput, {width: "55%"}]}>
            <Image source={iconEndereco} style={[styles.iconEndereco, styles.iconInicio]} />
            <TextInput style={styles.input} placeholder='Endereço' />
            <Image source={iconEditar} style={styles.iconEditar} />
            <View style={[styles.containerInput, {width: "71%", marginLeft: 10}]}>
              <TextInput style={styles.input} placeholder='N°' />
              <Image source={iconEditar} style={styles.iconEditar} />
            </View>
          </View>
        </View>
        <View style={stylesButton.container}>
          {altInfo ? (
            <ButtonSaveAlt onPress={handleSaveChanges} />
          ) : (
            <ButtonSair onPress={toggleAltInfo} />
          )}
        </View>
      </View>
      <MenuBar option = {4} props={props}></MenuBar>
    </View> 
  );
}

const stylesButton = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const styles = StyleSheet.create({
  principal: {
    width: '100%',
    height: '100%',
  },
  containerHeader: {
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 170,
  },
  textHeader: {
    color: "#fff",
    fontWeight: 'bold',
    alignItems: 'center',
    paddingBottom: 80,
    fontSize: 30,
  },
  //Foto do perfil
  containerPerfil:{
    width:"100%",
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFotoPerfil: {
    width: 127,
    height: 127,
    backgroundColor: "#2a59c2",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  fotoPerfil:{
    height: 120,
    width: 120,
  },
  // Campos para alteração
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
    color: '#1e1e1e50'
  },
  iconPerfil: {
    width: 15,
    height: 20,
    marginRight: 22
  },
  iconInicio:{
    marginRight: 20
  },
  iconEmail: {
    width: 17,
    height: 10,
  },
  iconSenha: {
    width: 17,
    height: 19,
  },
  iconEndereco: {
    width: 17,
    height: 18,
  },
  iconEditar: {
    width: 14,
    height: 14,
  },
});




const styles2 = StyleSheet.create({
    containerButton:{
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      button: {
        width: 200,
        height: 45,
        backgroundColor: "#2a59c2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
      },
      textButton:{
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
      },
})