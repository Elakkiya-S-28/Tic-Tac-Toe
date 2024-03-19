/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import TicTacToe from './src/Container/MainScreen';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <SafeAreaView style={styles.highlight}>
      <TicTacToe/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  highlight: {
 
   flex:1,
  },
});

export default App;
