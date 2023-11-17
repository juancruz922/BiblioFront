import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, SimpleLineIcons } from '@expo/vector-icons';

import Login from './src/components/Login';
import Segunda from './src/components/Segunda';
import Tercera from './src/components/Tercera';
import biblio1 from './src/components/biblio1';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [usuario, setUsuario] = useState(0);

  if (estadoUsuario === 0) {
    return (
      <View style={{ flex: 1 }}>
        <Login setEstadoUsuario={setEstadoUsuario} setUsuario={setUsuario} />
      </View>
    );
  }

  function Logout() {
    setEstadoUsuario(0);
    setUsuario(0);
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {usuario.rol === 2 && (
          <Drawer.Screen
            name="Camara"
            component={biblio1}
            options={{
              drawerIcon: ({ color, size }) => (
                <Entypo name="camera" size={24} color="black" />
              ),
            }}
          />
        )}

        {usuario.rol === 2 ? (
          <Drawer.Screen
            name="Prestamos"
            component={Tercera}
            options={{
              drawerIcon: ({ color, size }) => (
                <Entypo name="book" size={24} color="black" />
              ),
            }}
          />
        ) : (
          <Drawer.Screen
            name="Segunda"
            initialParams={{ usuario: usuario }}
            component={Segunda}
            options={{
              drawerIcon: ({ color, size }) => (
                <Entypo name="open-book" size={24} color="black" />
              ),
            }}
          />
        )}

        <Drawer.Screen
          name="Logout"
          component={Logout}
          options={{
            drawerIcon: ({ color, size }) => (
              <SimpleLineIcons name="logout" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
