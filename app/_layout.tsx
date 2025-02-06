import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import { ThemeProvider, useColorScheme } from '@/hooks/ThemeContext';
import { ThemeWrapper } from '@/components/ThemeWrapper';
import { useThemeColor } from '@/hooks/useThemeColor';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Creating the RootLayout component
export default function RootLayout() {
  // Creating the loaded variable
  // The loaded variable is used to check if the fonts are loaded
  const [loaded] = useFonts({
    // The SpaceMono font is used to set the font of the component
    // The SpaceMono font is required from the assets/fonts/SpaceMono-Regular.ttf file
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // Creating the useEffect hook
  // The useEffect hook is used to hide the splash screen when the fonts are loaded
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  // Creating the if statement
  // The if statement is used to check if the fonts are loaded
  if (!loaded) {
    // The return null statement is used to return null if the fonts are not loaded
    return null;
  }

  // Returning the component  
  return (
    // The ThemeProvider component is used to provide the theme to the component
    <ThemeProvider>
      {/* The ThemedApp component is used to display the component */}
      <ThemedApp />
    </ThemeProvider>
  );
}

// Creating the ThemedApp component
function ThemedApp() {
  // Creating the colorScheme and backgroundColor variables
  const [colorScheme] = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  // Returning the component 
  return (
    // The NavigationThemeProvider component is used to provide the theme to the component
    <NavigationThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* The ThemeWrapper component is used to provide the theme to the component */}
      <ThemeWrapper>
        {/* The Stack component is used to create a stack */}
        <Stack>
          {/* The Stack.Screen component is used to create a screen */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* The Stack.Screen component is used to create a screen */}
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeWrapper>
    </NavigationThemeProvider>
  );
}
