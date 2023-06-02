import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useCameraDevices} from 'react-native-vision-camera';

const Scancard = ({navigation}) => {
  return (
    <View>
      <Text style={styles.title}>Scancard</Text>
      <View style={styles.container}>
        <Image style={styles.scan} source={require('../scan.png')} />
        <Text style={styles.Txt}>Scan new card</Text>
        <Text style={styles.Txt1}>
          Just tap on scan card to add contact from physical card
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('camera');
          }}
          style={styles.btn}>
          <Text style={styles.Txt2}>Scan card</Text>
        </Pressable>
        <Pressable style={styles.btn1}>
          <Image source={require('../Vector2.png')} />
          <Text style={styles.Txt3}>See scanned contacts</Text>
          <FontAwesome5 style={styles.Txt3} name="chevron-right" size={15} />
        </Pressable>
      </View>
    </View>
  );
};

export default Scancard;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#2242D8',
    fontWeight: 'bold',
    paddingLeft: 30,
  },
  container: {
    height: 540,
    width: 300,
    backgroundColor: '#2242D815',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 20,
    alignSelf: 'center',
  },
  scan: {
    marginVertical: 30,
  },
  Txt: {
    fontSize: 16,
    color: '#2242D8',
    marginBottom: 10,
  },
  Txt1: {
    width: 240,
    height: 38,
    textAlign: 'center',
    marginBottom: 10,
    color: '#2242D880',
  },
  Txt2: {
    color: '#2242D8',
  },
  Txt3: {
    color: '#2242D8',
  },
  btn: {
    width: 115,
    height: 40,
    borderWidth: 1,
    borderColor: '#2242D8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  btn1: {
    width: 260,
    height: 80,
    borderRadius: 20,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
  },
});
