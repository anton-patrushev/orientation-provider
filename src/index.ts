import { AppRegistry } from 'react-native';
import App from '@/components/App/index';
import { name as appName } from 'root/app.json';

AppRegistry.registerComponent(appName, () => App);

export default function initApp() {
  return AppRegistry.registerComponent(appName, () => App);
}
