import {Text} from '@rneui/base';
import React, {FC, useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Calendar} from 'react-native-calendars';
import NextPageButton from '../components/buttons/next-page-button';
import {RouteProp} from '@react-navigation/native';

type RootStackParamList = {
  DateScreen: {
    fromCity: string;
    toCity: string;
  };
};
interface DateScreenProps {
  navigation: {
    navigate: (screen: string, props: object) => void;
  };
  route: RouteProp<RootStackParamList, 'DateScreen'>;
}

const DateScreen: FC<DateScreenProps> = ({navigation, route}) => {
  const {fromCity, toCity} = route.params;
  const today = new Date().toISOString().split('T')[0];

  function formatDate(inputDate: string): string {
    const parts: string[] = inputDate.split('-');
    const formattedDate: string = parts[2] + '.' + parts[1] + '.' + parts[0];
    return formattedDate;
  }

  const handleButtonPress = (screen: string) => {
    const selectedDate: string | null = selectedDate_
      ? formatDate(selectedDate_)
      : null;
    navigation.navigate(screen, {fromCity, toCity, selectedDate});
  };
  const [selectedDate_, setSelectedDate_] = useState<string | null>(null);
  console.log(selectedDate_?.length);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DateScreen</Text>
      <Calendar
        markedDates={{
          [selectedDate_ || '']: {
            selected: true,
            marked: true,
            selectedColor: 'blue',
          },
        }}
        onDayPress={day => {
          if (day.dateString < today) {
            return Alert.alert(
              'Wrong Date',
              'You selected before today. Please select available date.',
              [{text: 'OK'}],
            );
          }
          setSelectedDate_(day.dateString);
        }}
        style={{marginBottom: 20}}
      />
      {selectedDate_ !== null ? (
        <Text style={styles.headerText}>
          Your Selected Date: {formatDate(selectedDate_)}
        </Text>
      ) : null}

      <Text style={{textAlign: 'center', padding: 50}}>
        Determine the day you will travel in this field.
      </Text>

      <NextPageButton
        style={styles.button}
        disabled={selectedDate_ === null}
        onPress={() => {
          handleButtonPress('TimeScreen');
        }}
      />
    </View>
  );
};

export default DateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    height: 1,
    width: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#fff',
    padding: 25,
  },
});
