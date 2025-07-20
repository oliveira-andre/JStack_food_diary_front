import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import {
  useFonts,
  HostGrotesk_400Regular,
  HostGrotesk_500Medium,
  HostGrotesk_600SemiBold,
  HostGrotesk_700Bold,
} from '@expo-google-fonts/host-grotesk';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { HomeHeader } from './components/HomeHeader';
import { DateSwitcher } from './components/DateSwitcher';
import { DailyStats } from './components/DailyStats';

import './styles/global.css';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    HostGrotesk_400Regular,
    HostGrotesk_500Medium,
    HostGrotesk_600SemiBold,
    HostGrotesk_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaProvider>
        <HomeHeader />
        <DateSwitcher />
        <View className="mt-2">
          <DailyStats
            calories={{
              current: 500,
              goal: 2500,
            }}
            proteins={{
              current: 2000,
              goal: 2500,
            }}
            carbohydrates={{
              current: 500,
              goal: 2500,
            }}
            fats={{
              current: 500,
              goal: 2500,
            }}
          />
        </View>

        <View className="h-px bg-gray-200 mt-7" />
      </SafeAreaProvider>
    </View>
  );
}

