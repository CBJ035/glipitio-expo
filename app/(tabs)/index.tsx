import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function HomeScreen() {
  const [colorScheme] = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Dashboard</ThemedText>
        <ThemedText style={styles.subtitle}>Welcome back!</ThemedText>
      </ThemedView>
      
      <View style={styles.grid}>
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Recent Receipts</ThemedText>
          <ThemedText>View your latest purchases</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Warranties</ThemedText>
          <ThemedText>Track your active warranties</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">Profile</ThemedText>
          <ThemedText>Manage your account</ThemedText>
        </ThemedView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    gap: 8,
    marginTop: 60,
  },
  subtitle: {
    opacity: 0.7,
  },
  grid: {
    padding: 16,
    gap: 16,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    gap: 8,
  },
});
