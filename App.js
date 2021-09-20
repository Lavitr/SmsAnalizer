import React, {useState} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import {styles} from './src/constants';
import TableSummary from './src/containers/TableSummary';
import ButtonMain from './src/containers/ButtonMain';
import SwitchBanks from './src/containers/SwitchBanks';
import MinMaxDateComponent from './src/containers/MinMaxDateComponent';

export const App = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollViewStyle}>
      <SwitchBanks />
      <MinMaxDateComponent />
      <ButtonMain />
      <TableSummary />
    </ScrollView>
  </SafeAreaView>
);
