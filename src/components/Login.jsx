import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importar el ícono para la contraseña
import usuarios from '../data/usuarios'; // Importar los datos de usuarios

const LoginScreen = ({ setEstadoUsuario, setRolUsuario }) => {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarContraseña, setMostrarContraseña] = useState(false); // Estado para mostrar/ocultar contraseña
  const [mensaje, setMensaje] = useState('');
  const [inputFocus, setInputFocus] = useState(null);

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(user => user.nombreUsuario === nombreUsuario && user.contraseña === contraseña);

    if (usuarioEncontrado) {
      setEstadoUsuario(1); 
      setRolUsuario(usuarioEncontrado.rol);
      setMensaje('Inicio de sesión exitoso');
    } else {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Biblioteca Ort</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={setNombreUsuario}
        value={nombreUsuario}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.passwordInput, inputFocus === 'password' ? styles.inputFocused : null]}
          placeholder="Contraseña"
          onFocus={() => setInputFocus('password')}
          onBlur={() => setInputFocus(null)}
          secureTextEntry={!mostrarContraseña}
          onChangeText={setContraseña}
          value={contraseña}
        />
        <TouchableOpacity
          onPress={() => setMostrarContraseña(!mostrarContraseña)}
          style={styles.showPasswordIcon}
        >
          <Ionicons
            name={mostrarContraseña ? 'eye' : 'eye-off'}
            size={24}
            color="#0D47A1"
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.message}>{mensaje}</Text>
     
      
    </View>
    
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 32,
    color: '#0D47A1',
    fontWeight: 'bold',
    marginBottom: 80,
    textAlign: 'center',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  inputFocused: {
    borderColor: '#0D47A1',
  },
  passwordContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    paddingLeft: 20,
  },
  showPasswordIcon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  message: {
    marginTop: 20,
    color: '#FF0000',
  },

  logo: {
    width: 100,
    height: 100,
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: -10,
  },
});

export default LoginScreen;
