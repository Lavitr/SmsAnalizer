import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {rowStyles} from '../constants';
import {convertValuesForDisplayAndSort} from '../utils';
import {onAddToCategory} from '../actions';

let Table = ({values, onAddToCategory, isEdit}) => {
  const valuesArray = Object.entries(values) || [];

  return valuesArray.length ? (
    <>
      {convertValuesForDisplayAndSort(valuesArray).map((value, index) => (
        <Pressable
          key={index}
          style={rowStyles.rowStyle}
          onPress={() => {
            isEdit && onAddToCategory(value);
          }}>
          <Text style={rowStyles.textStyle}>{value[0]}</Text>
          <Text style={rowStyles.textMoney}>{value[1]}</Text>
        </Pressable>
      ))}
    </>
  ) : (
      <View style={[rowStyles.rowStyle, rowStyles.emptyData]}>
        <Text>no messages to display</Text>
      </View>
  );
};

const mapStateToProps = state => ({
  isEdit: state.addToCategory,
});

const mapDispatchToProps = {
  onAddToCategory: onAddToCategory,
};

Table = connect(mapStateToProps, mapDispatchToProps)(Table);

export default Table;
