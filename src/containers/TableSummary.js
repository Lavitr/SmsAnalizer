import React, {useMemo} from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {CategoryTable} from './CategoryTable';
import RowFirstSmsDate from './RowFirstSmsDate';
import Table from './Table';
import {rowStyles} from '../constants';

const vallueArr = [
  [' BLR SHOP N 18.', 6.47],
  [' BLR CHTUP OSETRINKAPLYUS.', 2.08],
  [' BLR SHOP EVROOPT.', 621.36],
  [' BLR SHOP MATERIK.', 182.26],
  [' BLR MOBILE BANK.', 237],
  [' BLR PT SHOP 145 OAO VESTA.', 25.7],
  [' BLR TC KORONA.', 204.94],
  [' BLR SHOP MYASNAYA LAVKA BAP.', 34.59],
  [' BLR SUPERMARKET VITALUR.', 239.98],
  [' BLR APTEKA N 1 BPSB.', 47.5],
  [' BLR SHOP OCHAG BAPB.', 40],
  [' BLR MED.TSENTR.', 336.99],
  [' BLR AZS N 9.', 125],
  [' BLR PT MAGAZIN N154 OAO VESTA.', 21.24],
  [' BLR METALLOBAZA TERESHK.', 23.49],
  [' BLR SHOP N 35.', 10.87],
  [' BLR STOLOVAYA PTITSEFABRIKA.', 10.41],
  [' BLR SHOP MYASKOVIT N 1 BAPB.', 10.42],
  [' BLR Gipermarket Gippo.', 369.41],
  [' BLR AZS N 1 BLOK.', 40],
  [' BLR PT ONLAJN-GIPERMARKET 21.', 66.49],
  [' BLR AZS N 38.', 150.01999999999998],
  [' BLR PT SHOP N146 OAO VESTA 70.', 21.93],
  [' BLR Meditsinskiy ofis IOOO.', 137.13],
  [' BLR SUPERMARKET GREEN BAPB.', 53.91],
  [' BLR OOO Megakhend.', 57],
  [' BLR SUPERASUP.', 13.07],
  [' BLR AGZS N3.', 5.04],
  [' BLR VITEB.PR-VO BELGOSSTRAH.', 76.83],
  [' BLR Megahend.', 123],
  [' BLR VETAPTEKA N50.', 24.259999999999998],
  [' BLR AZS N 11.', 70],
  [' BLR ZOOSHOP ZOOBAZAR.', 5.59],
  [' BLR SHOP MYSPORT BAPB.', 216],
  [' BLR PT SHOP 87 OAO VESTA.', 5.04],
  [' BLR PAVILYON.', 10.23],
  [' BLR RBO BURGER KING.', 13.8],
  [' BLR SHOP N5 ZOO LAVKA.', 6.1],
  [' BLR Magazin AMI.', 70],
  [' BLR PT GUZ VITEB.GOROD.TSENTR.', 69.04],
  [' BLR MAZS N 7 BAPB.', 50],
  [' BLR PT PR-VO BGS PO G.VITEBSK.', 28.54],
  [' BLR PT SHOP N144 OAO VESTA.', 3.45],
  [' BLR SOU INTERNETBANK.', 30.5],
];

let TableSummary = ({
  values,
  count,
  loading,
  editing,
  categoryValues,
  removingName,
}) => {
  const sum = useMemo(
    () =>
      Object.values(values || {}).reduce(
        (sum, item) => sum + Math.round(item),
        0,
      ),
    [values, values.lenght],
  );

  return loading ? (
    <ActivityIndicator size="large" color="#00ff00" />
  ) : (
    <>
      <CategoryTable values={categoryValues} removingName={removingName} />
      <RowFirstSmsDate />
      <ScrollView>
        <View
          style={[
            rowStyles.viewRow,
            editing ? rowStyles.edit : rowStyles.regular,
          ]}>
          <View style={rowStyles.header}>
            <Text>Total sms number: {count}</Text>
            <Text>Total sum: {sum}</Text>
          </View>
          {editing ? (
            <View style={rowStyles.editText}>
              <Text>Click item to add to category</Text>
            </View>
          ) : null}
          <Table values={values} />
        </View>
      </ScrollView>
    </>
  );
};

const mapStateToProps = state => ({
  values: state.messages,
  categoryValues: state.categories,
  count: state.count,
  loading: state.loading,
  editing: !!state.addToCategory,
  removingName: state.removeFromCategory,
});

TableSummary = connect(mapStateToProps, null)(TableSummary);

export default TableSummary;
