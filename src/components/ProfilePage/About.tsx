import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const About = () => {
  return (
    <ScrollView>
      <Image
        source={{
          uri: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2022/164.png',
        }}
        style={{width: 355, height: 340, backgroundColor: '#D9D9D9'}}
      />
      <View
        style={{
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '900',
            color: 'black',
            paddingTop: 10,
          }}>
          Virat Kohli
        </Text>
        <View
          style={{
            height: 50,
            position: 'absolute',
            right: 0,
            width: 50,
            top: 5,
            borderRadius: 25,
            backgroundColor: '#EAEDFB',
          }}
        />
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 10,
            borderColor: 'blue',
          }}
        />
        <View style={{}}>
          <Text
            style={{
              fontSize: 20,
              marginVertical: 10,
              color: 'black',
            }}>
            About
          </Text>
        </View>
        <View style={{}}>
          <Text>
            Born and raised in New Delhi, Kohli trained at the West Delhi
            Cricket Academy and started his youth career with the Delhi Under-15
            team. He made his international debut in 2008 and quickly became a
            key player in the ODI team and later made his Test debut in 2011.
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 10,
            borderColor: 'blue',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            color: 'black',
          }}>
          Personal details
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Email address</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            Virat@gmail.com
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text>Mobile Number</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            +124537667545
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 10,
            borderColor: 'blue',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginVertical: 10,
            color: 'black',
          }}>
          Company details
        </Text>
        <Text
          style={{
            marginVertical: 10,
          }}>
          Company Name
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Designation</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Cricketer</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text>Department</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Batting</Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text>Mobile Number</Text>
          <Text style={{color: 'black', fontWeight: 'bold'}}>
            +124537667545
          </Text>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            marginVertical: 20,
            borderColor: 'blue',
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
          }}>
          Contact & social links
        </Text>
        <View
          style={{
            backgroundColor: '#F5F5F7',
            borderRadius: 5,
            marginVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <FontAwesome5
              style={{
                position: 'absolute',
                top: 25,
                left: 10,
                color: '#2242D8',
              }}
              name="phone-alt"
              size={25}
            />
            <Text style={{color: '#2242D8', position: 'absolute', left: 90}}>
              +124537667545
            </Text>
            <Text style={{color: '#2242D8', position: 'absolute', right: 0}}>
              (For work)
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#2242D8',
                position: 'absolute',
                bottom: 10,
                left: 90,
              }}>
              +124537667545
            </Text>
            <Text
              style={{
                color: '#2242D8',
                position: 'absolute',
                bottom: 10,
                right: 0,
              }}>
              (whatsApp only)
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F5F5F7',
            borderRadius: 5,
            marginVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              marginHorizontal: 9,
            }}>
            <FontAwesome5 name="link" color={'#2242D8'} size={25} />
            <Text style={{color: '#2242D8'}}>(product web)</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F5F5F7',
            borderRadius: 5,
            marginVertical: 10,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 10,
              marginHorizontal: 9,
            }}>
            <Image source={require('../linked.png')} />
            <Text style={{color: '#2242D8'}}>ryanjohn12</Text>
            <Text style={{color: '#2242D8'}}>(product page)</Text>
          </View>
        </View>
        <View style={{}}>
          <Pressable
            style={{
              backgroundColor: '#2242D8',
              height: 50,
              width: 240,
              justifyContent: 'center',
              marginVertical: 10,
              alignSelf: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
              }}>
              SHARE ME CONTACT
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
