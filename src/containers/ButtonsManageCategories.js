import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Pressable, Button} from 'react-native';
import {
    onClearCategories
} from '../actions';

let ButtonsManageCategories = ({onClearCategories}) => {
  return (
    <View style={styles.buttonsContainer}>
      {/* <Button  color="#1196b8" title="Clear saved categories" /> */}
      <Pressable style={[styles.button, styles.buttonClear]} onPress={() => {onClearCategories()}}>
        <Text style={styles.text}>Clear saved categories</Text>
      </Pressable>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Add</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.text}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  categoryName: state.addToCategory,
  removeFromCategory: state.removeFromCategory,
});

const mapDispatchToProps = {
  onClearCategories
};

ButtonsManageCategories = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ButtonsManageCategories);

export default ButtonsManageCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    elevation: 10,
    backgroundColor: '#1196b8',
  },
  buttonClear: {
    backgroundColor: '#911a3a',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});
