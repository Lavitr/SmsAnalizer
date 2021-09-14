import React from 'react';
import {Pressable, Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {rowStyles} from '../constants';
import {convertValuesForDisplayAndSort} from '../utils';
import { onRemoveFromCategory } from '../actions';

let TableForCategory = ({values, onRemoveFromCategory, categoryName, removeCategoryName}) => {
  const valuesArray = Object.entries(values) || [];

  return valuesArray.length ? (
    <View >
      {convertValuesForDisplayAndSort(valuesArray).map((value, index) => (
        <Pressable
          key={index}
          style={rowStyles.rowStyle}
          onPress={() => {
            categoryName === removeCategoryName && onRemoveFromCategory(value, categoryName);
          }}>
          <Text style={rowStyles.textStyle}>{value[0]}</Text>
          <Text style={rowStyles.textMoney}>{value[1]}</Text>
        </Pressable>
      ))}
    </View>
  ) : // <Text>no items added</Text>
  null;
};

const mapStateToProps = state => ({
  removeCategoryName: state.removeFromCategory,
});

const mapDispatchToProps = {
  onRemoveFromCategory: onRemoveFromCategory,
};

TableForCategory = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableForCategory);

export default TableForCategory;
