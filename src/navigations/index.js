import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';

const Navigations = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigations;
