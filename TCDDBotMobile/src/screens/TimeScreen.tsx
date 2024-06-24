import {Text} from '@rneui/base';
import React, {FC, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import NextPageButton from '../components/buttons/next-page-button';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  TimeScreen: {
    fromCity: string;
    toCity: string;
    selectedDate: string;
  };
};
interface TimeScreenProps {
  navigation: {
    navigate: (screen: string, props: object) => void;
  };
  route: RouteProp<RootStackParamList, 'TimeScreen'>;
}
const TimeScreen: FC<TimeScreenProps> = ({navigation, route}) => {
  const {fromCity, toCity, selectedDate} = route.params;

  const handleButtonPress = (screen: string) => {
    navigation.navigate(screen, {
      fromCity,
      toCity,
      selectedDate,
      fromTime,
      toTime,
    });
  };
  const [fromTime, setFromTime] = useState<string | null>(null);
  const [toTime, setToTime] = useState<string | null>(null);
  const [filteredTimes, setFilteredTimes] = useState<string[] | null>(null);

  const handleFromTimeChange = (value: any) => {
    setFromTime(value);
    const filteredTimes = times.filter(time => time > value);
    setFilteredTimes(filteredTimes);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Start to Search</Text>
      <RNPickerSelect
        placeholder={{label: 'Select a time', value: null}}
        items={times.map(time => ({label: time, value: time}))}
        onValueChange={handleFromTimeChange}
        value={fromTime}
        style={pickerSelectStyles}
      />
      <Text style={styles.headerText}>End to Search</Text>
      <RNPickerSelect
        placeholder={{label: 'Select a time', value: null}}
        items={
          filteredTimes
            ? filteredTimes.map(time => ({label: time, value: time}))
            : times.map(time => ({label: time, value: time}))
        }
        onValueChange={value => setToTime(value)}
        value={toTime}
        style={pickerSelectStyles}
      />
      <Text style={{textAlign: 'center', padding: 50}}>
        In this fields, specify the time interval you will search for.
      </Text>
      <NextPageButton
        disabled={fromTime === null || toTime === null}
        onPress={() => {
          handleButtonPress('RunnerScreen');
        }}
      />
    </View>
  );
};

export default TimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  calendar: {
    marginBottom: 30,
    width: 320,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginBottom: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

const times = [
  '05:59',
  '06:59',
  '07:59',
  '08:59',
  '09:59',
  '10:59',
  '11:59',
  '12:59',
  '13:59',
  '14:59',
  '15:59',
  '16:59',
  '17:59',
  '18:59',
  '19:59',
  '20:59',
  '21:59',
  '22:59',
  '23:59',
];
