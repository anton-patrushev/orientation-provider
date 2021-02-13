import { AppRegistry } from 'react-native';
import App from '@/components/App';
import { name as appName } from '../app.json';

AppRegistry.registerComponent(appName, () => App);

export default function initApp() {
  return AppRegistry.registerComponent(appName, () => App);
}
