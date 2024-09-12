import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import Caculator from './Caculator';

export default function App() {
  return (
    <SafeAreaView style ={{flex: 1}}>
      <Caculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
