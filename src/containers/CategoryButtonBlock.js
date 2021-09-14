import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {
  addItemsMode,
  stopAdding,
  removeItemsMode,
  stopRemoving,
} from '../actions';

let CategoryButtonBlock = ({
  onAdd,
  onRemove,
  name,
  categoryName,
  removeFromCategory,
  onStopAdding,
  categorySum,
  onStopRemoving,
}) => {
  const isAddingToCategory = categoryName === name;
  const isCategoryRemoveFrom = removeFromCategory === name;
  return (
    <>
      <Text>
        {name} - {categorySum || 0}
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => (isAddingToCategory ? onStopAdding() : onAdd(name))}>
          <Text style={styles.text}>
            {isAddingToCategory ? 'press to finish' : 'add items'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() =>
            isCategoryRemoveFrom ? onStopRemoving() : onRemove(name)
          }>
          <Text style={styles.text}>
            {isCategoryRemoveFrom ? 'finish removing' : 'remove items'}
          </Text>
        </Pressable>
      </View>
    </>
  );
};

const mapStateToProps = state => ({
  categoryName: state.addToCategory,
  removeFromCategory: state.removeFromCategory,
});

const mapDispatchToProps = {
  onAdd: addItemsMode,
  onStopAdding: stopAdding,
  onRemove: removeItemsMode,
  onStopRemoving: stopRemoving,
};

CategoryButtonBlock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryButtonBlock);

export default CategoryButtonBlock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    elevation: 10,
    backgroundColor: '#1196b8',
  },
  text: {
    fontSize: 14,
    color: 'white',
  },
});
