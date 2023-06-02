import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  LogBox,
} from 'react-native';
import React, {createRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorages = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const ref = createRef('');

  const storeData = async () => {
    // console.log(user);
    try {
      let user = {
        Name: name,
        Age: age,
      };
      const value = await AsyncStorage.setItem('users', JSON.stringify(user));
      console.log(value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>AsyncStorages</Text>
      <TextInput
        style={styles.input1}
        defaultValue={name}
        onChangeText={val => setName(val)}
        placeholder="enter name"
      />
      <TextInput
        style={styles.input2}
        defaultValue={age}
        onChangeText={val => setAge(val)}
        placeholder="enter age"
      />
      <Pressable onPress={() => storeData()} style={styles.btn}>
        <Text style={styles.btnTxt}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input1: {
    borderWidth: 1,
    width: '70%',
    position: 'absolute',
    top: 150,
    left: 50,
  },
  input2: {
    borderWidth: 1,
    width: '70%',
    position: 'absolute',
    top: 210,
    left: 50,
  },
  btn: {
    backgroundColor: '#2242D8',
    width: 100,
    height: 40,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    top: 280,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AsyncStorages;
