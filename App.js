import { StatusBar } from 'react-native';
import React from 'react';

import theme from './src/theme/theme';

import { 
   useFonts,
   Nunito_300Light,
   Nunito_400Regular,
   Nunito_600SemiBold,
   Nunito_900Black,
   Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import AppLoading from 'expo-app-loading';

import { ThemeProvider } from 'styled-components';
import { StackRoutes } from './src/routes';

export default function App() {

   const [fontsLoaded] = useFonts({
      'Nunito-Light':  Nunito_300Light,
      'Nunito-Regular': Nunito_400Regular,
      'Nunito-Medium': Nunito_600SemiBold,
      'Nunito-Black': Nunito_900Black,
      'Nunito-Bold': Nunito_700Bold,
   });

   if (!fontsLoaded) { 
      return <AppLoading/>;
   }

   return (
      <ThemeProvider theme={theme}>
         <StackRoutes/>
         <StatusBar barStyle="dark-content" backgroundColor={theme.colors.background} translucent/>
      </ThemeProvider>
   );
}