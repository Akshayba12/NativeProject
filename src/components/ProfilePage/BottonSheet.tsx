import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const DATA = [
    {
      Txt: 'Numbers',
      logo: require('./Icons/telephone.png'),
    },
    {
      Txt: 'links',
      logo: require('./Icons/link.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/linkedin.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/twitter.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/telephone.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/facebook.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/youtube.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/github.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/dribbble.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/behance.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/spotify.png'),
    },
    {
      Txt: 'Accounts',
      logo: require('./Icons/twitch.png'),
    },
  ];

  // renders
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text style={styles.Txt}>Add links and contacts</Text>
            <Text style={styles.Txt1}>Tap on filed to add</Text>
            <View style={styles.container1}>
              {DATA.map(item => (
                <View style={styles.box} key={item.id}>
                  <Image style={styles.Img} source={item.logo} />
                  <Text style={styles.IMgTxt}>{item.Txt}</Text>
                </View>
              ))}
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '108%',
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#E9ECFB',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  Txt: {
    color: '#2242D8',
    fontSize: 16,
  },
  Txt1: {
    color: '#2242D850',
  },
  container1: {
    width: 300,
    height: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    margin: 10,
    width: 80,
    height: 85,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Img: {
    width: 22,
    height: 20,
  },
  IMgTxt: {
    fontSize: 12,
    color: '#2242D8',
  },
});

export default App;
