import {View, Text, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './SettingsStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import About from './About';
import {LoginPage, Page, SignUpPage} from './WelcomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Scanned, Contacts} from './Contacts';
import Scancard from './Scancard';
import CameraInstall from '../CameraVision';
import Cards, {Edit} from './Cards';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen1() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen2() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

function Settings({navigation}) {
  const [loading, setLoading] = useState(false);

  return (
    <View>
      <Text style={styles.tittle}>Settings</Text>
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.container1}>
          <View style={styles.options}>
            <Text style={styles.boxText}>Profile</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
          <View style={styles.options}>
            <Text style={styles.boxText}>Share app</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
          <View style={styles.options}>
            <Text style={styles.boxText}>Rate us</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
          <View style={styles.options}>
            <Text style={styles.boxText}>About app</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
          <View style={styles.options}>
            <Text style={styles.boxText}>Contact us</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
          <View style={styles.options}>
            <Text style={styles.boxText}>Privacy Policy</Text>
            <FontAwesome5 style={styles.icons} name="chevron-right" size={15} />
          </View>
        </View>
        <View>
          <Pressable onPress={() => setLoading(true)}>
            <Text style={styles.boxTextLog}>Logout?</Text>
          </Pressable>
        </View>
      </View>
      <Modal visible={loading} transparent>
        <View
          style={{
            backgroundColor: 'white',
            height: 338,
            width: 360,
            position: 'absolute',
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
            bottom: 0,
          }}>
          <View
            style={{
              height: 7,
              width: 60,
              position: 'absolute',
              top: 20,
              left: 150,
              borderRadius: 42,
              backgroundColor: '#E6ECFF',
            }}
          />
          <Text
            style={{
              textAlign: 'center',
              position: 'absolute',
              color: '#2242D8',
              fontSize: 18,
              top: 53,
              left: 68,
            }}>
            Are you sure you want to logout?
          </Text>
          <Text
            style={{
              textAlign: 'center',
              position: 'absolute',
              color: '#2242D8',
              fontSize: 12,
              width: 200,
              top: 103,
              left: 88,
            }}>
            You will need to again enter your details to login
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('welcome');
              setLoading(false);
              AsyncStorage.clear();
            }}
            style={{
              position: 'absolute',
              backgroundColor: '#2242D8',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 280,
              top: 195,
              left: 40,
              height: 50,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'white',
              }}>
              Yes, i want to
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setLoading(false);
            }}
            style={{
              position: 'absolute',
              borderWidth: 1,
              borderColor: 'blue',
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'center',
              width: 280,
              top: 250,
              left: 40,
              height: 50,
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: 'blue',
              }}>
              No, i dont want to
            </Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}

const Settingspage = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Cards') {
              iconName = 'credit-card';
              size = focused ? 25 : 20;
              color = '#2242D8';
            }
            if (route.name === 'Scan card') {
              iconName = 'barcode';
              size = focused ? 25 : 20;
              color = '#2242D8';
            }
            if (route.name === 'Add card') {
              iconName = 'plus-circle';
              size = focused ? 25 : 20;
              color = '#2242D8';
            }
            if (route.name === 'Contacts') {
              iconName = 'id-badge';
              size = focused ? 25 : 20;
              color = '#2242D8';
            }
            if (route.name === 'Settings') {
              iconName = 'cog';
              size = focused ? 25 : 20;
              color = '#2242D8';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Cards"
          options={{header: () => null}}
          component={Cards}
        />
        <Tab.Screen
          name="Scan card"
          component={Scancard}
          options={{header: () => null}}
        />
        <Tab.Screen
          name="Add card"
          options={{header: () => null}}
          component={About}
        />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};

const Stack = createNativeStackNavigator();

function MainPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Page}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Settingspage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="sign"
          component={SignUpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="scanned"
          component={Scanned}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="camera"
          component={CameraInstall}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="edit"
          component={Edit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cards"
          component={Cards}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainPage;
