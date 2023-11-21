import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonComponent = ({
  title,
  bgColor,
  onPress,
}: {
  title: string;
  bgColor?: string;
  onPress: Function;
}) => {
  return (
    <View style={[styles.btn, {backgroundColor: bgColor || 'white'}]}>
      <TouchableOpacity onPress={() => onPress()} style={styles.btn}>
        <Text style={{fontSize: 18}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default ButtonComponent;
