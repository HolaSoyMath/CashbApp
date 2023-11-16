import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';


const styles = StyleSheet.create({
  body:{
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#E0E0E0',
    borderRadius: 10
  },

  imagem1:{
    backgroundColor: '#1E1E1E',
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingStart: 4,
    paddingEnd: 4,
    marginStart: 10
  },

});

const ButtonPonteira = ({title, text, pontos, onPress, imageSource }) => {
  return (
      <TouchableOpacity style={[styles.body]} onPress={onPress}>
        <View style={styles.imagem1}>
          <Image source={imageSource} />
        </View>
        <View style={{marginStart: 20}}>
          <Text style={{color: '#1E1E1E', fontWeight: '600', fontSize: 16}}>{title}</Text>
          <Text style={{color: '#1E1E1E', fontSize: 14}}>{text}</Text>
        </View>
       
        <Text style={{backgroundColor: '#2A59C2', color: '#f2f2f2', padding: 5, borderRadius: 5, fontWeight: '500', marginStart: 50}}>{pontos}</Text>
     
      </TouchableOpacity>
  );
};



export default ButtonPonteira;