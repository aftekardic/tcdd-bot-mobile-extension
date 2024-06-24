import React, {FC} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';

interface NextPageButtonProps {
  onPress: () => void;
  style?: ViewStyle;
  disabled: boolean;
}

const NextPageButton: FC<NextPageButtonProps> = ({
  onPress,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles(disabled).container, style]}
      onPress={onPress}
      disabled={disabled}>
      <FontAwesomeIcon icon={faChevronRight} size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default NextPageButton;

const styles = (disabled: Boolean) =>
  StyleSheet.create({
    container: {
      display: disabled ? 'none' : 'flex',
      backgroundColor: '#2089dc',
      borderRadius: 100,
      padding: 10,
      marginTop: 20,
    },
  });
