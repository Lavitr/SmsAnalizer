import React, {useState} from 'react';
import {Text, View, Pressable, ScrollView, StyleSheet} from 'react-native';
import CategoryButtonBlock from './CategoryButtonBlock';
import TableForCategory from './TableForCategory';
import {CATEGORIES} from '../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    backgroundColor: '#bcf5e8',
    marginHorizontal: 6,
  },
  viewCategory: {
    flexDirection: 'column',
    padding: 4,
  },
  edit: {
    backgroundColor: '#f59ab2',
  },
  regular: {
    backgroundColor: '#d5f7ef',
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderColor: '#878a89',
    backgroundColor: '#a6cfa5',
    // borderWidth: 1,
    paddingHorizontal:4
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
    elevation: 10,
    backgroundColor: '#b3c9f2',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});

export const CategoryTable = ({values, removingName}) => {
  const categorySum = values =>
    Object.values(values || {}).reduce(
      (sum, item) => sum + Math.round(item),
      0,
    );
  return (
    <>
      <ScrollView style={styles.container}>
        {CATEGORIES.map((categoryName, ind) => (
          <View
            key={ind}
            style={[
              styles.viewCategory,
              removingName === categoryName ? styles.edit : styles.regular,
            ]}>
            <View style={styles.viewRow}>
              <CategoryButtonBlock
                name={categoryName}
                categorySum={categorySum(values[categoryName])}
              />
            </View>
            <TableForCategory
              values={values[categoryName] || {}}
              categoryName={ categoryName}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
};
