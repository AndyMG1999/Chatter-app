import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ScreenRouter from './components/ScreenRouter';
import { AppProvider } from './context/context';


export default function App() {

  return (
    <AppProvider>
      <SafeAreaProvider>
      <View style={styles.container}>
        <SafeAreaView style={{flex:1}}>
        <Sidebar />
        <Header />
        <ScreenRouter />
        <StatusBar style="auto" />
        </SafeAreaView>
      </View>
      </SafeAreaProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(62, 104, 128)',
  },
});
