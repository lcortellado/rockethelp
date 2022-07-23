import { NativeBaseProvider, StatusBar } from 'native-base';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { THEME } from './src/styles/theme';

import SignIn from './src/screens/SignIn';
import Loading from './src/screens/components/Loading';

export default function App() {
  const [fonstLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
      barStyle='light-content'
      backgroundColor="transparent"
      translucent
      />
   {fonstLoaded ? <SignIn /> : <Loading />} 
  </NativeBaseProvider>
   
  );
}

