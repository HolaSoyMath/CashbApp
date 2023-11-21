import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Dimensions, Image, ScrollView } from "react-native";
import Titulo from '../components/text/tituloModal'
import ButtonClose from '../components/button/buttonFecharPont';


const { height } = Dimensions.get("window");

const Modal = ({ show, close }) => {
    const [state, setState] = useState({
        opacity: new Animated.Value(0),
        container: new Animated.Value(height),
        modal: new Animated.Value(height),
    });

    const openModal = () => {
        Animated.sequence([
            Animated.timing(state.container, { toValue: 0, duration: 100, useNativeDriver: false }),
            Animated.timing(state.opacity, { toValue: 1, duration: 300, useNativeDriver: false }),
            Animated.spring(state.modal, { toValue: 0, bounciness: 5, useNativeDriver: true }),
        ]).start();
    };

    const closeModal = () => {
        Animated.sequence([
            Animated.timing(state.modal, { toValue: height, duration: 250, useNativeDriver: true }),
            Animated.timing(state.opacity, { toValue: 0, duration: 300, useNativeDriver: false }),
            Animated.timing(state.container, { toValue: height, duration: 100, useNativeDriver: false }),
        ]).start();
    };

    useEffect(() => {
        if (show) {
            openModal();
        } else {
            closeModal();
        }
    }, [show]);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: state.opacity,
                    transform: [{ translateY: state.container }],
                },
            ]}
        >
            <Animated.View
                style={[
                    styles.modal,
                    {
                        transform: [{ translateY: state.modal }],
                    },
                ]}
            >
                <View style={styles.indicator} />
                
                <Titulo 
                        title= "Ponteira Única Polida"
                        texto= "Toyota Hilux SRX"
                    />
                <View style={styles.container2}>
                    <ScrollView 
                      horizontal={true} 
                      showsHorizontalScrollIndicator={false}
                      style={styles.scrollView}
                    >
                    <Image source={require('../images/ponteiras/hilux1.png')} style={styles.cardStyle}/>
                    <Image source={require('../images/ponteiras/hilux2.png')} style={styles.cardStyle}/>
                </ScrollView>
                    <ButtonClose onPress={close} />
                </View>
            </Animated.View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "absolute",
    },

    modal: {
        bottom: 0,
        position: "absolute",
        height: "65%",
        backgroundColor: "#FFFF",
        width: "100%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        
    },
    indicator: {
        width: 50,
        height: 5,
        backgroundColor: "#ccc",
        borderRadius: 50,
        alignSelf: "center",
        marginTop: 5,
        marginBottom: 30,
    },

    cardStyle:{
        flex: 1,
        width: 300,
        height: 220,
        borderRadius: 10,
        backgroundColor: '#1E1E1E',
        alignItems: 'center',
        marginEnd: 10,
        marginTop: 50,
        marginBottom: 50
      },
      
      container2:{
        marginStart: 30
      }
});

export default Modal;
