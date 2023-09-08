import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const BibliotecaOrtScreen = () => {
  const navigation = useNavigation();

  const handleScanQRPress = () => {
    // Agrega la lógica para abrir la cámara del celular aquí.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BibliotecaOrt</Text>
      <View style={styles.circleContainer}>
        <TouchableOpacity onPress={handleScanQRPress}>
          <View style={styles.circle}>
            <Text style={styles.buttonText}>Escanear QR del alumno</Text>
            

          </View>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/logo.png')} 
        style={styles.image}
      />
    </View>

    
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 40,
    fontFamily: 'serif',
    marginTop:20,
  },
  circleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 300,
    height: 80,
    backgroundColor: '#3D6697',
    borderRadius: 40, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  image: {
    width: 100,
    height: 100,
  },
});
}
export default BibliotecaOrtScreen;

