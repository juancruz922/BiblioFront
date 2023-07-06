
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
          <Text style={styles.blueRectangleTitle}>RETIRO</Text>
        </View>
        <View style={styles.grayRectangle}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Seleccione un libro" />
            <TextInput style={styles.input} placeholder="Agregue una nota sobre su libro" />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Generar QR</Text>
          </TouchableOpacity>
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
  menuIcon: {
    width: 20,
    height: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
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
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 70,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    width: '100%',
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
  }
});

export default SecondScreen;
