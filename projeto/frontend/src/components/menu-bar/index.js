import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import home from '../../images/menu-bar/home.png'
import pix from '../../images/menu-bar/historico.png'
import ponteiras from '../../images/menu-bar/ponteiras.png'
import perfil from '../../images/menu-bar/perfil.png'
import Globais from '../../globais';


export default function MenuBar({option, props}) {

  const pagHome = async () => {
    try {
      Globais.id = "2c584a89-4bef-46cf-b99c-a317f0c2b6af";
      const response = await fetch(`https://soamer-api.onrender.com/home/pontos-validade?cuid=${Globais.id}`);
      const responseData = await response.text();
      const data = JSON.parse(responseData);
      props.navigation.navigate("Home", {userData: {data}})
    } catch (error) {
      console.error('Erro na Requisição:', error);
    }
  }

  const pagBeneficio = () => {
    props.navigation.navigate("Beneficios")
  }

  const pagHistorico = () => {
    props.navigation.navigate("Historico")
  }

  const pagPerfil = async () => {
    try {
      Globais.id = "2c584a89-4bef-46cf-b99c-a317f0c2b6af";
      const response = await fetch(`https://soamer-api.onrender.com/seller-info?cuid=${Globais.id}`); // requisição de retorno dos dados de perfil
      const responseData = await response.text();  // Receber a resposta em texto
      const data = JSON.parse(responseData); //Transformar o texto em JSON
      props.navigation.navigate("Perfil", {userData: {data}});
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <View style={stylesMenuBar.container}>
      <View style={stylesMenuBar.containerMenuBar}>
        <TouchableOpacity style={[option == 1 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]} 
        onPress={() => pagHome()}>
          <Image source={home} style={stylesMenuBar.iconeHome}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 2 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]}
        onPress={() => pagBeneficio()}>
          <Image source={pix} style={stylesMenuBar.iconePix}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 3 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]} 
        onPress={() => pagHistorico()}>
          <Image source={ponteiras} style={stylesMenuBar.iconeCar}/>
        </TouchableOpacity>

        <TouchableOpacity style={[option == 4 ? [stylesMenuBar.selecionado, stylesMenuBar.espacoIcones] : stylesMenuBar.espacoIcones]} 
        onPress={() => pagPerfil()}>
          <Image source={perfil} style={stylesMenuBar.iconePerfil}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const stylesMenuBar = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerMenuBar: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    width: 300,
    borderRadius: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 5,
    marginTop: 5,
  },
  espacoIcones:{
    padding: 1,
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecionado:{
    backgroundColor: "#2A59C2",
  },
  iconeHome:{
    width: 20,
    height: 20,
  },
  iconePix: {
    width: 26,
    height: 25,
  },
  iconePerfil:{
    width: 15,
    height: 20,
  },
  iconeCar:{
    width: 23,
    height: 25,
  },
  
});
