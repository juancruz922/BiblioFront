import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Main from './Main.jsx';
import usuarios from '../data/usuarios';
import prestamos from '../data/prestamos';
import libros from '../data/libros';

const SecondScreen = ({ route }) => {
  const [searchText, setSearchText] = useState('');
  const [note, setNote] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [qrData, setQRData] = useState('');
  const { usuario } = route.params;

  const handleSearch = (text) => {
    setSearchText(text);
    setSelectedBook(text);
    const filtered = libros.filter(book => book.titulo.toLowerCase().includes(text.toLowerCase()));
    setFilteredBooks(filtered);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book.titulo);
    setSearchText(book.titulo);
    setFilteredBooks([]);
    console.log(`Seleccionaste: ${book.titulo}`);
  };

  const openModal = () => {
    const libroCoincide = libros.find(
      (libro) => libro.titulo.toLowerCase() === selectedBook.toLowerCase()
    );
  
    if (libroCoincide) {
      const fechaInicio = new Date(); // Obtiene la fecha y hora actual
  
      setQRData(`Libro: ${libroCoincide.titulo} / Nota: ${note} / Usuario: ${usuario.nombre}`);
      prestamos.prestamo.push({
        ...libroCoincide,
        nota: note,
        usuarioId: usuario.idUsuario,
        usuarioNombre: usuario.nombre,
        fechaInicio: formatDate(fechaInicio), // Guarda la fecha y hora en formato ISO
      });
  
      setIsModalVisible(true);
    } else {
      alert('Seleccione un libro de la lista');
    }

    
    console.log('Préstamos después de abrir el modal: ', prestamos.prestamo);
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
  const closeModal = () => {
    const fechaFin = new Date(); // Obtiene la fecha y hora actual al cerrar el préstamo
  
    setIsModalVisible(false);
  
    // Encuentra el préstamo correspondiente y establece la fechaFin
    const prestamoActual = prestamos.prestamo.find(
      (prestamo) => prestamo.titulo.toLowerCase() === selectedBook.toLowerCase()
    );
  
    if (prestamoActual) {
      prestamoActual.fechaFin = 'Corriendo';
    }
  
    setSelectedBook('');
    setSearchText('');
    console.log('Préstamos después de cerrar el modal: ', prestamos.prestamo);
  };

  return (
    <View style={styles.containerb}>
      <View style={styles.content}>
        <View style={styles.blueRectangle}>
          <Text style={styles.blueRectangleTitle}>RETIRO</Text>
        </View>
        <View style={styles.grayRectangle}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Seleccione un libro"
              onFocus={()=>setFilteredBooks(libros)}
              onChangeText={handleSearch}
              value={searchText}
            />
            {filteredBooks.length > 0 && (
             <FlatList
             data={filteredBooks}
             renderItem={({ item }) => (
               <TouchableOpacity
                 style={[
                   styles.searchResultItem,
                   selectedBook === item.titulo && styles.selectedItem,
                 ]}
                 onPress={() => handleBookSelect(item)}
               >
                 <Text>{item.titulo}</Text>
               </TouchableOpacity>
             )}
             keyExtractor={(item) => item.idLibro.toString()}
           />
            )}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Añadir Nota ( opcional)"
              onChangeText={(text) => setNote(text)}
              value={note}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={openModal}>
            <Text style={styles.buttonText}>Generar QR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalCustom}>
          <QRCode
  value={qrData}
  size={300} 
  color="black"
  backgroundColor="white"
/>

            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalCustom: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  menuIcon: {
    width: 20,
    height: 20,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
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
    width: '80%',
    height: '70%',
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 70,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#0D47A1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  footer: {
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,

  },
  searchResultItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  selectedItem: {
    backgroundColor: '#0D47A1',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SecondScreen;