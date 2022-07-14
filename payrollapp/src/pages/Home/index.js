/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../Login';
import Menu from '../Menu';
import FlexBox from '../FlexBox';
import Position from '..Position';
import SampleComponenet from '../SampleComponenet';
import Default from '../Default';
import CreateRecord from '..CreateRecord';
import DetailRecord from '../DetailRecord';
import PropsDinamis from '../PropsDinamis';
import StateDinamis from '../StateDimanis';
import Communication from '../Communication';
import BasicJavascript from '../BasicJavascript';
import ReactNativeSVG from '../ReactNativeSVG';
import CallAPIVanilla from '../CallAPIVanilla/indesx';
import CallAPIAxios from '../CallAPIAxios';

const HomeScreen = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 8000);
  // }, []);

  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Home Screen</Text>
    // </View>
    <View>
      <StatusBar barStyle={'light-content'} />
      <BasicJavascript />
      <ReactNativeSVG />
      <CallAPIVanilla />
      <CallAPIAxios />
      <Login />
      <Menu />
      <DetailRecord />
      {/* <ScrollView> */}
      <StateDinamis />
      <Communication />
      <PropsDinamis />
      <CreateRecord />
      {/* {isShow && <FlexBox />} */}
      <FlexBox />
      <Position />
      <SampleComponenet />
      <Default />
      {/* </ScrollView> */}
    </View>
  );
};

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default HomeScreen;
