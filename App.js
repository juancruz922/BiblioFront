import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main'
import Segunda from './src/components/Segunda'
import Tercera from './src/components/Tercera'


import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Contacto } from "./pages/Contacto";
import { Acercade } from "./pages/Acercade";
import { Inicio } from "./pages/Inicio";

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Inicio"
          options={{
            headerTitle: "Nuevo titulo",
          }}
          component={Inicio}
        />
        <Menu.Screen name="Segunda" component={Segunda} />
        <Menu.Screen name="Tercera" component={Tercera} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}
