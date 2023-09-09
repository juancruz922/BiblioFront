import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, Modal } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import Main from './Main.jsx';

const SecondScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [note, setNote] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [qrData, setQRData] = useState('');

  const libros = [
    'Los 7 Enanitos',
    'Cenicienta',
    'Blancanieves',
    'La Sirenita',
    'La Bella y la Bestia',
    'Aladino',
  ];

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = libros.filter(book => book.toLowerCase().includes(text.toLowerCase()));
    setFilteredBooks(filtered);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setSearchText(book);
    setFilteredBooks([]);
    console.log(`Seleccionaste: ${book}`);
  };

  const openModal = () => {
    setQRData(`Libro: ${selectedBook}\nNota: ${note}`);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
                      selectedBook === item && styles.selectedItem,
                    ]}
                    onPress={() => handleBookSelect(item)}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Añadir Nota"
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
  size={300} // Aumenta el tamaño del código QR
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
