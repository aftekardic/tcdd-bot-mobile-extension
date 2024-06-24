import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrain} from '@fortawesome/free-solid-svg-icons/faTrain';
import {TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {Text} from '@rneui/base';
import {StyleSheet} from 'react-native';

interface PagesButtonProps {
  type: 'finder';
  onPress: () => void;
}

const PagesButton: FC<PagesButtonProps> = ({type, onPress}) => {
  const icon = type === 'finder' ? <FontAwesomeIcon icon={faTrain} /> : null;
  const title = type === 'finder' ? 'Find Your Trip' : null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      {title && <Text style={styles.title}>{title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
    width: 100,
    height: 100,
    borderRadius: 10,
    borderColor: '#2089dc',
    borderWidth: 1,
  },
  title: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
});

export default PagesButton;
