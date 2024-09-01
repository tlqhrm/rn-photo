import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { GRAY, PRIMARY, WHITE } from '../../colors';

const props = {
  title: '',
  onPress: () => {},
  disabled: false,
  isLoading: false,
  styles: {},
};

const Button = ({ title, onPress, disabled, isLoading, styles }) => {
  props.title = title;
  props.onPress = onPress;
  props.disabled = disabled;
  props.isLoading = isLoading;
  props.styles = styles;

  return (
    <View style={[defaultStyles.container, styles?.container]}>
      <Pressable
        onPress={props.onPress}
        disabled={props.disabled || props.isLoading}
        style={(pressed) => [
          defaultStyles.button,
          {
            backgroundColor: setBackgroundColor(pressed),
          },
          props.styles?.button,
        ]}
      >
        {setText()}
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  styles: PropTypes.object,
};

const setBackgroundColor = (pressed) => {
  switch (true) {
    case props.disabled || props.isLoading:
      return PRIMARY.LIGHT;
    case pressed:
      return PRIMARY.DARK;
    default:
      return PRIMARY.DEFAULT;
  }
};

const setText = () => {
  switch (true) {
    case props.isLoading:
      return <ActivityIndicator size={'small'} color={GRAY.DARK} />;
    default:
      return <Text style={defaultStyles.title}>{props.title}</Text>;
  }
};

const defaultStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
  button: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
