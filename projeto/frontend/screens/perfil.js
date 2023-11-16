import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
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
import Globais from '../src/globais';
import { MultiSelect } from 'react-native-element-dropdown'

export default function Perfil(props) {

  const [altInfo, setAltInfo] = useState(false);
  const [nomeSeller, setNomeSeller] = useState();
  const [cpfSeller, setCpfSeller] = useState();
  const [emailSeller, setEmailSeller] = useState();
  const [cellPhoneSeller, setCellPhoneSeller] = useState();
  const [senhaSeller, setSenhaSeller] = useState();
  const [cnpjSeller, setCnpjSeller] = useState();
  const [enderecoSeller, setEnderecoSeller] = useState();
  const [numEnderecoSeller, setNumEnderecoSeller] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://soamer-api.onrender.com/seller-info?cuid=${Globais.id}`); // requisição de retorno dos dados de perfil
        const responseData = await response.text();  // Receber a resposta em texto
        const data = JSON.parse(responseData); //Transformar o texto em JSON
        setNomeSeller(data.sellerName);
        setCpfSeller(data.cpfSeller);
        setEmailSeller(data.user.email);
        setCellPhoneSeller(data.user.cellphone);
        setSenhaSeller(data.user.password);
        setCnpjSeller(data.carDealerShip.cnpj);
        setEnderecoSeller(data.user.address.logradouro);
        setNumEnderecoSeller(data.user.address.numero);
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchData(); // Chame a função ao montar o componente
    }, []); // O segundo argumento vazio [] indica que isso só deve ser executado uma vez, equivalente a componentDidMount

    const marcasIniciais = Globais.marcas
    const [selected, setSelected] = useState(marcasIniciais);
    const marcas = [
      { label: 'BMW', value: 1 },
      { label: 'CHERY', value: 2 },
      { label: 'CITROEN', value: 3 },
      { label: 'CHEVROLET', value: 4 },
      { label: 'FIAT', value: 5 },
      { label: 'FORD', value: 6 },
      { label: 'GM', value: 7 },
      { label: 'HONDA', value: 8 },
      { label: 'HYUNDAI', value: 9 },
      { label: 'JEEP', value: 10 },
      { label: 'NISSAN', value: 11 },
      { label: 'PEUGEOT', value: 12 },
      { label: 'RAM', value: 13 },
      { label: 'TOYOTA', value: 14 },
      { label: 'VOLKSWAGEN', value: 15 },
    ];

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
        <Text style={styles.textHeader}>{nomeSeller}</Text>
      </View>

      <View style={styles.containerPerfil}>
        <View style={styles.containerFotoPerfil}>
          <Image source={foto} style={styles.fotoPerfil} />
        </View>
      </View>
      <View style={{height: 65}}/>
      <ScrollView>
        <View style={{paddingLeft: 15, paddingRight: 15}}>

          <InputPerfil 
            icone={iconPerfil} 
            nome={nomeSeller} 
            editar={1} 
            onPress={() => toggleAltInfo}
            alterarInfo={altInfo}
          />

          <InputPerfil 
            icone={iconPerfil} 
            nome={cpfSeller}
          />

          <InputPerfil 
            icone={iconEmail} 
            nome={emailSeller} 
            editar={1} 
            onPress={() => toggleAltInfo}
            alterarInfo={altInfo}
          />

          <InputPerfil 
            icone={iconTelefone} 
            nome={cellPhoneSeller} 
            editar={1} 
            onPress={() => toggleAltInfo}
            alterarInfo={altInfo}
          />

          <InputPerfil 
            icone={iconSenha} 
            nome={senhaSeller} 
            editar={1} 
            onPress={() => toggleAltInfo}
            alterarInfo={altInfo}
          />

          <InputPerfil 
            icone={iconEndereco} 
            nome={cnpjSeller} 
          />

          <View>
            <View style={[styles.containerInput, {width: "55%"}]}>
              <Image source={iconEndereco} style={[styles.iconEndereco, styles.iconInicio]} />
                <TextInput style={styles.input} value={enderecoSeller} />
              <Image source={iconEditar} style={styles.iconEditar} />
              <View style={[styles.containerInput, {width: "71%", marginLeft: 10}]}>
                <TextInput style={styles.input} value={numEnderecoSeller} />
                <Image source={iconEditar} style={styles.iconEditar} />
              </View>
            </View>
          </View>
        <MultiSelect
            style={stylesDropdown.dropdown}
            placeholderStyle={stylesDropdown.placeholderStyle}
            selectedTextStyle={stylesDropdown.selectedTextStyle}
            inputSearchStyle={stylesDropdown.inputSearchStyle}
            iconStyle={stylesDropdown.iconStyle}
            search={true}
            data={marcas}
            labelField="label"
            valueField="value"
            placeholder="Selecionar Marcas"
            searchPlaceholder="Pesquisar"
            value={selected}
            onChange={item => {
              setSelected(item);
            }}
            selectedStyle={styles.selectedStyle}
          />
        </View>
      </ScrollView>
      <View style={stylesButton.container}>
        {altInfo ? (
          <ButtonSaveAlt onPress={() => handleSaveChanges} />
        ) : (
          <ButtonSair onPress={() => props.navigation.navigate("Login")} />
        )}
      </View>
      <MenuBar option = {4} props={props}></MenuBar>
    </View> 
  );
}


const stylesDropdown = StyleSheet.create({
  container: { padding: 16,
  },
    dropdown: {
      height: 50,
      backgroundColor: 'transparent',
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    selectedStyle: {
      borderRadius: 12,
    },
});


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
    color: '#1e1e1e'
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