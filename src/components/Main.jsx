import React , { useState , useEffect } from "react";
import {getUsers} from "./api/Api"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Segunda from "./Segunda.jsx";

const Main = ({ navigation }) => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(()=>{(
    setUsuarios(getUsers())
  ),[]})
console.log(usuarios);
  function irASegundaPantalla(){
    const dniIng = document.getElementById("dni");
    const contraIng = document.getElementById("contraseña");
    const flagUser = false
    const flagPassword = false
    let i=0
    while(!flagUser){
      if(usuarios[i].dni == dniIng){
        if(usuarios[i].contraseña == contraIng){
          flagPassword = true
        }
        flagUser = true
        i = i+1
      }
    };
    if(flagUser){
      if(flagPassword){
        navigation.navigate("Segunda");
      }
      else{
        alert("la contraseña es incorrecta")
      }
    }
    else{
      alert("el usuario es incorrecto")
    }
  };
  return (
    <div> 
    <View style={styles.container}>
      <Text style={styles.title}>Biblioteca Ort</Text>
      <View style={styles.content}>
        <View style={styles.rectangle}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="  D.N.I" id="dni"/>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="  Contraseña" id="contraseña"/>
          </View>

          <TouchableOpacity style={[styles.button]}>
            <Button
              title="Iniciar sesión"
              onPress={irASegundaPantalla()}
            ></Button>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../../assets/logo.png")} style={styles.logo} />
      </View>
    </View> 
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#0D47A1",
    marginBottom: 40,
    fontFamily: "serif",
    marginTop: 20,
  },
  content: {
    flex: 1,
    width: "100%",
    marginTop: "8%",
    alignItems: "center",
  },
  inputContainer: {
    marginBottom: 20,
    width: "80%",
  },
  input: {
    height: 55,
    borderWidth: 2,
    width: "100%",
    borderRadius: 20,
    marginLeft: 27,
  },
  button: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  rectangle: {
    backgroundColor: "#E0E0E0",
    width: "80%",
    borderRadius: 20,
    height: "130%",
    marginTop: 0,
    display: "flex",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: -10,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default Main;
