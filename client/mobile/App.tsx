import React from 'react';
import {
  StatusBar,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StackScreens from './src/routes/StackScreens';

const App = () => {
  return (
    <SafeAreaProvider style={styles.appBg}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.black}
      />
      <NavigationContainer>
        <StackScreens />
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
