import { View, StyleSheet, Platform, ViewStyle } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { useEffect } from 'react';

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme] = useColorScheme();
  const backgroundColor = theme === 'dark' ? Colors.dark.background : Colors.light.background;

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.body.style.backgroundColor = backgroundColor;
      document.body.style.height = '100%';
      document.documentElement.style.height = '100%';
    }
  }, [backgroundColor]);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  } as ViewStyle,
}); 