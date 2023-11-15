import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from 'react'
import { Card } from 'react-native-paper'
import ButtonVenda from "../src/components/button/buttonVenda"
import ButtonCard from "../src/components/button/buttonCard"
import LabelComponent from "../src/components/text/label"
import LinkComponent from "../src/components/text/link"
import TitleComponent from "../src/components/text/titleHis"
import { Divider } from "react-native-paper"
import Modal from '../src/components/text/modalCamp'
import TextCard from '../src/components/text/cardText'
import MenuBar from "../src/components/menu-bar"
import { TouchableOpacity } from "react-native-gesture-handler"
import Globais from "../src/globais"

export default function PagInicial(props) {

  const [pontos, setPontos] = useState(0);
  const [nome, setNome] = useState();
  const [modal, setModal] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Faça a sua requisição à API aqui
        let response = await fetch(
          `https://soamer-api.onrender.com/home/pontos-validade?cuid=${Globais.id}`
        );
        let responseData = await response.text();
        let data = JSON.parse(responseData);
        setPontos(data.points[0].points);
        
        response = await fetch(`https://soamer-api.onrender.com/seller-info?cuid=${Globais.id}`); // requisição de retorno dos dados de perfil
        responseData = await response.text();  // Receber a resposta em texto
        data = JSON.parse(responseData); //Transformar o texto em JSON
        setNome(data.sellerName)

      } catch (error) {
        console.error('Erro na Requisição:', error);
      }
    };

    fetchData(); // Chame a função ao montar o componente
    }, []); // O segundo argumento vazio [] indica que isso só deve ser executado uma vez, equivalente a componentDidMount

    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.perfil}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} 
                onPress={() => props.navigation.navigate("Perfil")}>
                  <Image style={styles.img} source={require("../assets/foto-perfil.png")} />
                  <Text style={{ color: "#f6f6f6", fontSize: 24, fontWeight: "500", marginLeft: 15 }}>{nome}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerPontos}>
                <View style={styles.pontos}>
                    <Text style={styles.labelPonto}>Seus pontos</Text>
                    <Text style={styles.points}>${pontos}</Text>
                </View>
                <View style={[styles.pontos, {marginRight: 50}]}>
                    <Text style={styles.labelPonto}>Validade</Text>
                    <Text style={styles.points}>2 m 2 d</Text>
                </View>
              </View>
              <View>
                  <ButtonVenda onPress={() => props.navigation.navigate("ScannerScreen")}/>
              </View>
          </View>
          <View style={styles.main}>
              <View style={styles.labelHistorico}>
                  <LabelComponent title="Histórico" />
                  <LinkComponent mudarTela={() => props.navigation.navigate("Historico")} />
              </View>
              <View style={styles.historico}>
                  <View style={styles.imgHistorico}>
                      <Image style={styles.img2} source={require("../assets/imgHistorico.png")} />
                  </View>
                  <View style={styles.infHist}>
                      <View style={styles.columnWrapper}>
                          <TitleComponent title="Dupla Polida" />
                          <Text style={{ color: "#696969", fontSize: 12  }}>Toyota Corolla Cross</Text>
                      </View>
                      <Text style={{ fontWeight: "600", fontSize: 13 }}>$ 10</Text>
                  </View>
              </View>
              <Divider style={{ marginTop: 10, height: 0.6 }}></Divider>

              <View style={styles.historico}>
                  <View style={styles.imgHistorico}>
                      <Image style={styles.img2} source={require("../assets/imgHistorico.png")} />
                  </View>
                  <View style={styles.infHist}>
                      <View style={styles.columnWrapper}>
                          <TitleComponent title="Único Polida" />
                          <Text style={{ color: "#696969", fontSize: 12 }}>Chevrolet Tracker 1.2</Text>
                      </View>
                      <Text style={{ fontWeight: "600", fontSize: 13}}>$ 10</Text>
                  </View>
              </View>
              <Divider style={{ marginTop: 10, height: 0.6 }}></Divider>
            
              <View style={styles.labelCampanha}>
                  <LabelComponent title="Campanhas" />
                  {/* <LinkComponent /> */}
              </View>
          </View>
          <View style={styles.containerCampanha}>
            <Card style={styles.cardStyle}>
                <TextCard title="Ganhe +2 pontos" paragraph="Na venda de uma ponteira bocal duplo polida."/>
                <ButtonCard onPress={() => setModal(true)}/>
            </Card>
          </View>

          <MenuBar option={1} props={props} style/>

          <Modal 
            show={modal}
            close={() => setModal(false)}
          />
      </View>
    );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    },

    header:{
      padding: 30,
      paddingTop: 50,
      backgroundColor: '#1e1e1e',
      height: 280,
      width: "100%",
    },

    perfil:{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 15,
    },

    img:{
      backgroundColor: '#2A59C2',
      borderRadius: 100,
      height: 50,
      width: 50
    },

    containerPontos: {
      flexDirection: 'row', 
      width: '100%', 
      justifyContent: 'space-between'
    },

    pontos:{
      paddingTop: 25,
      flexDirection: 'collumn',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      gap: 7,
    },

    labelPonto:{
      color: '#f6f6f6',
      fontSize: 14,
    },

    points:{
      color: '#f6f6f6',
      fontSize: 30,
      fontWeight: '500',
    },
    
    main:{
      flex: 1,
      margin: 30,
      height: '100%'
    },

    labelHistorico:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },

    historico:{
      flexDirection: 'row', 
      alignItems: 'center',
      marginTop: 20,
    },

    columnWrapper: {
        flexDirection: 'column',
        marginRight: 140
    },

    infHist:{
      paddingStart: 15,
      flexDirection: 'row',     
      alignItems: 'center'     
    },

    imgHistorico:{
      backgroundColor: '#1e1e1e',
      width: 45,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },

    labelCampanha:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 40,
    },

    containerCampanha: {
        flex: 1,
        flexDirection: 'row',
        height: 290,
        marginLeft: 30,
        marginTop: 30,
        marginRight: 20,
    },

    cardStyle:{
      flex: 1,
      width: 200,
      height: 140,
      borderRadius: 10,
      backgroundColor: '#1E1E1E',
      marginEnd: 10,
      marginTop: 25
    },
  
})
