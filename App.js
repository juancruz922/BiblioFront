import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main';
import Segunda from './src/components/Segunda';
import Tercera from './src/components/Tercera';
import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';


const Menu = createDrawerNavigator();

export default function App() {
  
  return ( 
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name=","
          
          options={{
            headerTitle: null,
            headerStyle: styles.NombresBarra,
            drawerIcon: ({ color, size }) => (
              <Entypo name="home" size={24} color="black" />  
            ),
            drawerLabel: ({ focused, color }) => (
              <Text style={[styles.drawerLabel, focused && { fontWeight: 'bold' }]}>
                Inicio
              </Text>
          ),
          }}
          component={Main}
        />
        <Menu.Screen style={{}} 
          name ="-"  
          
          options={{
            headerTitle: null,
            headerStyle: styles.NombresBarra,
            drawerIcon: ({ color, size }) => (
              <Entypo name="open-book" size={24} color="black" /> 
            ),
            drawerLabel: ({ focused, color }) => (
              <Text style={[styles.drawerLabel, focused && { fontWeight: 'bold' }]}>
                Retiro
              </Text>
            ),
          }}
          
          component={Segunda}
        />
        <Menu.Screen
          name="."
          options={{
            headerTitle: null,
            headerStyle: styles.NombresBarra,
            drawerIcon: ({ color, size }) => (
              <Feather name="clock" size={24} color="black" />
            ),
            drawerLabel: ({ focused, color }) => (
              <Text style={[styles.drawerLabel, focused && { fontWeight: 'bold' }]}>
                Mis prestamos
              </Text>
            ),
          }}
          component={Tercera}
        />
      </Menu.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 20,
    color: 'black',
  },
}); 
