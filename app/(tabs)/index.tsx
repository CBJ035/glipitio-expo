// Importing necessary components and hooks from the project
// Importing them makes it possible to use components and hooks from other files
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/ThemeContext';
import { useThemeColor } from '@/hooks/useThemeColor';

// Exporting main function, which is the entry point for the HomeScreen component
// By exporting it, it makes it possible to use the component in other files
export default function HomeScreen() {
  // Using the useColorScheme hook to get the current color scheme
  // The hook returns an array, where the first element is the current color scheme
  // and the second element is a function to toggle the color scheme
  const [colorScheme] = useColorScheme();
  // Using the useThemeColor hook to get the current background color
  // The hook returns a color object, which is used to set the background color of the component
  const backgroundColor = useThemeColor({}, 'background');

  // Returning the component's JSX code
  // The component is a ScrollView, which contains a ThemedView and a View
  // The ThemedView is used to display the header and the subtitle
  // The View is used to display the grid of cards
  return (
    // The ScrollView is used to display the component's content
    // The style prop is used to set the background color of the component
    // The backgroundColor is the color object returned by the useThemeColor hook
    <ScrollView style={[styles.container, { backgroundColor }]}>
      {/* The ThemedView is used to display the header and the subtitle
      // The style prop is used to set the background color of the component
      // The backgroundColor is the color object returned by the useThemeColor hook */}
      <ThemedView style={styles.header}>
        {/* The ThemedText is used to display the title */}
        <ThemedText type="title">Dashboard</ThemedText>
        {/* The ThemedText is used to display the subtitle */}
        <ThemedText style={styles.subtitle}>Welcome back!</ThemedText>
      </ThemedView>
      
      {/* The View is used to display the grid of cards
      // The style prop is used to set the background color of the component
      // The backgroundColor is the color object returned by the useThemeColor hook */}
      <View style={styles.grid}>
        {/* The ThemedView is used to display the card
        // The style prop is used to set the background color of the component
        // The backgroundColor is the color object returned by the useThemeColor hook */}
        <ThemedView style={styles.card}>
          {/* The ThemedText component is used to display the title
          // The type prop is used to set the font size and weight of the text
          // The title prop is used to set the text of the component */}
          <ThemedText type="subtitle">Recent Receipts</ThemedText>
          {/* The ThemedText component is used to display the subtitle
          // The subtitle prop is used to set the text of the component */}
          <ThemedText>View your latest purchases</ThemedText>
        </ThemedView>
        
        {/* The ThemedView is used to display the card */}
        <ThemedView style={styles.card}>
          {/* Just like before, we use the ThemedText component to display the title and the subtitle */}
          <ThemedText type="subtitle">Warranties</ThemedText>
          <ThemedText>Track your active warranties</ThemedText>
        </ThemedView>
        
        {/* The ThemedView is used to display the card */}
        <ThemedView style={styles.card}>
          {/* Just like before, we use the ThemedText component to display the title and the subtitle */}
          <ThemedText type="subtitle">Profile</ThemedText>
          <ThemedText>Manage your account</ThemedText>
        </ThemedView>
      </View>
    </ScrollView>
  );
}

// Creating the styles for the component
const styles = StyleSheet.create({
  // The container style is used to set the background color of the component
  container: {
    // The flex prop is used to set the flex property of the component
    // The value is 1, which means the component will take up the full width of the screen
    flex: 1,

  },
  // The header style is used to set the padding, gap, and marginTop of the component
  header: {
    // The padding prop is used to set the padding of the component
    // The value is 24, which means the component will have 24 pixels of padding
    padding: 24,
    // The gap prop is used to set the gap between the components (the space between the components)
    // The value is 8, which means the component will have 8 pixels of gap
    gap: 8,
    // The marginTop prop is used to set the marginTop of the component (the space between the component and the top of the screen)
    // The value is 60, which means the component will have 60 pixels of marginTop
    marginTop: 60,
  
  },
  subtitle: {
    // The opacity prop is used to set the opacity of the component
    // The value is 0.7, which means the component will have 70% opacity
    opacity: 0.7,

  },
  // The grid style is used to set the padding, gap, and marginTop of the component
  grid: {
    padding: 16,
    gap: 16,

  },
  // The card style is used to set the padding, borderRadius, backgroundColor, and gap of the component
  card: {
    padding: 20,
    // The borderRadius prop is used to set the borderRadius of the component
    // The value is 12, which means the component will have 12 pixels of borderRadius
    borderRadius: 12,
    // The backgroundColor prop is used to set the backgroundColor of the component
    // The value is 'rgba(161, 206, 220, 0.1)', which means the component will have 10% opacity of the color #A1CEDC
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    gap: 8,
  },
});
