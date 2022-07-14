/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground />
      <View style={styles.borderLogin}>
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.logo}
        />

        <Text style={styles.formTitle}>Username</Text>
        <TextInput style={styles.formField} />

        <Text style={styles.formTitle}>Password</Text>
        <TextInput style={styles.formField} />

        <Text style={styles.formTitle}>Company</Text>
        <TextInput style={styles.formField} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Menu')}>
          <View style={styles.buttonBorder}>
            <Text style={styles.buttonTitle}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

class ImageBackground extends Component {
  render() {
    return (
      <Image
        source={require('../../assets/images/Backgroud.png')}
        style={styles.backgroundLogin}
      />
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    width: windowWidth,
    height: windowHeight,
  },

  borderLogin: {
    backgroundColor: '#ffffff',
    width: 300,
    height: 500,
    position: 'absolute',
    marginLeft: windowWidth / 2 - 150,
    marginTop: windowHeight / 2 - 250,
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  logo: {
    width: 172,
    height: 51,
    alignSelf: 'center',
    marginBottom: 50,
  },

  formTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  formField: {
    width: 240,
    height: 30,
    alignSelf: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderRadius: 5,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },

  buttonBorder: {
    backgroundColor: '#0277ED',
    marginTop: 25,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Login;
