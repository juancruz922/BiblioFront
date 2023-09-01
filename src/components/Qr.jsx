
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Main from './Main.jsx';


const Qr = () => {const handleRayasPress = () => {
    console.log('Botón de rayas presionado');};
return (
    <View style={styles.blueRectangle}>
<Text style={styles.blueRectangleTitle}>Mi QR</Text>
        </View>
);
};
    
const styles = StyleSheet.create({

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

});

export default Qr;