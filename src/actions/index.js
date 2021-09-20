import SmsAndroid from 'react-native-get-sms-android';
import {
  ADD_ITEMS_MODE,
  REQUEST_MESSAGE,
  RECEIVE_MESSAGES,
  SET_MIN_DATE,
  SET_MAX_DATE,
  MOVE_TO_CATEGORY,
  STOP_ADDING,
  ADD_ITEM,
  REMOVE_ITEMS_MODE,
  REMOVE_FROM_CATEGORY,
  STOP_REMOVING,
  CLEAR_DATES,
  SET_STORED_DATA,
  CLEAR_SAVED_CATEGORIES,
  CHANGE_BANK,
  TECHNO_BANK,
} from '../constants';
import {filter, convertLocationNames} from '../../src/utils';

export const addItemsMode = name => ({
  type: ADD_ITEMS_MODE,
  name,
});

export const removeItemsMode = name => ({
  type: REMOVE_ITEMS_MODE,
  name,
});

export const onAddToCategory = item => ({
  type: ADD_ITEM,
  item,
});

export const stopAdding = () => ({
  type: STOP_ADDING,
});

export const onChangeBank = () => ({
  type: CHANGE_BANK,
});

export const stopRemoving = () => ({
  type: STOP_REMOVING,
});

export const moveToCategory = item => ({
  type: MOVE_TO_CATEGORY,
  item,
});

export const onClearCategories = () => ({
  type: CLEAR_SAVED_CATEGORIES,
});

export const onRemoveFromCategory = (item, name) => ({
  type: REMOVE_FROM_CATEGORY,
  item,
  name,
});

export const setMinDate = minDate => ({
  type: SET_MIN_DATE,
  minDate,
});

export const setMaxDate = maxDate => ({
  type: SET_MAX_DATE,
  maxDate,
});

export const setStoredCategories = data => ({
  type: SET_STORED_DATA,
  data,
});

export const clearDates = () => ({
  type: CLEAR_DATES,
});

export const requestMessages = () => ({
  type: REQUEST_MESSAGE,
});

export const receivedMessages = (messages, count, newFirstSmsDate) => ({
  type: RECEIVE_MESSAGES,
  messages,
  count,
  newFirstSmsDate,
});

const getMessages = (dispatch, address, dates) => {
  const paymentObj = {};
  SmsAndroid.list(
    JSON.stringify(
      filter(
        address,
        dates.minDate ? dates.minDate.getTime() : undefined,
        dates.maxDate ? dates.maxDate.getTime() : undefined,
      ),
    ),
    fail => {
      console.log('Failed with this error: ' + fail);
    },
    (count, smsList) => {
      var arr = JSON.parse(smsList);
      let newFirstSmsDate = dates.firstSmsDate;
      arr.forEach(message => {
        if (newFirstSmsDate > message.date) {
          newFirstSmsDate = message.date;
        }
        if (address === TECHNO_BANK) {
          console.log('mess', message);
          const paymentSmsBody = message.body.match(
            /Retail(.*)BLR OK. Dostupno/,
          );
          console.log('paymentSmsBody', paymentSmsBody);
          if (paymentSmsBody) {
            const infoArray = paymentSmsBody[1].trim().split(' BYN ');
            const sum = Number(parseFloat(infoArray[0].replace('-','')).toFixed(2));
            let location = convertLocationNames(infoArray[1]);
            //when payment was done not in BLR
            if (!location) {
              location =
                paymentSmsBody[1].split(' ').splice(-3).join(' ') +
                '----not in BLR';
            }
            location = location.trim().replace(/[.]$/, '');
            paymentObj[location] = paymentObj[location]
              ? paymentObj[location] + sum
              : sum;
          }
        } else {
          // arr.slice(0, 20).forEach(message => {
          const paymentSmsBody = message.body.match(/Oplata(.*)Dostupno/);
          // console.log('paymentSmsBody', paymentSmsBody);
          if (paymentSmsBody) {
            const infoArray = paymentSmsBody[1].trim()?.split('BYN. BLR');
            const sum = Number(parseFloat(infoArray[0]).toFixed(2));
            let location = convertLocationNames(infoArray[1]);
            //when payment was done not in BLR
            if (!location) {
              location =
                paymentSmsBody[1].split(' ').splice(-3).join(' ') +
                '----not in BLR';
            }
            location = location.trim().replace(/[.]$/, '');
            paymentObj[location] = paymentObj[location]
              ? paymentObj[location] + sum
              : sum;
          }
        }
      });
      const mockObject = {
        ' BLR APTEKA N 1 BPSB.': 47.5,
        ' BLR AZS N 9.': 125,
        ' BLR CHTUP OSETRINKAPLYUS.': 2.08,
        ' BLR MED.TSENTR.': 336.99,
        ' BLR METALLOBAZA TERESHK.': 23.49,
        ' BLR MOBILE BANK.': 237,
        ' BLR PT MAGAZIN N154 OAO VESTA.': 21.24,
        ' BLR PT SHOP 145 OAO VESTA.': 25.7,
        ' BLR SHOP EVROOPT.': 621.36,
        ' BLR SHOP MATERIK.': 182.26,
        ' BLR SHOP MYASNAYA LAVKA BAP.': 34.59,
        ' BLR SHOP N 18.': 6.47,
        ' BLR SHOP OCHAG BAPB.': 40,
        ' BLR SUPERMARKET VITALUR.': 239.98,
      };
      // dispatch(receivedMessages(mockObject, count, newFirstSmsDate));
      dispatch(receivedMessages(paymentObj, count, newFirstSmsDate));
    },
  );
};

export function fetchMessages(address, dates) {
  return function (dispatch) {
    dispatch(requestMessages());
    return getMessages(dispatch, address, dates);
  };
}
