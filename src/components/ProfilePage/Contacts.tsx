import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TextInput} from 'react-native';
import {SectionList} from 'react-native';
import {ScrollView} from 'react-native';

export const Scanned = ({navigation}) => {
  const DATA = [
    {
      title: 'A',
      data: [
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
      ],
    },
    {
      title: 'B',
      data: [
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
      ],
    },
    {
      title: 'C',
      data: [
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
        {
          logo: require('../Ellipse8.png'),
          name: 'shiva',
          role: 'tali tinnuda',
        },
      ],
    },
  ];
  return (
    <View
    // style={{
    //   flex: 1,
    //   // justifyContent: 'center',
    //   // alignItems: 'center',
    // }}
    >
      <View style={styles1.container1}>
        <Pressable
          style={styles1.backBtn}
          onPress={() => navigation.navigate('Contacts')}>
          <FontAwesome5 name="long-arrow-alt-left" size={25} />
        </Pressable>
        <Text style={styles1.txt1}>Scanned</Text>
        <View style={styles1.circles}>
          <Pressable onPress={() => Alert.alert('hi')} style={styles1.circle1}>
            <Text style={styles1.pngs}>+</Text>
          </Pressable>
          <Pressable style={styles1.circle2}>
            <FontAwesome5 color="#2242D8" name="pen" size={20} />
          </Pressable>
        </View>
      </View>
      <View style={styles1.box}>
        <View style={styles1.box1}>
          <Text>'O'</Text>
          <TextInput placeholder="serach by name, job..." />
        </View>
        <Pressable style={styles1.box2}>
          <Image style={styles1.fltr} source={require('../filter.png')} />
        </Pressable>
      </View>
      <View>
        <SectionList
          sections={DATA}
          renderSectionHeader={({section}) => (
            <Text style={styles1.headsct}>{section.title}</Text>
          )}
          renderItem={({item}) => (
            <View style={styles1.box3}>
              <View style={styles1.container}>
                <View>
                  <Image style={styles1.contctImg} source={item.logo} />
                </View>
                <View>
                  <Text style={styles1.ContctTxt}>{item.name}</Text>
                  <Text style={styles1.ContctRole}>{item.role}</Text>
                </View>
                <Pressable style={styles1.viewBtn}>
                  <Text>View</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
        <View style={styles1.contctlist}>
          <Text style={styles1.contctlistChar}>A</Text>
          <Text style={styles1.contctlistChar}>B</Text>
          <Text style={styles1.contctlistChar}>C</Text>
          <Text style={styles1.contctlistChar}>D</Text>
          <Text style={styles1.contctlistChar}>E</Text>
          <Text style={styles1.contctlistChar}>F</Text>
          <Text style={styles1.contctlistChar}>G</Text>
          <Text style={styles1.contctlistChar}>H</Text>
          <Text style={styles1.contctlistChar}>I</Text>
        </View>
      </View>
    </View>
  );
};

const styles1 = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
    marginHorizontal: 10,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#2242D825',
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  backBtnTxt: {
    fontSize: 10,
  },
  txt1: {
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#2242D8',
  },
  circles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  box1: {
    width: 260,
    height: 50,
    backgroundColor: '#2242D820',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  box2: {
    width: 50,
    height: 50,
    backgroundColor: '#2242D820',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pngs: {
    color: '#2242D8',
    fontSize: 25,
  },
  circle1: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#2242D820',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#2242D820',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headsct: {
    width: 35,
    height: 35,
    backgroundColor: '#2242D810',
    borderRadius: 17,
    color: '#2242D8',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
    marginBottom: 5,
    justifyContent: 'center',
    marginLeft: 25,
  },
  viewBtn: {
    width: 70,
    height: 28,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2242D8',
    borderWidth: 1,
  },
  contctImg: {
    height: 48,
    width: 48,
  },
  ContctTxt: {
    fontSize: 14,
    color: '#2242D8',
    marginBottom: 6,
    fontWeight: 'bold',
  },
  ContctRole: {
    fontSize: 12,
    color: '#2242D8',
  },
  contctlist: {
    width: 24,
    height: 235,
    backgroundColor: '#2242D810',
    position: 'absolute',
    right: 0,
    top: 140,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  contctlistChar: {
    color: '#2242D8',
    fontWeight: 'bold',
  },
  // txt1: {
  //   textAlign: 'center',
  //   fontSize: 20,
  //   color: '#2242D8',
  //   position: 'absolute',
  //   top: 10,
  //   left: 150,
  // },
  // circle1: {
  //   height: 40,
  //   width: 40,
  //   backgroundColor: '#2242D850',
  //   borderRadius: 20,
  //   position: 'absolute',
  //   right: 70,
  //   top: 5,
  // },
  // plussign: {
  //   fontSize: 28,
  //   textAlign: 'center',
  // },
  // pen: {
  //   textAlign: 'center',
  // },
  // circle2: {
  //   height: 40,
  //   width: 40,
  //   backgroundColor: '#2242D850',
  //   justifyContent: 'center',
  //   borderRadius: 20,
  //   position: 'absolute',
  //   right: 25,
  //   top: 5,
  // },
  // box1: {
  //   height: 50,
  //   width: 250,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-evenly',
  //   backgroundColor: '#2242D810',
  //   position: 'absolute',
  //   top: 70,
  //   left: 30,
  //   borderRadius: 20,
  // },
  // box2: {
  //   width: 50,
  //   height: 50,
  //   borderRadius: 20,
  //   backgroundColor: '#EAEDFB',
  //   position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   left: 290,
  //   top: 68,
  // },
  container: {
    marginLeft: 18,
    borderRadius: 20,
    height: 60,
    width: 294,
    // position: 'absolute',
    // left: 40,
    // display: 'flex',
    flexDirection: 'row',
    // alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#2242D825',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export const Contacts = ({navigation}) => {
  return (
    <View>
      <Text style={styles.Txt}>Contacts</Text>
      <Pressable style={styles.box}>
        <Text style={styles.boxTxt}>+ create group</Text>
      </Pressable>
      <View style={styles.box1}>
        <View style={styles.circle} />
        <TextInput placeholder="search by job, name..." />
      </View>
      <Pressable style={styles.box2}>
        <Image style={styles.fltr} source={require('../filter.png')} />
      </Pressable>
      <View style={styles.container1}>
        <Image style={styles.ConImages} source={require('../Ellipse8.png')} />
        <Text style={styles.inptTxt}>All contacts</Text>
        <Text style={styles.inptTxt1}>35 contacts</Text>
        <FontAwesome5 style={styles.icons} name="chevron-right" size={25} />
      </View>
      <View style={styles.container2}>
        <Image style={styles.ConImages} source={require('../Ellipse12.png')} />
        <Text style={styles.inptTxt}>Recently added</Text>
        <Text style={styles.inptTxt1}>30 contacts</Text>
        <FontAwesome5 style={styles.icons} name="chevron-right" size={25} />
      </View>
      <View style={styles.container3}>
        <Image style={styles.ConImages} source={require('../Ellipse16.png')} />
        <Text style={styles.inptTxt}>Live contacts</Text>
        <Text style={styles.inptTxt1}>40 contacts</Text>
        <FontAwesome5 style={styles.icons} name="chevron-right" size={25} />
      </View>
      <Pressable
        style={styles.container4}
        onPress={() => navigation.navigate('scanned')}>
        <Image style={styles.ConImages} source={require('../Ellipse17.png')} />
        <Text style={styles.inptTxt}>Scanned</Text>
        <Text style={styles.inptTxt1}>0 contacts</Text>
        <FontAwesome5 style={styles.icons} name="chevron-right" size={25} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Txt: {
    color: '#2242D8',
    fontSize: 30,
    position: 'absolute',
    left: 25,
  },
  box: {
    width: 126,
    height: 35,
    backgroundColor: '#EAEDFB',
    borderColor: 'blue',
    borderWidth: 1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    borderRadius: 20,
    left: 210,
    top: 10,
  },
  boxTxt: {
    color: '#2242D8',
  },
  box1: {
    width: 250,
    height: 50,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#EAEDFB',
    position: 'absolute',
    top: 60,
    left: 25,
  },
  box2: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
    position: 'absolute',
    left: 290,
    top: 60,
  },
  fltr: {
    position: 'absolute',
    top: 15,
    left: 15,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
  inptTxt: {
    color: '#2242D8',
    fontWeight: 'bold',
  },
  inptTxt1: {
    color: '#8B9CEB',
    paddingVertical: 5,
  },
  icons: {
    position: 'absolute',
    left: 280,
    color: '#8B9CEB',
  },
  ConImages: {
    position: 'absolute',
    left: 20,
    // backgroundColor: '#8B9CEB',
  },
  container1: {
    width: 320,
    height: 80,
    position: 'absolute',
    top: 130,
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },
  container2: {
    width: 320,
    height: 80,
    position: 'absolute',
    top: 220,
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },
  container3: {
    width: 320,
    height: 80,
    position: 'absolute',
    justifyContent: 'center',
    top: 310,
    alignItems: 'center',
    left: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },
  container4: {
    width: 320,
    height: 80,
    position: 'absolute',
    top: 400,
    alignItems: 'center',
    justifyContent: 'center',
    left: 25,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#EAEDFB',
  },
});
