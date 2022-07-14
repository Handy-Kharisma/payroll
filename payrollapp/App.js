/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import type {Node} from 'react';
import React, {Component, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingSVG from './src/assets/images/gaming.svg';

import Menu from './src/pages/Menu';
import Login from './src/pages/Login';
import DetailRecord from './src/pages/DetailRecord';

const Stack = createNativeStackNavigator();

// const App = () => {
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: 'Click to Connect Server',
    };
  }

  connect = async () => {
    const URL = 'http://192.168.8.21:5000/';
    try {
      const response = await fetch(URL);
      if (response.status !== 200) {
        throw new Error('Something is Wrong');
      }
      const responseText = await response.text();
      this.setState({response: responseText});
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  // connect = () => {
  //   const URL = 'http://192.168.8.21:5000/api/products';
  //   fetch(URL)
  //     .then(response => {
  //       if (response.status == 200) {
  //         return response.text();
  //       } else {
  //         throw new Error('Something is wrong');
  //       }
  //     })
  //     .then(responseText => {
  //       this.setState({response: responseText});
  //     })
  //     .catch(error => {
  //       console.error(error.message);
  //     });
  // };

  render() {
    return (
      // <View>
      //   {/* <Text style={styles.title}> {this.state.response} </Text> */}
      //   <Text style={styles.title}> {this.state.response} </Text>
      //   <Button title="connect" onPress={this.connect} />
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={Login}
            name="Login"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={Menu}
            name="Menu"
            options={{headerShown: false}}
          />
          <Stack.Screen
            component={DetailRecord}
            name="DetailRecord"
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// <Router>
//   <Switch>
//     <Route></Route>
//   </Switch>
// </Router>

// GAME ON TESTING
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           component={Main}
//           name="Main"
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           component={Home}
//           name="Home"
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const Main = ({navigation}) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.containerTitle}>
//         <Text style={styles.textTitle}>GAMEON</Text>
//       </View>
//       <View style={styles.containerSVG}>
//         <GamingSVG width={300} height={300} style={styles.imageSVG} />
//       </View>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.text}>Let's Begin</Text>
//         <MaterialIcons name="arrow-forward-ios" size={22} color="#ffffff" />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const Home = () => {
//   return (
//     <View style={styles.homeContainer}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   containerTitle: {
//     marginTop: 20,
//   },
//   textTitle: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: '#20315f',
//     fontFamily: 'Inter-Bold',
//   },
//   containerSVG: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageSVG: {
//     transform: [
//       {
//         rotate: '-15deg',
//       },
//     ],
//   },
//   button: {
//     backgroundColor: '#AD40AF',
//     padding: 20,
//     width: '90%',
//     borderRadius: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 50,
//   },
//   text: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     color: '#ffffff',
//     fontFamily: 'Roboto-MediumItalic',
//   },
//   homeContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default App;
