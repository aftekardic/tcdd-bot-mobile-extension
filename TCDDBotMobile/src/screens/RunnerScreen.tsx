import {Button, Text} from '@rneui/base';
import React, {FC, useState} from 'react';
import {StyleSheet, View, Switch, Alert} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {BACKEND_URL} from '@env';

type RootStackParamList = {
  RunnerScreen: {
    fromCity: string;
    fromTime: string;
    selectedDate: string;
    toCity: string;
    toTime: string;
  };
};
interface RunnerScreenProps {
  navigation: {
    navigate: (screen: string, props: object) => void;
  };
  route: RouteProp<RootStackParamList, 'RunnerScreen'>;
}
const RunnerScreen: FC<RunnerScreenProps> = ({navigation, route}) => {
  const {fromCity, fromTime, selectedDate, toCity, toTime} = route.params;
  const [isEnabledBusiness, setIsEnabledBusiness] = useState<boolean>(true);
  const [isNotEnabledDisabled, setIsNotEnabledDisabled] =
    useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleSwitchBusiness = () =>
    setIsEnabledBusiness(previousState => !previousState);
  const toggleSwitchDisabled = () =>
    setIsNotEnabledDisabled(previousState => !previousState);

  const handlePress = async () => {
    setLoading(true);
    try {
      const response = await fetch(BACKEND_URL + '/api/find-ticket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromCity,
          toCity,
          fromTime,
          toTime,
          selectedDate,
          isEnabledBusiness,
          isNotEnabledDisabled,
        }),
      });

      const data = await response.json();

      if (data) {
        setLoading(false);
        navigation.navigate('ResultScreen', data[0]);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error fetching data with body:', error);
      Alert.alert(
        'Error',
        'An error occurred while fetching data. Please try again later.',
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>From - To:</Text>
        <Text style={styles.value}>
          {fromCity}
          {' -> '}
          {toCity}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Date:</Text>
        <Text style={styles.value}>{selectedDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Searching Time:</Text>
        <Text style={styles.value}>
          {fromTime}
          {' -> '}
          {toTime}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 8,
        }}>
        <Switch
          onValueChange={toggleSwitchBusiness}
          value={isEnabledBusiness}
        />
        <Text>Find Business Seats</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 8,
        }}>
        <Switch
          onValueChange={toggleSwitchDisabled}
          value={isNotEnabledDisabled}
        />
        <Text>Do Not Find Disabled Seats</Text>
      </View>
      <Button onPress={handlePress} loading={loading}>
        Search
      </Button>
    </View>
  );
};

export default RunnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  value: {
    flex: 1,
  },
});
