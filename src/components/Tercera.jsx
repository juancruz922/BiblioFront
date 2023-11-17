import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import prestamos from '../data/prestamos';

const PrestamosScreen = () => {
  // En PrestamosScreen
  console.log('Préstamos al cargar la pantalla: ', prestamos.prestamo);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(!refresh);
  }, [prestamos.prestamo]);

  useFocusEffect(() => {
    setRefresh(!refresh);
  });


console.log('Préstamos: ', prestamos.prestamo);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Préstamos</Text>
      <FlatList
        data={prestamos.prestamo}
        renderItem={({ item }) => (
          <View style={styles.prestamoItem}>
            <Text>{`Libro: ${item.titulo}`}</Text>
            <Text>{`Nota: ${item.nota || 'N/A'}`}</Text>
            <Text>{`Usuario: ${item.usuarioId}`}</Text>
            <Text>{`Fecha de Inicio: ${item.fechaInicio}`}</Text>
            <Text>{`Fecha de Fin: ${item.fechaFin || 'No cerrado'}`}</Text>
          </View>
        )}
        keyExtractor={(item) => item.titulo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  prestamoItem: {
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default PrestamosScreen;
