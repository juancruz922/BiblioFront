import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Segunda from './Segunda.jsx'
import { Tercera } from './Tercera.jsx';
import { interpolate } from 'react-native-reanimated';



const App = ({ navigation }) => {
  const [dni, setDNI] = useState('');
  const [contraseña, setContraseña] = useState('');

  // Definir el array de alumnos con DNI y contraseña
  const alumnos = [
    { dni: '11111111A', contraseña: 'clave1' },
    { dni: '22222222B', contraseña: 'clave2' },
    { dni: '33333333C', contraseña: 'clave3' },
    { dni: '44444444D', contraseña: 'clave4' },
    { dni: '55555555E', contraseña: 'clave5' },
  ];

  // Definir el array de bibliotecarios con DNI y contraseña
  const bibliotecarios = [
    { dni: '66666666F', contraseña: 'clave6' },
    { dni: '77777777G', contraseña: 'clave7' },
    { dni: '88888888H', contraseña: 'clave8' },
    { dni: '99999999I', contraseña: 'clave9' },
    { dni: '10101010J', contraseña: 'clave10' },
  ];

  const irAPantalla = () => {
    // Verificar si el DNI y la contraseña coinciden con un alumno
    const alumnoEncontrado = alumnos.find(
      (alumno) => alumno.dni === dni && alumno.contraseña === contraseña
    );

    // Verificar si el DNI y la contraseña coinciden con un bibliotecario
    const bibliotecarioEncontrado = bibliotecarios.find(
      (bibliotecario) => bibliotecario.dni === dni && bibliotecario.contraseña === contraseña
    );

    if (alumnoEncontrado) {
      // Navegar a la pantalla de alumno
      navigation.navigate(Segunda);
    } else if (bibliotecarioEncontrado) {
      // Navegar a la pantalla de bibliotecario
      navigation.navigate(Tercera);
    } else {
      // Mostrar un mensaje de error
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
          <TouchableOpacity style={[styles.button]}>
            <Button
              title="Iniciar sesión"
              onPress={irAPantalla}
              style={styles.login}
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

    height:100,
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