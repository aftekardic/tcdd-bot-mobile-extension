import React, {FC} from 'react';
import {View, StyleSheet} from 'react-native';
import PagesButton from '../components/buttons/pages-button';

interface HomeScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const handleButtonPress = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <PagesButton
          type="finder"
          onPress={() => handleButtonPress('FromToScreen')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
