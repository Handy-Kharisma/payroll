/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image, Dimensions} from 'react-native';
import {Table, TableWrapper, Row} from 'react-native-table-component';

import {LogBox} from 'react-native';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const windowWidth = Dimensions.get('window').width;

class DetailRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        'Date',
        'Start Time',
        'Finish Time',
        'Outside',
        'Client',
        'Job Code',
        'Program',
        'Description',
      ],
      widthArr: [120, 100, 100, 80, 100, 100, 100, 200],
    };
  }

  render() {
    const state = this.state;
    const tableData = [
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
      ['06/06/22', '08.00', '12.00', '0', '', '213', '', 'Design Mockup'],
    ];
    // for (let i = 0; i < 30; i += 1) {
    //   const rowData = [];
    //   for (let j = 0; j < 9; j += 1) {
    //     rowData.push(`${i}${j}`);
    //   }
    //   tableData.push(rowData);
    // }

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
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#757575'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#757575'}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#ffffff'},
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
  },
  Logo: {
    width: 100,
    height: 30,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  KiriMenu: {
    width: 30,
    height: 30,
  },
  Menu: {
    width: 30,
    height: 30,
  },
  header: {
    height: 50,
    backgroundColor: '#c8d6e5',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#ffffff',
  },
});

export default DetailRecord;
