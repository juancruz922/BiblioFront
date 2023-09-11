import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Feather, SimpleLineIcons } from '@expo/vector-icons';

import Login from './src/components/Login';
import Main from './src/components/Main';
import Segunda from './src/components/Segunda';
import Tercera from './src/components/Tercera';
import Biblio1 from './src/components/biblio1';

const Stack = createStackNavigator();
const Menu = createDrawerNavigator();

function App() {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [rolUsuario, setRolUsuario] = useState(0);

  
  if (estadoUsuario === 0) {
    return (
      <View style={{ flex: 1 }}>
        <Login setEstadoUsuario={setEstadoUsuario} setRolUsuario={setRolUsuario} />
      </View>
    );
  }


  return (

    <View style={{width: "100%"}}>
      
      {rolUsuario === 2 ? (
      <View style={styles.container}>
        <Biblio1 />
      </View>
    ) : ( 
      
      <NavigationContainer>
      <Menu.Navigator>


        <Menu.Screen
          name="Segunda"
          options={{
            headerTitle: null,
            drawerIcon: ({ color, size }) => (
              <Entypo name="open-book" size={24} color="black" />
            ),
            drawerLabel: ({ focused, color }) => (
              <Text style={[styles.drawerText, focused && { fontWeight: 'bold' }]}>
                Retiro
              </Text>
            ),
          }}
          component={Segunda}
        />

        <Menu.Screen
          name="Tercera"
          options={{
            headerTitle: null,
            drawerIcon: ({ color, size }) => (
              <Feather name="clock" size={24} color="black" />
            ),
            drawerLabel: ({ focused, color }) => (
              <Text style={[styles.drawerText, focused && { fontWeight: 'bold' }]}>
                Mis préstamos
              </Text>
            ),
          }}
          component={Tercera}
        />

      </Menu.Navigator>
    </NavigationContainer>
    )}
    
    </View>
   
  );
}

const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 20,
    color: 'black',
  },
  drawerText: {
    fontSize: 20,
    color: 'black',
  },
});

export default App;
