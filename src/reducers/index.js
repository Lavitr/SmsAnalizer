import {
  ADD_ITEMS,
  REQUEST_MESSAGE,
  RECEIVE_MESSAGES,
  SET_MIN_DATE,
  SET_MAX_DATE,
  ADD_ITEMS_MODE,
  STOP_ADDING,
  ADD_ITEM,
  REMOVE_ITEMS_MODE,
  REMOVE_FROM_CATEGORY,
  STOP_REMOVING,
  CLEAR_DATES,
  SET_STORED_DATA,
  CLEAR_SAVED_CATEGORIES,
} from '../constants';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {AsyncStorage} from 'react-native';
import {mapCategoriesAndMessages, flatenCategorieEntry} from '../utils';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
};

const removeValue = async () => {
  try {
    await AsyncStorage.removeItem('@storage_Key');
  } catch (e) {
    // remove error
  }

  console.log('Done.');
};

const initialState = {
  messages: [],
  count: 0,
  loading: false,
  dates: {firstSmsDate: new Date().getTime()},
  addToCategory: '',
  categories: {},
  storeData: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MESSAGE:
      return {...state, loading: true};
    case ADD_ITEM:
      const edingItems = action.item;
      const newMessages = {...state.messages};
      delete newMessages[edingItems[0]];
      const categoriesAfterAdd = {
        ...state.categories,
        [state.addToCategory]: {
          ...state.categories[state.addToCategory],
          [edingItems[0]]: edingItems[1],
        },
      };
      storeData(categoriesAfterAdd);
      return {
        ...state,
        messages: newMessages,
        categories: categoriesAfterAdd,
        storeData: categoriesAfterAdd,
      };
    case REMOVE_FROM_CATEGORY:
      const removeItems = action.item;
      const categoryItems = {...state.categories[action.name]};
      delete categoryItems[removeItems[0]];
      const categoriesAfterRemoval = {
        ...state.categories,
        [action.name]: categoryItems,
      };
      storeData(categoriesAfterRemoval);
      return {
        ...state,
        messages: {...state.messages, [removeItems[0]]: removeItems[1]},
        categories: categoriesAfterRemoval,
        storeData: categoriesAfterRemoval,
      };
    case ADD_ITEMS_MODE:
      return {...state, addToCategory: action.name, removeFromCategory: ''};
    case CLEAR_SAVED_CATEGORIES:
      removeValue();
      return {
        ...state,
        storeData: {},
        categories: {},
        messages: {
          ...state.messages,
          ...flatenCategorieEntry(state.categories),
        },
      };
    case REMOVE_ITEMS_MODE:
      return {...state, removeFromCategory: action.name, addToCategory: ''};
    case STOP_ADDING:
      return {...state, addToCategory: ''};
    case STOP_REMOVING:
      return {...state, removeFromCategory: ''};
    case SET_MIN_DATE:
      return {
        ...state,
        dates: {
          ...state.dates,
          minDate: action.minDate,
        },
      };
    case SET_MAX_DATE:
      return {
        ...state,
        dates: {
          ...state.dates,
          maxDate: action.maxDate,
        },
      };
    case CLEAR_DATES:
      return {
        ...state,
        dates: {
          ...state.dates,
          maxDate: undefined,
          minDate: undefined,
        },
      };
    case SET_STORED_DATA:
      return {
        ...state,
        storeData: action.data,
      };
    case RECEIVE_MESSAGES:
      const {categories, messages} = mapCategoriesAndMessages(
        state.storeData,
        action.messages,
      );
      return {
        ...state,
        messages,
        count: action.count,
        loading: false,
        categories,
        dates: {
          ...state.dates,
          firstSmsDate: action.newFirstSmsDate,
        },
      };
    case ADD_ITEMS:
      return {...state, news: action.json[0], loading: false};
    default:
      return state;
  }
};

export default reducer;
