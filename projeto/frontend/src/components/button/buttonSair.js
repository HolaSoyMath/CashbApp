import { useLinkProps } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonSair({onPress}) {


    return (
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
  containerButton:{
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: "#FEE2E2",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textButton:{
    justifyContent: 'center',
    alignItems: 'center',
    color: "#CF6868",
    fontWeight: 'bold',
    fontSize: 20,
  },
})