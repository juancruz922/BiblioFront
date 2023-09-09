import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Main from './Main.jsx';
export function Tercera() {
  return (
    <View style={styles.container}>
      <Text>3</Text>
    </View>
  ); }

const SecondScreen = () => {
  const handleRayasPress = () => {
    console.log('Botón de rayas presionado');
  };

  return (
    <View style={styles.containerb}>
      <View style={styles.content}>
        <View style={styles.blueRectangle}>
  
          <Text style={styles.blueRectangleTitle}>MIS PRESTAMOS</Text>
        </View> 
        <View style={styles.grayRectangle}>
<View style={{marginLeft: 10}}>

          <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Operacion Masacre</Text>
          <AntDesign name="checkcircle" size={19} color="green" style={{marginLeft: 14}}/>
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Operacion Masacre</Text>
          <MaterialIcons name="error" size={24} color="yellow" style={{marginLeft: 10}} /> 
          </View>

          <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Operacion Masacre</Text>
          <Entypo name="circle-with-cross" size={24} color="red" style={{marginLeft: 10}} />
          </View>

        
          
          </View>
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
    width: '92%',
    height: '70%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginTop: 40,
    padding: 20,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
  },
  

  logo: {
    width: 100,
    height: 100,
  },
  text1:{
  
    fontSize: 15,
    marginLeft: -17,
    marginBottom: 60,
  


  },


});

export default SecondScreen;
