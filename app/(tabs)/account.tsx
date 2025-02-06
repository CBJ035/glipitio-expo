import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/ThemeContext';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function AccountScreen() {
  const [colorScheme, toggleTheme] = useColorScheme();
  const isDark = colorScheme === 'dark';
  const scheme = isDark ? 'dark' : 'light';
  const tintColor = Colors[scheme].tint;
  const backgroundColor = useThemeColor({}, 'background');

  const handleThemeToggle = () => {
    if (typeof toggleTheme === 'function') {
      toggleTheme();
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Account</ThemedText>
        <ThemedText style={styles.subtitle}>Manage your preferences</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Profile Settings</ThemedText>
        <View style={styles.settingsList}>
          <TouchableOpacity onPress={handleThemeToggle}>
            <ThemedView style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <IconSymbol 
                  name={isDark ? "moon.fill" : "sun.max.fill"} 
                  size={24} 
                  color={tintColor} 
                />
                <View>
                  <ThemedText>Theme</ThemedText>
                  <ThemedText style={styles.settingDetail}>
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </ThemedText>
                </View>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity>
            <ThemedView style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <IconSymbol 
                  name="person.circle" 
                  size={24} 
                  color={tintColor} 
                />
                <ThemedText>Personal Information</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity>
            <ThemedView style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <IconSymbol 
                  name="bell" 
                  size={24} 
                  color={tintColor} 
                />
                <ThemedText>Notifications</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity>
            <ThemedView style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <IconSymbol 
                  name="lock" 
                  size={24} 
                  color={tintColor} 
                />
                <ThemedText>Privacy & Security</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>

          <TouchableOpacity>
            <ThemedView style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <IconSymbol 
                  name="questionmark.circle" 
                  size={24} 
                  color={tintColor} 
                />
                <ThemedText>Help & Support</ThemedText>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>
        </View>
      </ThemedView>
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
  section: {
    padding: 16,
    gap: 16,
  },
  settingsList: {
    gap: 8,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingDetail: {
    fontSize: 12,
    opacity: 0.6,
  },
}); 