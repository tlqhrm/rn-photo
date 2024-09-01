import { createNativeStackNavigator } from '@react-navigation/native-stack';
import signInScreen from '../screens/SignInScreen';
import signUpScreen from '../screens/SignUpScreen';
import { AuthRoutes } from './route';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AuthRoutes.SIGN_IN} component={signInScreen} />
      <Stack.Screen name={AuthRoutes.SIGN_UP} component={signUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
