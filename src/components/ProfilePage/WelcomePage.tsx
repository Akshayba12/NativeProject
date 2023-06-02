import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Checkbox from 'expo-checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const LoginPage = ({navigation}) => {
  const [inputs, setInputs] = useState({
    Email: '',
    password: '',
  });

  const getData = async () => {
    const res = await AsyncStorage.getItem('user');
    const val = JSON.parse(res);
    console.log(res);
    console.log(inputs);
    if (val.Email === inputs.Email && val.Password === inputs.password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('inputs mismatch');
    }
  };

  return (
    <View>
      <Text style={styles2.ltxt1}>Logiin</Text>
      <Text style={styles2.ltxt2}>welcome to App</Text>
      <Image style={styles2.lhandpngs} source={require('../hand.png')} />
      <Text style={styles2.ltxt3}>
        create your account to make first business card
      </Text>
      <View style={styles2.lSignInpt2}>
        <Text style={styles2.linptTxt}>Email address</Text>
        <TextInput
          defaultValue={inputs.Email}
          onChangeText={val => setInputs({...inputs, Email: val})}
          style={styles2.linptTxt1}
          placeholder="Email address"
        />
      </View>
      <View style={styles2.lSignInpt3}>
        <Text style={styles2.linptTxt}>password</Text>
        <TextInput
          defaultValue={inputs.password}
          onChangeText={val => setInputs({...inputs, password: val})}
          style={styles2.linptTxt1}
          placeholder="password"
        />
        <FontAwesome5 style={styles2.lpicons} name="eye-slash" size={15} />
      </View>
      <Text style={styles2.LogFrgtpswd}>Forgot password?</Text>
      <View style={styles2.logline1} />
      <Text style={styles2.logline2}>or</Text>
      <View style={styles2.logline3} />
      <Text style={styles2.logmobTxt}>Login with Mobile no.</Text>
      <Text style={styles2.logbtnNtxt}>Already have an account?</Text>
      <Pressable
        style={styles2.signBtn}
        onPress={() => navigation.navigate('sign')}>
        <Text style={styles2.signTxt}>sign up</Text>
      </Pressable>
      <Pressable style={styles2.loginBtn} onPress={() => getData()}>
        <Text style={styles1.nxtBtnTxt}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles2 = StyleSheet.create({
  ltxt1: {
    fontSize: 14,
    color: '#2242D8',
    position: 'absolute',
    top: 5,
    left: 25,
  },
  ltxt2: {
    fontSize: 24,
    color: '#2242D8',
    position: 'absolute',
    top: 22,
    fontWeight: 'bold',
    left: 25,
  },
  lhandpngs: {
    position: 'absolute',
    top: 23,
    left: 205,
  },
  ltxt3: {
    fontSize: 12,
    color: '#8899EA',
    position: 'absolute',
    top: 58,
    left: 25,
  },
  lSignInpt2: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#939393',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 140,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
  linptTxt: {
    position: 'absolute',
    color: '#2242D8',
    fontWeight: 'bold',
    left: 24,
    top: 12,
  },
  linptTxt1: {
    position: 'absolute',
    left: 20,
    top: 22,
  },
  lpicons: {
    position: 'absolute',
    height: 20,
    width: 40,
    alignSelf: 'flex-end',
  },
  lSignInpt3: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#939393',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 220,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
  LogFrgtpswd: {
    position: 'absolute',
    top: 300,
    left: 50,
    fontWeight: 'bold',
    color: '#2242D8',
  },
  logline1: {
    width: 160,
    height: 1,
    backgroundColor: '#2242D840',
    position: 'absolute',
    top: 370,
  },
  logline2: {
    position: 'absolute',
    top: 360,
    // fontWeight: 'bold',
    left: 170,
    color: '#2242D850',
  },
  logline3: {
    width: 160,
    height: 1,
    backgroundColor: '#2242D840',
    position: 'absolute',
    top: 370,
    left: 190,
  },
  logmobTxt: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#2242D8',
    top: 440,
    left: 120,
  },
  logbtnNtxt: {
    position: 'absolute',
    top: 500,
    left: 80,
    fontSize: 14,
  },
  logbtnNtxt1: {
    position: 'absolute',
    top: 500,
    left: 240,
    color: '#2242D8',
    fontSize: 14,
  },
  signBtn: {
    height: 20,
    width: 80,
    position: 'absolute',
    top: 500,
    left: 240,
  },
  signTxt: {
    color: '#2242D8',
  },
  loginBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    backgroundColor: '#2242D8',
    top: 530,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
});

export const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setCnfrmPdwrd] = useState('');
  const users = {
    Name: name,
    Email: email,
    Password: password,
    confirmPassword: confirmpassword,
  };

  const datas = async () => {
    const token = await AsyncStorage.setItem('user', JSON.stringify(users));
    console.log(users);
  };

  const check = () => {
    const token = AsyncStorage.getItem('user');

    if (token) {
      console.log(token);
      navigation.navigate('login');
    } else {
      navigation.navigate('sign');
    }
  };

  useEffect(() => {
    check();
    // AsyncStorage.clear();
  }, []);

  return (
    <View>
      <Text style={styles1.txt1}>Sign up</Text>
      <Text style={styles1.txt2}>welcome to App</Text>
      <Image style={styles1.handpngs} source={require('../hand.png')} />
      <Text style={styles1.txt3}>
        create your account to make first business card
      </Text>
      <View style={styles1.SignInpt1}>
        <Text style={styles1.inptTxt}>Name</Text>
        <TextInput
          defaultValue={users.Name}
          onChangeText={val => setName(val)}
          style={styles1.inptTxt1}
          placeholder="Name"
        />
      </View>
      <View style={styles1.SignInpt2}>
        <Text style={styles1.inptTxt}>Email address</Text>
        <TextInput
          defaultValue={users.Email}
          onChangeText={val => setEmail(val)}
          style={styles1.inptTxt1}
          placeholder="Email address"
        />
      </View>
      <View style={styles1.SignInpt3}>
        <Text style={styles1.inptTxt}>password</Text>
        <TextInput
          defaultValue={users.Password}
          onChangeText={val => setPassword(val)}
          style={styles1.inptTxt1}
          placeholder="password"
        />
        <FontAwesome5 style={styles1.picons} name="eye-slash" size={15} />
      </View>
      <View style={styles1.SignInpt4}>
        <Text style={styles1.inptTxt}>confirm password</Text>
        <TextInput
          defaultValue={users.confirmPassword}
          onChangeText={val => setCnfrmPdwrd(val)}
          style={styles1.inptTxt1}
          placeholder="confirm password"
        />
        <FontAwesome5 style={styles1.picons} name="eye-slash" size={15} />
      </View>
      <Checkbox style={styles1.Scheckbox} />
      <Text style={styles1.ScheckboxTxt}>I accepts the terms & conditions</Text>
      <Text style={styles1.btnNtxt}>Already have an account?</Text>
      <Pressable
        style={styles1.logBtn}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles1.logTxt}>Login</Text>
      </Pressable>
      <Pressable style={styles1.nxtBtn} onPress={() => datas()}>
        <Text style={styles1.nxtBtnTxt}>Next</Text>
      </Pressable>
    </View>
  );
};

const styles1 = StyleSheet.create({
  txt1: {
    fontSize: 14,
    color: '#2242D8',
    position: 'absolute',
    top: 5,
    left: 25,
  },
  Scheckbox: {
    color: '#2242D8',
    position: 'absolute',
    top: 430,
    padding: 12,
    left: 55,
    backgroundColor: '#FFFFFF',
    borderColor: '#6C6C6C',
    borderRadius: 5,
  },
  ScheckboxTxt: {
    position: 'absolute',
    top: 433,
    left: 92,
    color: '#6C6C6C',
    fontWeight: '100',
  },
  btnNtxt: {
    position: 'absolute',
    top: 525,
    left: 80,
    fontSize: 14,
  },
  btnNtxt1: {
    position: 'absolute',
    top: 525,
    left: 240,
    color: '#2242D8',
    fontSize: 14,
  },
  logBtn: {
    height: 20,
    width: 80,
    position: 'absolute',
    top: 525,
    left: 240,
  },
  logTxt: {
    color: '#2242D8',
  },
  nxtBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    backgroundColor: '#2242D8',
    top: 553,
    left: 40,
    height: 55,
    borderRadius: 20,
  },
  nxtBtnTxt: {
    color: 'white',
    fontSize: 16,
  },
  txt2: {
    fontSize: 24,
    color: '#2242D8',
    position: 'absolute',
    top: 22,
    left: 25,
  },
  handpngs: {
    position: 'absolute',
    top: 23,
    left: 200,
  },
  txt3: {
    fontSize: 12,
    color: '#8899EA',
    position: 'absolute',
    top: 58,
    left: 25,
  },
  inptTxt: {
    position: 'absolute',
    color: '#2242D8',
    left: 22,
    top: 8,
  },
  inptTxt1: {
    position: 'absolute',
    left: 20,
    top: 22,
  },
  picons: {
    position: 'absolute',
    height: 20,
    width: 40,
    alignSelf: 'flex-end',
  },
  SignInpt1: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 90,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
  SignInpt2: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#939393',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 170,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
  SignInpt3: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#939393',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 250,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
  SignInpt4: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#939393',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 330,
    left: 35,
    height: 67,
    borderRadius: 20,
  },
});

export function Page({navigation}) {
  const check = () => {
    const token = AsyncStorage.getItem('user');

    if (token) {
      console.log(token);
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    check();
    // AsyncStorage.clear();
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#2242DA',
          height: '100%',
        }}>
        <Text style={styles.Txt}>
          Let’s make your first digital business card
        </Text>
        <Image style={styles.profile} source={require('../Ellipse1.png')} />
        <View style={styles.container1}>
          <View style={styles.chat1}>
            <Text style={styles.text1}>Ryon john</Text>
          </View>
          <View style={styles.chat2}>
            <Text style={styles.text2}>software engineer At google</Text>
          </View>
          <View style={styles.chat3}>
            <Text style={styles.txt3}>
              I’m ryan software engineer at Google and here is my digital
              business card with all my career and personal details with only
              the best app
            </Text>
          </View>
        </View>
        <View style={styles.slideContainer}>
          <Pressable
            style={styles.signupBtn}
            onPress={() => navigation.navigate('sign')}>
            <Text style={styles.Stxt}>Sign up</Text>
          </Pressable>
          <Pressable
            style={styles.loginBtn}
            onPress={() => navigation.navigate('login')}>
            <Text style={styles.Ltxt}>Login to App</Text>
          </Pressable>
          <View style={styles.line1} />
          <Text style={styles.line2}>or</Text>
          <View style={styles.line3} />
          <Pressable style={styles.GgleBtn}>
            <Image
              style={styles.btnIMages}
              source={require('../Group19.png')}
            />
            <Text style={styles.GgleBtnTxt}>Continue with Google</Text>
          </Pressable>
          <Pressable style={styles.FbBtn}>
            <Image style={styles.btnIMages} source={require('../g10.png')} />
            <Text style={styles.FbBtnTxt}>Continue with Facebook</Text>
          </Pressable>
          <Pressable style={styles.ApleBtn}>
            <Image style={styles.btnIMages} source={require('../apple.png')} />
            <Text style={styles.ApleBtnTxt}>Continue with Apple</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Txt: {
    color: 'white',
    position: 'absolute',
    width: 240,
    height: 50,
    textAlign: 'center',
    top: 15,
    left: 60,
    fontSize: 18,
  },
  container1: {
    height: 360,
    borderTopRightRadius: 84,
    backgroundColor: '#FFFFFF',
    width: 240,
    top: 65,
    left: 60,
    zIndex: -1,
  },
  slideContainer: {
    height: 380,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    width: 360,
    left: 1,
    position: 'absolute',
    top: 250,
    backgroundColor: 'white',
  },
  chat1: {
    position: 'absolute',
    left: 40,
    width: 90,
    height: 35,
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    backgroundColor: '#54A4EE',
  },
  profile: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  text1: {
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    color: '#54A4EE',
    textAlign: 'center',
    padding: 8,
  },
  chat2: {
    position: 'absolute',
    left: 65,
    width: 155,
    height: 50,
    borderRadius: 40,
    top: 45,
    backgroundColor: '#EAEDFB',
  },
  chat3: {
    position: 'absolute',
    left: 20,
    width: 240,
    height: 80,
    top: 100,
    borderRadius: 40,
    backgroundColor: '#2242DA17',
    padding: 15,
  },
  txt3: {
    width: 170,
  },
  signupBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    backgroundColor: '#2242D8',
    top: 30,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
  loginBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 280,
    top: 90,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
  Stxt: {
    color: 'white',
    fontSize: 12,
  },
  Ltxt: {
    fontSize: 12,
    color: '#000000',
  },
  line1: {
    width: 160,
    height: 1,
    backgroundColor: '#2248D840',
    position: 'absolute',
    top: 170,
  },
  line2: {
    position: 'absolute',
    top: 160,
    left: 170,
    color: '#2248D850',
  },
  line3: {
    width: 160,
    height: 1,
    backgroundColor: '#2248D850',
    position: 'absolute',
    top: 170,
    left: 190,
  },
  GgleBtnTxt: {
    paddingLeft: 40,
    color: '#2242D8',
    fontWeight: '800',
  },
  FbBtnTxt: {
    paddingLeft: 40,
    color: '#2242D8',
    fontWeight: '800',
  },
  ApleBtnTxt: {
    paddingLeft: 40,
    color: '#2242D8',
    fontWeight: '800',
  },

  GgleBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: 280,
    top: 190,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
  FbBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    top: 245,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
  ApleBtn: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: 280,
    top: 300,
    left: 40,
    height: 50,
    borderRadius: 20,
  },
  btnIMages: {
    marginLeft: 30,
  },
});
