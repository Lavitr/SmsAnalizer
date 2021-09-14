import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {styles} from '../../src/constants';
import {fetchMessages} from '../actions';

let ButtonMain = ({getMessages, dates}) => (
  <View style={styles.mainButtonContainer}>
    <Button
      color="#1196b8"
      title={'Load Mesages'}
      onPress={() => {
        getMessages(dates);
      }}
    />
  </View>
);

const mapStateToProps = state => ({
  dates: state.dates,
});

const mapDispatchToProps = {
  getMessages: fetchMessages,
};

ButtonMain = connect(mapStateToProps, mapDispatchToProps)(ButtonMain);

export default ButtonMain;
