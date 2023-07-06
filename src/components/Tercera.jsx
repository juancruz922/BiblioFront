import { Text,StyleSheet, View } from 'react-native';

export function Tercera() {
  return (
    <View style={styles.container}>
      <Text>3</Text>
    </View>
  );
}
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const SecondScreen = () => {
  const handleRayasPress = () => {
    console.log('Botón de rayas presionado');
  };

  return (
    <View style={styles.containerb}>
      <View style={styles.content}>
        <View style={styles.blueRectangle}>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleRayasPress}>
              <Image source={require('../../assets/rayas.png')} style={styles.rayas} />
            </TouchableOpacity>
          </View>
          <Text style={styles.blueRectangleTitle}>MIS PRESTAMOS</Text>
        </View>
        <View style={styles.grayRectangle}>
          <View style={styles.inputContainer}>
          <Text style={styles.text1}>Operacion Masacre</Text>
          <Text style={styles.text1}>Operacion Masacre</Text>
          <Text style={styles.text1}>Operacion Masacre</Text>
          </View>
          
        </View>
      </View>
      <View style={styles.footer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerb: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: -50,
    width: '100%',
  },
  menuIconContainer: {
    marginRight: 10,
  },
 
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  blueRectangle: {
    width: '100%',
    height: '20%',
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blueRectangleTitle: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'serif',
  },
  grayRectangle: {
    width: '80%',
    height: '70%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
  },
  

  logo: {
    width: 100,
    height: 100,
  },
  rayas:{

    width: 35,
    height: 35,
    marginBottom: 20,
    marginRight: 80,
  },
  text1:{
    fontSize: 15,
    marginLeft: -15,
    marginBottom: 40,
    


  }

});

export default SecondScreen;
