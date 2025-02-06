// Once again I'm importing the necessary components from React Native and the components from the app
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/ThemeContext';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

// Creating the AccountScreen component
export default function AccountScreen() {
  // Creating the colorScheme and toggleTheme variables
  const [colorScheme, toggleTheme] = useColorScheme();
  // Creating the isDark variable
  // The isDark variable is used to check if the color scheme is dark
  const isDark = colorScheme === 'dark';
  // Creating the scheme variable
  // The scheme variable is used to check if the color scheme is dark
  const scheme = isDark ? 'dark' : 'light';
  // Creating the tintColor variable
  // The tintColor variable is used to check the color of the component
  const tintColor = Colors[scheme].tint;
  // Creating the backgroundColor variable
  // The backgroundColor variable is used to check the background color of the component
  const backgroundColor = useThemeColor({}, 'background');

  // Creating the handleThemeToggle function
  const handleThemeToggle = () => {
    // The handleThemeToggle function is used to toggle the theme
    if (typeof toggleTheme === 'function') {
      // The toggleTheme function is used to toggle the theme
      toggleTheme();
    }
  };

  // Returning the component    
  return (
    // The ScrollView component is used to create a scrollable view
    // The style prop is used to set the background color of the component
    <ScrollView style={[styles.container, { backgroundColor }]}>
      {/* The ThemedView component is used to display the container */}
      <ThemedView style={styles.header}>
        <ThemedText type="title">Account</ThemedText>
        <ThemedText style={styles.subtitle}>Manage your preferences</ThemedText>
      </ThemedView>

      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Profile Settings</ThemedText>
        {/* The View component is used to display the settings list */}
        <View style={styles.settingsList}>
          {/* The TouchableOpacity component is used to create a touchable element */}
          <TouchableOpacity onPress={handleThemeToggle}>
            {/* The ThemedView component is used to display the setting item */}
            <ThemedView style={styles.settingItem}>
              {/* The View component is used to display the setting left */}
              <View style={styles.settingLeft}>
                {/* The IconSymbol component is used to display the icon */}
                <IconSymbol 
                  // The name prop is used to set the name of the icon
                  name={isDark ? "moon.fill" : "sun.max.fill"} 
                  size={24} 
                  color={tintColor} 
                />
                {/* The View component is used to display the setting right */}
                <View>
                  {/* The ThemedText component is used to display the setting text */}
                  <ThemedText>Theme</ThemedText>
                  {/* The ThemedText component is used to display the setting detail */}
                  <ThemedText style={styles.settingDetail}>
                    {isDark ? 'Dark Mode' : 'Light Mode'}
                  </ThemedText>
                </View>
              </View>
              <IconSymbol name="chevron.right" size={20} color={tintColor} />
            </ThemedView>
          </TouchableOpacity>

          {/* The TouchableOpacity component is used to create a touchable element */}
          <TouchableOpacity>
            {/* The ThemedView component is used to display the setting item */}
            <ThemedView style={styles.settingItem}>
              {/* The View component is used to display the setting left */}
              <View style={styles.settingLeft}>
                {/* The IconSymbol component is used to display the icon */}
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
            {/* The ThemedView component is used to display the setting item */}
            <ThemedView style={styles.settingItem}>
              {/* The View component is used to display the setting left */}
              <View style={styles.settingLeft}>
                {/* The IconSymbol component is used to display the icon */}
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

// Creating the styles for the component
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

  // Creating the settingItem style 
  settingItem: {
    // The flexDirection prop is used to set the flex direction of the component
    // The value is row, which means the component will be displayed in a row
    flexDirection: 'row',
    // The alignItems prop is used to set the align items of the component
    // The value is center, which means the component will be aligned in the center
    alignItems: 'center',
    // The justifyContent prop is used to set the justify content of the component
    // The value is space-between, which means the component will be displayed in a row with space between the components
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