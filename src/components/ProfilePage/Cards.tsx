import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Pressable} from 'react-native';
import {Modal} from 'react-native';
import {Alert} from 'react-native';
import {TabTopBtm} from './TopTabbtn';

const Cards = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([
    {
      name: 'john ryan',
      card: 'personal card',
      logo: require('../cards1.png'),
    },
    {
      name: 'john ryan',
      card: 'work card',
      logo: require('../cards1.png'),
    },
    {
      name: 'john ryan',
      card: 'portfolio card',
      logo: require('../cards1.png'),
    },
  ]);
  return (
    <View>
      <View style={styles.box}>
        <Image style={styles.imgCards} source={require('../cards.png')} />
        <View style={styles.box1}>
          <Text style={styles.Txt}>Hey, John</Text>
          <Image style={styles.img} source={require('../IMG.png')} />
        </View>
      </View>
      <FlatList
        data={cards}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.userDetails}>
              <Image source={item.logo} />
              <View>
                <Text>{item.name}</Text>
                <Text>{item.card}</Text>
              </View>
              <Pressable
                onPress={() => setLoading(true)}
                style={styles.MoreBtn}>
                <FontAwesome5 color="#2242D8" name="ellipsis-h" size={20} />
              </Pressable>
            </View>
            <View style={styles.btns}>
              <Pressable
                style={styles.btn}
                onPress={() => navigation.navigate('edit')}>
                <FontAwesome5 color="#2242D8" name="pen" size={15} />
                <Text style={styles.Txt}>Edit</Text>
              </Pressable>
              <Pressable style={styles.btn}>
                <FontAwesome5 color="#2242D8" name="id-card" size={15} />
                <Text style={styles.Txt}>Preview card</Text>
              </Pressable>
              <Pressable style={styles.Sbtn}>
                <FontAwesome5 color="#2242D8" name="paper-plane" size={15} />
                <Text style={styles.Txt}>Share</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
      <Modal visible={loading} transparent>
        <View style={styles.btmContainer}>
          <Pressable style={styles.mark} onPress={() => setLoading(false)} />
          <View style={styles.btnContainer}>
            <Pressable style={styles.btmBtns}>
              <Image source={require('../volume.png')} />
              <Text style={styles.btnTxt}>Write to NFC</Text>
            </Pressable>
            <Pressable style={styles.btmBtns}>
              <Image source={require('../document-copy.png')} />
              <Text style={styles.btnTxt}>Duplicate card</Text>
            </Pressable>
            <Pressable style={styles.btmBtns}>
              <FontAwesome5
                color="#2242D8"
                name="trash-alt"
                color="red"
                size={20}
              />
              <Text style={styles.btnTxt}>Delete card</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      {/* <View style={styles.container}>
        <Image style={styles.Img1} source={require('../emptyBox.png')} />
        <Text style={styles.Txt1}>Nothing in your card list!</Text>
        <Text style={styles.Txt2}>
          No worried make your first digital business card now
        </Text>
        <Image style={styles.Img2} source={require('../Line.png')} />
      </View> */}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    marginHorizontal: 10,
  },
  imgCards: {
    margin: 15,
  },
  Txt: {
    color: '#2242D8',
    fontSize: 14,
  },
  container: {
    width: 300,
    height: 155,
    backgroundColor: '#59ACF360',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 20,
    justifyContent: 'center',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 10,
  },
  btns: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 286,
    height: 49,
  },
  btn: {
    borderRightWidth: 1,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  Sbtn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  MoreBtn: {
    backgroundColor: 'white',
    width: 45,
    height: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  btmContainer: {
    width: 355,
    height: 180,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -10,
    left: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mark: {
    width: 60,
    height: 7,
    backgroundColor: '#E9ECFB',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  btmBtns: {
    height: 93,
    width: 80,
    backgroundColor: '#E9ECFB',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: 350,
    height: 180,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 25,
  },
  btnTxt: {
    fontSize: 12,
    paddingVertical: 9,
  },
  // container: {
  //   height: 540,
  //   width: 300,
  //   backgroundColor: '#2242D810',
  //   alignItems: 'center',
  //   borderRadius: 20,
  //   alignSelf: 'center',
  // },
  // Txt1: {
  //   color: '#2242D8',
  //   fontSize: 18,
  //   marginBottom: 10,
  // },
  // Txt2: {
  //   color: '#2242D880',
  //   fontSize: 12,
  //   width: 200,
  //   textAlign: 'center',
  //   marginBottom: 10,
  // },
  // Img1: {
  //   marginVertical: 20,
  // },
  // Img2: {
  //   // height: 300,,
  // },
});

export const Edit = ({navigation}) => {
  return (
    <>
      <View style={styles1.Mcontainer}>
        <View style={styles1.header}>
          <Pressable
            style={styles1.canclBtn}
            onPress={() => navigation.goBack()}>
            <Image source={require('../cancel.png')} />
          </Pressable>
          <Text style={styles1.HdrTxt}>Edit cards</Text>
          <Pressable style={styles1.savelBtn}>
            <Text>Save</Text>
          </Pressable>
        </View>
        <TabTopBtm />
      </View>
      {/* <View style={styles1.btnContainer}>
        <Pressable style={styles1.Gbtn} onPress={() => setPage('General')}>
          <Text>General</Text>
        </Pressable>
        <Pressable style={styles1.Dbtn} onPress={() => setPage('display')}>
          <Text>Display</Text>
        </Pressable>
        <Pressable style={styles1.Lbtn} onPress={() => setPage('Links')}>
          <Text>Links</Text>
        </Pressable>
      </View>
      {page === 'General' && (
        
      )}
      {page === 'display' && (
      )}
      {page === 'Links' && (
        <View>
          <Text>links</Text>
        </View>
      )} */}
    </>
  );
};

const styles1 = StyleSheet.create({
  Mcontainer: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  canclBtn: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#2242D850',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HdrTxt: {
    fontSize: 18,
    color: '#2242D8',
  },
  savelBtn: {
    width: 80,
    height: 30,
    backgroundColor: '#2242D850',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  btnContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 5,
    justifyContent: 'space-evenly',
  },
  Gbtn: {
    width: 105,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Dbtn: {
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2242D8',
  },
  Lbtn: {
    width: 105,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#2242D8',
  },
  Gencontainer: {},

  //// display ////
  Dcontainer: {},
});
