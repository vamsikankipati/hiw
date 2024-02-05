/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import {MD3LightTheme, PaperProvider} from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: 'darkblue',
    secondary: 'lightgreen',
  },
};

export const Main = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
