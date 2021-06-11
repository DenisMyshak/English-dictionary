import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import Home from './components/home/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
}); 