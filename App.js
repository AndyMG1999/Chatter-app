import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ScreenRouter from './components/ScreenRouter';
import { AppProvider } from './context/context';


export default function App() {

  return (
    <AppProvider>
      <View style={styles.container}>
        <Sidebar />
        <Header />
        <ScreenRouter />
        <StatusBar style="auto" />
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
