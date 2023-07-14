import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Main from './src/components/Main';
import Segunda from './src/components/Segunda';
import Tercera from './src/components/Tercera';
import { Entypo } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer,useNavigation  } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { SimpleLineIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Menu.Navigator>

      <Menu.Screen
          name="App"

          options={({navigation})=>( {
            headerShown:false,
            drawerIcon: ({ color, size }) => (
<SimpleLineIcons name="logout" size={24} color="black"/>
            ),
            drawerLabel: ({ focused, color }) => (
              <View style={styles.logout}>
              <Text  style={[styles.drawerLabel, focused && { fontWeight: 'bold' }]}> 
                Log Out
              </Text>
</ View>
          ),            
          headerShown: false 
          })}
          component={Main}
        />
        
        <Menu.Screen
          name ="Segunda"  
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
                Mis préstamos
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

