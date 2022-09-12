import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/pages/Login';
import Register from './src/pages/Register';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider style={styles.appBg}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.black}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>

          <Stack.Screen
            options={
              {
                headerShown: false
              }
            }
            name="Login"
            component={Login} />

          <Stack.Screen
            options={
              {
                headerShown: false
              }
            }
            name="Register"
            component={Register} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  appBg: {
    backgroundColor: Colors.white,
  },
  statusBar: {
    backgroundColor: Colors.black,
  }
});

export default App;
