/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  ViewComponent,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Menu = ({navigation}) => {
  return (
    <View>
      <View style={styles.TopBar}>
        <View style={styles.KiriMenu} />
        <Image
          source={require('../../assets/images/Logo.png')}
          style={styles.Logo}
        />
        <Image
          source={require('../../assets/icons/Menu.png')}
          style={styles.Menu}
        />
        {/* <Text>Menu</Text> */}
      </View>
      <View style={styles.menuIcon}>
        {/* Create Record */}
        <View style={styles.borderIcon}>
          <Image
            source={require('../../assets/icons/CreateRecord.png')}
            style={styles.icon}
          />
          <Text style={styles.menuTitle}>Create Record</Text>
        </View>
        {/* Detail Record */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DetailRecord')}>
          <View style={styles.borderIcon}>
            <Image
              source={require('../../assets/icons/DetailRecord.png')}
              style={styles.icon}
            />
            <Text style={styles.menuTitle}>Detail Record</Text>
          </View>
        </TouchableOpacity>
        {/* Report */}
        <View style={styles.borderIcon}>
          <Image
            source={require('../../assets/icons/Report.png')}
            style={styles.icon}
          />
          <Text style={styles.menuTitle}>Report</Text>
        </View>
      </View>

      <View style={styles.menuIcon}>
        {/* Personal Record */}
        <View style={styles.borderIcon}>
          <Image
            source={require('../../assets/icons/PersonalRecord.png')}
            style={styles.icon}
          />
          <Text style={styles.menuTitle}>Personal Record</Text>
        </View>
        {/* Personal Record */}
        <View style={styles.borderIcon}>
          <Image
            source={require('../../assets/icons/SOP.png')}
            style={styles.icon}
          />
          <Text style={styles.menuTitle}>SOP</Text>
        </View>
        {/* Peraturan */}
        <View style={styles.borderIcon}>
          <Image
            source={require('../../assets/icons/Peraturan.png')}
            style={styles.icon}
          />
          <Text style={styles.menuTitle}>Peraturan</Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  TopBar: {
    backgroundColor: '#ffffff',
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
    // position: 'absolute',
    // zIndex: 9999,
  },

  menuIcon: {
    // backgroundColor: '#ffffff',
    //   height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    marginBottom: 30,
  },

  borderIcon: {
    backgroundColor: '#ffffff',
    width: 115,
    height: 140,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 90,
    height: 90,
  },
  menuTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  Logo: {
    width: 100,
    height: 30,
    marginVertical: 10,
    marginHorizontal: 40,
    // alignSelf: 'center',
    // marginBottom: 50,
  },
  KiriMenu: {
    width: 30,
    height: 30,
  },
  Menu: {
    width: 30,
    height: 30,
    // alignSelf: 'center',
    // marginBottom: 50,
  },
});
