import {StyleSheet, TouchableOpacity, View} from 'react-native';
import BackIcon from '../assets/arrow-left.svg';
import {useNavigation} from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();
  const onPressBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.back} onPress={onPressBack}>
      <BackIcon width={22} height={22} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  back: {
    width: 52,
    height: 52,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 26,
  },
});

export default BackButton;
