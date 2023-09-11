import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import usuarios from '../data/usuarios'; // Importar los datos de usuarios

const LoginScreen = ({ setEstadoUsuario, setRolUsuario }) => { // Recibe setEstadoUsuario como prop
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.find(user => user.nombreUsuario === nombreUsuario && user.contraseña === contraseña);

    if (usuarioEncontrado) {
      setEstadoUsuario(1); // Cambia el estado del usuario a 1
      setRolUsuario(usuarioEncontrado.rol);
      setMensaje('Inicio de sesión exitoso');
    } else {
      setMensaje('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de Usuario"
        onChangeText={setNombreUsuario}
        value={nombreUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        onChangeText={setContraseña}
        value={contraseña}
      />
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  message: {
    marginTop: 10,
  },
});

export default LoginScreen;
