import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'center',
  },
});

const StarButton = ({ onPress, enabled }) => {
  const name = enabled ? 'star' : 'star-o';
  console.log(name);
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <FontAwesome name={name} size={40} color='gray' />
      <Text>Favorite</Text>
    </TouchableOpacity>
  );
};

export default StarButton;
