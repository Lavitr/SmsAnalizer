import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {styles} from '../../src/constants';
import {fetchMessages} from '../actions';

let ButtonMain = ({getMessages, dates, address}) => (
  <View style={styles.mainButtonContainer}>
    <Button
      color="#1196b8"
      title={'Load Mesages'}
      onPress={() => {
        getMessages(address, dates);
      }}
    />
  </View>
);

const mapStateToProps = state => ({
  dates: state.dates,
  address: state.address
});

const mapDispatchToProps = {
  getMessages: fetchMessages,
};

ButtonMain = connect(mapStateToProps, mapDispatchToProps)(ButtonMain);

export default ButtonMain;
