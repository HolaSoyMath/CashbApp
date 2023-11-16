import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    container:{
     alignItems: 'center'
    },

    styleLabel:{
    fontWeight: "600",
    fontSize: 21,
    textAlign: "center",
    marginBottom: 10,
    color: '#1E1E1E'
  },

  border:{
    borderBottomColor: '#D0D0D0',
    borderBottomWidth: 1,
    width: 250
  },

  styleText:{
    color: '#979797',
    fontWeight: '400',
    marginTop: 10,
    fontSize: 16,
  }
});

const Titulo = ({ title, texto }) => {
  return (
    <View style={styles.container}> 
        <Text style={styles.styleLabel}>{title}</Text>
        <View style={styles.border}>
        </View>
        <Text style={styles.styleText}>{texto}</Text>
    </View>
  );
};

export default Titulo;
