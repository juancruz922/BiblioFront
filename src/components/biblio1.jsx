import { Camera, CameraType, BarCodeScanningResult } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();
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
          <Button onPress={requestPermission} title="Escanear QR del alumno" />
        </View>
      </View>
    );
  }

  const handleBarCodeScanned = () => {
    console.log('entre');
    navigation.navigate('Prestamos');
  };

  function toggleCameraType() {
    setType((current) => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera
        
        type={type}
        ratio="2340:1080"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.buttonText}>Cambiar Cámara</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={{paddingLeft: 300}}
            onPress={() => handleBarCodeScanned()}
          >
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
  },
  camera: {
    width: windowWidth,
    height: (windowWidth * 1080) / 2340,
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
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 30,
    width: windowWidth * 1.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 30,
    width: windowWidth * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  botonqr: {
    backgroundColor: '#3D6697',
  },
});