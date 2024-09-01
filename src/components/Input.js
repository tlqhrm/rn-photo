import { View, Text, StyleSheet, TextInput } from 'react-native';
import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { GRAY, PRIMARY } from '../../colors';

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

export const InputTypes = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
};

const InputTypeProps = {
  EMAIL: {
    title: 'EMAIL',
    placeholder: 'your@email.com',
    keyboardType: 'email-address',
    secureTextEntry: false,
    iconName: {
      active: 'email',
      inactive: 'email-outline',
    },
  },
  PASSWORD: {
    title: 'PASSWORD',
    placeholder: 'Enter your password',
    keyboardType: 'default',
    secureTextEntry: true,
    iconName: {
      active: 'lock',
      inactive: 'lock-outline',
    },
  },
};

const Input = forwardRef(({ inputType, styles, ...props }, ref) => {
  const {
    title,
    placeholder,
    keyboardType,
    secureTextEntry,
    iconName: { active, inactive },
  } = InputTypeProps[inputType];

  const { value } = props;

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[defaultStyle.container, styles?.container]}>
      <Text
        style={[
          defaultStyle.title,
          {
            color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
          },
          styles?.title,
        ]}
      >
        {title}
      </Text>

      <View>
        <TextInput
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          ref={ref}
          {...props}
          style={[
            defaultStyle.input,
            {
              borderColor: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
              color: value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK,
            },
            styles?.input,
          ]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <View style={defaultStyle.icon}>
          <MaterialCommunityIcons
            name={isFocused ? active : inactive}
            size={24}
            color={value || isFocused ? PRIMARY.DEFAULT : GRAY.DARK}
          />
        </View>
      </View>
    </View>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  inputType: PropTypes.oneOf(Object.keys(InputTypeProps)).isRequired,
  value: PropTypes.string,
  styles: PropTypes.object,
};

const defaultStyle = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginBottom: 4,
    fontWeight: '700',
  },
  input: {
    borderBottomWidth: 1,
    height: 42,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
