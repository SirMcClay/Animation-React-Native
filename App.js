/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
} from 'react-native';

const App: React.FC = () => {
  return (
   <View style={styles.container}>
     <View style={styles.ball} />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#F00',
  },
});

export default App;
