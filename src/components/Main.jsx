import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Segunda from './Segunda.jsx';
import Tercera from './Tercera.jsx';
import biblio1 from './biblio1.jsx';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const navigation = useNavigation();
  const [dni, setDNI] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Crear arrays de estudiantes y bibliotecarios
  const estudiantes = [
    { dni: '1', contraseña: '1' },
  ];

  const bibliotecarios = [
    { dni: '2', contraseña: '2' },
  ];

  const VerificarUsuario = () => {
    // Verificar si las credenciales coinciden con un estudiante
    const estudianteEncontrado = estudiantes.find(
      (estudiante) => estudiante.dni === dni && estudiante.contraseña === contraseña
    );

    if (estudianteEncontrado) {
      // Navegar a la pantalla de estudiantes
      navigation.navigate('Segunda');
    } else {
      // Verificar si las credenciales coinciden con un bibliotecario
      const bibliotecarioEncontrado = bibliotecarios.find(
        (bibliotecario) => bibliotecario.dni === dni && bibliotecario.contraseña === contraseña
      );

      if (bibliotecarioEncontrado) {
        // Navegar a la pantalla de bibliotecarios
        navigation.navigate('biblio1');
      } else {
        // Mostrar un mensaje de error si las credenciales no coinciden
        alert('Usuario y/o contraseña incorrectos. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Ort</Text>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={24} color="black" style={styles.icon} /> {/* Icono de usuario */}
          <TextInput
            style={styles.input}
            placeholder="D.N.I"
            onChangeText={(text) => setDNI(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setContraseña(text)}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setShowPassword(!showPassword)}>
            <Text>
              {showPassword ? (
                <AntDesign name="eyeo" size={24} color="black" />
              ) : (
                <Ionicons name="eye-off-outline" size={24} color="black" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={VerificarUsuario}>
          <View style={styles.login}>
            <Text style={styles.loginText}>Iniciar sesión</Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 60,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 40,
    fontFamily: 'serif',
    marginTop: 20,
  },
  content: {
    flex: 1,
    width: '80%',
    marginTop: '8%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row', // Usamos flexDirection para alinear el icono y el input en fila
    alignItems: 'center', // Centramos verticalmente
    marginBottom: 20,
    width: '100%',
  },
  input: {
    height: 55,
    borderWidth: 2,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10, // Margen derecho para separar el icono del input
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
  loginButton: {
    backgroundColor: '#0D47A1',
    width: '100%',
    borderRadius: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
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
