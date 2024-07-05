import {StyleSheet, Text, View, SafeAreaProvider} from 'react-native';
import React from 'react';
// import {StatusBar} from 'expo-status-bar';
import {StatusBar} from 'react-native';
// import {Stack} from 'expo-router';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <View>
        <Text>Splitz Streamz</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
