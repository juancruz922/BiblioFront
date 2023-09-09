import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Segunda from './Segunda.jsx';
import Tercera from './Tercera.jsx';

const App = () => {
  const navigation = useNavigation();
  const [dni, setDNI] = useState('');
  const [contraseña, setContraseña] = useState('');

  // Crear arrays de estudiantes y bibliotecarios
  const estudiantes = [
    { dni: '11111111A', contraseña: 'clave1' },
    { dni: '22222222B', contraseña: 'clave2' },
    { dni: '33333333C', contraseña: 'clave3' },
  ];

  const bibliotecarios = [
    { dni: '66666666F', contraseña: 'clave6' },
    { dni: '77777777G', contraseña: 'clave7' },
    { dni: '88888888H', contraseña: 'clave8' },
  ];

  const VerificarUsuario = () => {
   
    // Verificar si las credenciales coinciden con un estudiante
    const estudianteEncontrado = estudiantes.find(
      (estudiante) => estudiante.dni === dni && estudiante.contraseña === contraseña
    );

    if (estudianteEncontrado) {
      // Navegar a la pantalla de estudiantes
      navigation.navigate(Segunda);
    } else {
      // Verificar si las credenciales coinciden con un bibliotecario
      const bibliotecarioEncontrado = bibliotecarios.find(
        (bibliotecario) => bibliotecario.dni === dni && bibliotecario.contraseña === contraseña
      );

      if (bibliotecarioEncontrado) {
        // Navegar a la pantalla de bibliotecarios
        navigation.navigate(Tercera);
      } else {
        // Mostrar un mensaje de error si las credenciales no coinciden
        alert('Usuario y/o contraseña incorrectos.Inténtalo de nuevo.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Ort</Text>
      <View style={styles.content}>
        <View style={styles.rectangle}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="  D.N.I"
              onChangeText={(text) => setDNI(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="  Contraseña"
              secureTextEntry={true}
              onChangeText={(text) => setContraseña(text)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={VerificarUsuario}>
            <View style={styles.login}>
              <Text>Iniciar sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>
    </View>
  );
};

// ... Estilos (mismos estilos que proporcionaste)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },

  login:{
    color: '#0D47A1',
    
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 40,
    fontFamily: 'serif',
    marginTop:20,
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

    height: 100, 
    alignItems: 'center',
    justifyContent: 'center',
    
    
    
  },
  

  rectangle: {
    backgroundColor: '#E0E0E0',
    width: '80%',
    borderRadius: 20,
    height: '130%',
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

