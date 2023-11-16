import React from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';

const styles = StyleSheet.create({
    styleInput:{
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#E7E7E7',
        height: 50,
        marginTop: 30,
        marginStart: 30,
        marginEnd: 30,
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
    },
    
    image:{
        width: 20, 
        height: 20, 
        marginRight: 10
    },

    placeholder:{
        flex: 1, 
        height: 40, 
        fontWeight: '500'
    }
  });

const Pesquisar = ({ placeholder, imageSource }) => {
  return (
    <View style={styles.styleInput}>
      <Image source={imageSource} style={styles.image} />
      <TextInput
        placeholder={placeholder}
        style={styles.placeholder}
        placeholderTextColor= '#979797'
      />
    </View>
  );
};

export default Pesquisar;
