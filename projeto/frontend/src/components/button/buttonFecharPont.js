import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  
  position:{
    marginEnd: 30,
  },

  button: {
    backgroundColor: '#E1E1E1',
    width: '100%',
    height: 45,
    borderRadius: 7,
    justifyContent: 'center',
    
  
  },
  text: {
    color: '#8E8E8E',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  }
});

const ButtonClose = ({onPress, style }) => {
  return (
    <View style={styles.position}>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>Fechar</Text>
    </TouchableOpacity>
    </View>
  );
};

export default ButtonClose;
