/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
// import { PaperProvider } from 'react-native-paper';

export const Main = () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <App />;
};

AppRegistry.registerComponent(appName, () => Main);
