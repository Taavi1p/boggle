import React, {useState} from 'react';
import Navigation from './navigation/Navigator';
import  * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'avenir-heavy': require('./assets/fonts/avenir-heavy.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)} />
  }
  
  return (
    <Navigation />
  );
}
