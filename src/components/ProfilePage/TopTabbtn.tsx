import React from 'react';
import {View, Text, StyleSheet, TextInput, SectionList} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Pressable} from 'react-native';
import {Image} from 'react-native';
import {FlatList} from 'react-native';
import App from './BottonSheet';

function HomeScreen() {
  const DATA = [
    {
      title: 'card name',
      data: ['Work'],
    },
    {
      title: 'personal details',
      data: ['john ryan'],
    },
    {
      title: 'personal details',
      data: ['Company name', 'Designation', 'Department', 'Bio'],
    },
  ];
  return (
    <View style={styles.Maincontainer}>
      <SectionList
        sections={DATA}
        renderSectionHeader={({section}) => (
          <Text style={styles.Txt}>{section.title}</Text>
        )}
        renderItem={({item}) => (
          <View>
            {item === 'Bio' ? (
              <TextInput
                style={styles.Binputs}
                placeholder={item}
                multiline
                numberOfLines={4}
              />
            ) : (
              <TextInput style={styles.Ginputs} placeholder={item} />
            )}
          </View>
        )}
      />
      {/* <View>
        <Text style={styles.LableName}>card name</Text>
        <TextInput style={styles.Ginputs} placeholder="Work" />
        <Text style={styles.LableName}>Personal details</Text>
        <TextInput style={styles.Ginputs} placeholder="John ryan" />
        <Text style={styles.LableName}>Company details</Text>
        <TextInput style={styles.Ginputs} placeholder="Company name" />
        <TextInput style={styles.Ginputs} placeholder="Designation" />
        <TextInput style={styles.Ginputs} placeholder="Department" />
        <TextInput
          style={styles.GinputsBio}
          multiline={true}
          numberOfLines={4}
          placeholder="Bio"
        />
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  //   LableName: {
  //     paddingLeft: 30,
  //     fontSize: 18,
  //     marginVertical: 5,
  //     color: '#2242D8',
  //   },
  Maincontainer: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  Txt: {
    fontSize: 16,
    color: 'black',
  },
  Ginputs: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: '#2242D880',
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 20,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  Binputs: {
    width: 300,
    height: 90,
    borderWidth: 1,
    borderColor: '#2242D850',
    alignSelf: 'center',
    borderRadius: 20,
    paddingLeft: 20,
    textAlignVertical: 'top',
    backgroundColor: 'white',
  },

  //   GinputsBio: {
  //     width: 305,
  //     height: 100,
  //     borderWidth: 1,
  //     borderColor: '#2242D860',
  //     alignSelf: 'center',
  //     borderRadius: 25,
  //     marginVertical: 5,
  //     paddingBottom: 60,
  //     paddingLeft: 20,
  //   },
});

function SettingsScreen() {
  const DATA = [
    '#3700DC',
    '#92CAFF',
    '#EEFF00',
    '#00FA00',
    '#F910EB',
    '#8D0077',
    '#FFACAC',
  ];
  return (
    <View style={styles1.Dcontainer}>
      <Text style={styles1.Txt}>Profile photo</Text>
      <View style={styles1.box1}>
        <Image source={require('../profile.png')} />
        <Pressable style={styles1.CpBtn}>
          <FontAwesome5 color="#2242D8" name="pen" size={15} />
          <Text>change photo</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles1.Txt}>Card color</Text>
        <View style={styles1.Box1}>
          <Pressable style={styles1.plsBtn}>
            <FontAwesome5 name="plus" size={15} />
          </Pressable>
          <FlatList
            horizontal
            data={DATA}
            renderItem={({item}) => (
              <View>
                <View
                  style={{
                    backgroundColor: item,
                    height: 37,
                    width: 37,
                    borderRadius: 20,
                    marginLeft: 5,
                  }}
                />
              </View>
            )}
          />
        </View>
      </View>
      <Text style={styles1.Txt}>Logo</Text>
      <View style={styles1.box1}>
        <View style={styles1.IMgbackgrnd}>
          <Image style={styles1.imgCards} source={require('../cards.png')} />
        </View>
        <Pressable style={styles1.CpBtn}>
          <FontAwesome5 color="#2242D8" name="pen" size={15} />
          <Text>change photo</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles1 = StyleSheet.create({
  Dcontainer: {
    marginHorizontal: 15,
  },
  Txt: {
    fontSize: 16,
    color: '#2242D8',
    marginVertical: 10,
  },
  Box1: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  plsBtn: {
    width: 37,
    height: 37,
    backgroundColor: '#2242D860',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  CpBtn: {
    width: 150,
    height: 40,
    backgroundColor: '#E9ECFB',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginLeft: 40,
    marginVertical: 20,
  },
  box1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  IMgbackgrnd: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#2242D860',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Links() {
  return (
    <View>
      <App />
    </View>
  );
}

const styles2 = StyleSheet.create({
  //   mainContainer: {
  //     flex: 1,
  //   },
  //   Btnbar: {
  //     height: 480,
  //     width: 360,
  //     backgroundColor: '#2242D830',
  //     position: 'absolute',
  //     bottom: -30,
  //     borderTopLeftRadius: 25,
  //     borderTopRightRadius: 25,
  //   },
});

const Tab = createMaterialTopTabNavigator();

export const TabTopBtm = () => {
  //   const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        swipeEnabled: false,
        tabBarLabelStyle: {
          backgroundColor: '#2242D8',
          width: 100,
          paddingVertical: 10,
          borderRadius: 20,
          color: 'white',
        },
      }}>
      <Tab.Screen name="General" component={HomeScreen} />
      <Tab.Screen name="Display" component={SettingsScreen} />
      <Tab.Screen name="Links" component={Links} />
    </Tab.Navigator>
  );
};
