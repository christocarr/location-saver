import React, { useState } from 'react';
import {
  ScrollView,
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
} from 'react-native';

function NewPlacesScreen(props) {
  const [titleValue, setTitleValue] = useState('');

  const handleInputChange = (text) => {
    setTitleValue(text);
  };

  const savePlace = () => {
    console.log('place saved');
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={handleInputChange}
          value={titleValue}
        />
        <Button title="Add" onPress={savePlace} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default NewPlacesScreen;
