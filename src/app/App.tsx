/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Menu from './Menu/Menu';
import {Section} from './common/Section';
import {useTheme} from 'react-native-paper';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = useTheme();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View>
          <Section title="Hello">Vamsi</Section>
          <Menu />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
