import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Text, DatePickerAndroid, View, Button} from 'react-native';
import {styles} from '../../src/constants';
import {
  setMinDate,
  setMaxDate,
  clearDates,
  setStoredCategories,
} from '../actions';
import {AsyncStorage} from 'react-native';

let MinMaxDateComponent = ({
  setMaxDate,
  setMinDate,
  minDate,
  maxDate,
  clearDates,
  setStoredCategories,
}) => {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);
        setStoredCategories(value);
      }
      // await AsyncStorage.clear()
    } catch (e) {
      // error reading value
    }
  };

  useEffect(async () => {
    getData();
  }, []);

  const openDatePickerMinDate = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        maxDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        setMinDate(new Date(year, month, day));
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  const openDatePickerMaxDate = async () => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        date: new Date(),
        maxDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        setMaxDate(new Date(year, month, day));
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.textPadding}>FROM:</Text>
        {minDate ? (
          <Text style={styles.textHighlighted}>
            {`${minDate.toDateString().split(' ').slice(1).join(' ')}`}
          </Text>
        ) : (
          <Text style={styles.textHighlighted}>Not selected</Text>
        )}
        <Text style={styles.textPadding}>TO:</Text>
        {maxDate ? (
          <Text style={styles.textHighlighted}>
            {`${maxDate.toDateString().split(' ').slice(1).join(' ')}`}
          </Text>
        ) : (
          <Text style={styles.textHighlighted}>Not selected</Text>
        )}
      </View>
      <View style={styles.viewButton}>
        <Button
          color="#1196b8"
          onPress={openDatePickerMinDate}
          title="Select FROM date"
        />
        <Button
          color="#1196b8"
          onPress={openDatePickerMaxDate}
          title="Select TO date"
        />
        <Button color="#911a3a" onPress={clearDates} title="Clear" />
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  minDate: state.dates.minDate,
  maxDate: state.dates.maxDate,
});

const mapDispatchToProps = {
  setMaxDate,
  setMinDate,
  clearDates,
  setStoredCategories,
};

MinMaxDateComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MinMaxDateComponent);

export default MinMaxDateComponent;
