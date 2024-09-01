import { View, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress, disabled, isLoading, styles }) => {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.title}>Button</Text>
    </View>
  );
};

Button.prototype = {
  title : PropTypes.string,
  onPress : ,
  disabled,
  isLoading,
  styles
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default Button;
