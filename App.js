import { NativeRouter } from 'react-router-native';
import Main from './components/Main';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
