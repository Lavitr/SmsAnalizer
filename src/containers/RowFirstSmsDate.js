import React from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 3,
  },
});

let RowFirstSmsDate = ({firstSmsDate}) => (
  <View style={styles.container}>
    <Text>
      First sms date:
      {new Date(firstSmsDate).toDateString().split(' ').slice(1).join(' ')}
    </Text>
  </View>
);

const mapStateToProps = state => ({
  firstSmsDate: state.dates.firstSmsDate,
});

RowFirstSmsDate = connect(mapStateToProps, null)(RowFirstSmsDate);

export default RowFirstSmsDate;
