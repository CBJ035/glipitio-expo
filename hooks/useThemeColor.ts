import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/ThemeContext';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const [theme] = useColorScheme();
  
  if (props.light && props.dark) {
    return theme === 'dark' ? props.dark : props.light;
  }

  return Colors[theme][colorName];
} 