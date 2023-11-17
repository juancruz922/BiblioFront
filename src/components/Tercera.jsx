import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import prestamos from '../data/prestamos';

const PrestamosScreen = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setRefresh(!refresh);
  }, [prestamos.prestamo]);

  useFocusEffect(() => {
    setRefresh(!refresh);
  });

  const handleFinPrestamo = (tituloLibro) => {
    const prestamoActual = prestamos.prestamo.find(
      (prestamo) => prestamo.titulo.toLowerCase() === tituloLibro.toLowerCase()
    );

    if (prestamoActual) {
      const fechaFin = new Date();
      prestamoActual.fechaFin = formatDate(fechaFin);
      prestamoActual.finalizado = true; // Marca el préstamo como finalizado
      setRefresh(!refresh);
    }
    
 };
    const formatDate = (date) => {
      const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      return new Intl.DateTimeFormat('es-ES', options).format(date);
  };

  const renderFinPrestamoButton = (item) => {
    if (item.finalizado) {
      return (
        <View style={styles.prestamoFinalizado}>
          <Text style={styles.prestamoFinalizadoText}>Préstamo finalizado</Text>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={styles.finPrestamoButton}
          onPress={() => handleFinPrestamo(item.titulo)}
        >
          <Text style={styles.finPrestamoButtonText}>Fin de préstamo</Text>
        </TouchableOpacity>
      );
    }
  };

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
            {renderFinPrestamoButton(item)}
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
  finPrestamoButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  finPrestamoButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  prestamoFinalizado: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  prestamoFinalizadoText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default PrestamosScreen;
  