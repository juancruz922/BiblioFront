import { Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    // Request camera permissions when the component mounts
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Biblioteca Ort</Text>
        <View style={styles.botonqr}> 
        <Button  onPress={requestPermission} title="Escanear QR del alumno" />
        </View>
   
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.blueRectangle}>
          <Text style={styles.blueRectangleTitle}>Biblioteca Ort</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.buttonText}>Escanear QR</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    width: windowWidth,
    height: windowHeight,
  },
  camera: {
    flex: 1,
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
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 40,
    fontFamily: 'serif',
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3D6697',
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 30,
    width: windowWidth * 0.4,  // Ajustado el ancho del botón
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,  // Ajustado el tamaño del texto
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  botonqr: {
    backgroundColor: '#3D6697',
  }
});
