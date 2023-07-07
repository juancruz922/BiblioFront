import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import Segunda from './Segunda.jsx'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BibliotecaOrt</Text>
      <View style={styles.content}>

        <View style={styles.rectangle}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="  D.N.I" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="  Contraseña" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Button
            
            title="Iniciar sesión" color='0D47A1'
            onPress={() => navigation.navigate(Segunda)}
></Button>
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 40,
    fontFamily: 'serif',
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: '8%',
    alignItems: 'center',

  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  input: {
    height: 55,
    borderWidth: 2,
    width: '100%',
    borderRadius: 20,
    marginLeft: 27
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 85,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft: 25,
  },
  buttonText: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#0D47A1',
  },
  rectangle: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    borderRadius: 20,
    height: '150%',
    marginTop: 0,
    display: "flex",
    justifyContent: 'center',
  
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default App;
