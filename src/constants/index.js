import {StyleSheet} from 'react-native';

export const ADD_ITEMS_MODE = 'ADD_ITEMS_MODE';
export const MOVE_TO_CATEGORY = 'MOVE_TO_CATEGORY';
export const REMOVE_ITEMS = 'REMOVE_ITEMS';
export const REQUEST_MESSAGE = 'REQUEST_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const SET_MIN_DATE = 'SET_MIN_DATE';
export const SET_MAX_DATE = 'SET_MAX_DATE';
export const STOP_ADDING = 'STOP_ADDING';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEMS_MODE = 'REMOVE_ITEMS_MODE';
export const REMOVE_FROM_CATEGORY = 'REMOVE_FROM_CATEGORY';
export const STOP_REMOVING = 'STOP_REMOVING';
export const CLEAR_DATES = 'CLEAR_DATES';
export const SET_STORED_DATA = 'SET_STORED_DATA';

export const CATEGORIES = ['Food', 'Online shops', 'Clothes', 'For Home'];

export const styles = StyleSheet.create({
  mainButtonContainer: {
    marginVertical: 25,
    marginHorizontal: 16,
  },
  container: {
    flex: 1,
  },
  scrollViewStyle: {
    backgroundColor: '#e3e3de',
  },
  btnNormal: {
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: 'blue',
    borderWidth: 2,
    height: 50,
    backgroundColor: '#d5f7ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPress: {
    marginHorizontal: 20,
    marginTop: 20,
    borderColor: 'red',
    backgroundColor: 'yellow',
    borderWidth: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    marginTop: 16,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textHighlighted: {
    marginRight: 16,
    color: '#60615f',
    backgroundColor: '#eaede6',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  viewButton: {
    marginTop: 16,
    marginHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textPadding: {
    paddingVertical: 5,
  },
});

export const rowStyles = StyleSheet.create({
  viewRow: {
    marginVertical: 4,
    marginHorizontal: 6,
    padding: 6,
  },
  editText: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  edit: {
    backgroundColor: '#f59ab2',
  },
  regular: {
    backgroundColor: '#d5f7ef',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#878a89',
    backgroundColor: '#e2e3cc',
    borderWidth: 1,
  },
  textStyle: {
    marginVertical: 3,
  },
  textMoney: {
    width: '20%',
    backgroundColor: '#c6c7ab',
    alignItems: 'center',
  },
  emptyData: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 3,
    paddingVertical: 3
  }
});
