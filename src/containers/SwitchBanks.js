import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {onChangeBank} from '../actions';
import {TECHNO_BANK} from '../constants';

let SwitchBanks = ({onChangeBank, bank}) => {
  const isTechnoBank = bank === TECHNO_BANK;

  return (
    <View style={styles.container}>
      <Text style={styles.prior}>Prior Bank</Text>
      <Switch
        thumbColor={isTechnoBank ? '#61b3f2' : '#f6f79e'}
        onValueChange={() => {
          onChangeBank();
        }}
        value={isTechnoBank}
      />
      <Text style={styles.techno}>TechnoBank</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  bank: state.address,
});

const mapDispatchToProps = {
  onChangeBank,
};

SwitchBanks = connect(mapStateToProps, mapDispatchToProps)(SwitchBanks);

export default SwitchBanks;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  prior: {
    backgroundColor: '#f6f79e',
  },
  techno: {
    backgroundColor: '#61b3f2',
  },
});
