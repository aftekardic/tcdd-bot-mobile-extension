import React, {FC} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

interface DataItem {
  [key: string]: string;
}

interface BusinessProps {
  data: any;
}

interface EconomyProps {
  data: any;
}

const BusinessScreen: FC<BusinessProps> = ({data}) => {
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 10,
      borderBottomColor: '#fff',
    },
  });
  const renderItem = ({item}: {item: DataItem}) => {
    const key = Object.keys(item);
    const value = Object.values(item);
    return (
      <View style={styles.item}>
        <Text>{key}</Text>
        <Text>{value} seat(s)</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const EconomyScreen: FC<EconomyProps> = ({data}) => {
  const styles = StyleSheet.create({
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 10,
      borderBottomColor: '#fff',
    },
  });
  const renderItem = ({item}: {item: DataItem}) => {
    const key = Object.keys(item);
    const value = Object.values(item);
    return (
      <View style={styles.item}>
        <Text>{key}</Text>
        <Text>{value} seat(s)</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

type RootStackParamList = {
  ResultScreen: {
    ECONOMY: [];
    BUSINESS: [];
  };
};
interface ResultScreenProps {
  navigation: {
    navigate: (screen: string, props: object) => void;
  };
  route: RouteProp<RootStackParamList, 'ResultScreen'>;
}
interface Data {
  BUSINESS: [];
  ECONOMY: [];
}
const ResultScreen: FC<ResultScreenProps> = ({navigation, route}) => {
  const data: Data = route.params;

  return (
    <Tab.Navigator>
      {data.BUSINESS.length > 0 && (
        <Tab.Screen name="Business">
          {() => <BusinessScreen data={data.BUSINESS} />}
        </Tab.Screen>
      )}
      {data.ECONOMY.length > 0 && (
        <Tab.Screen name="Economy">
          {() => <EconomyScreen data={data.ECONOMY} />}
        </Tab.Screen>
      )}
    </Tab.Navigator>
  );
};

export default ResultScreen;
