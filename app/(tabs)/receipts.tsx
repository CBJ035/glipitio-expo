// Importing the necessary components from React Native and the components from the app
import { StyleSheet, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

// Creating the ReceiptsScreen component
export default function ReceiptsScreen() {
    // Returning the component
  return (
    // The ParallaxScrollView component is used to create a parallax effect
    // The headerBackgroundColor prop is used to set the background color of the component
    // The headerImage prop is used to set the image of the component
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.headerImage}
        />
      }>
        {/* The ThemedView component is used to display the container */}
      <ThemedView style={styles.container}>
        {/* The ThemedText component is used to display the title */}
        <ThemedText type="title">Receipts</ThemedText>
        {/* The ThemedText component is used to display the subtitle */}
        <ThemedText>
          View and manage all your digital receipts here.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

// Creating the styles for the component
const styles = StyleSheet.create({
  // The container style is used to set the gap and padding of the component
  container: {
    gap: 16,
    padding: 16,
  },

  // The headerImage style is used to set the height, width, bottom, left, and position of the component
  headerImage: {
    // The height prop is used to set the height of the component
    // The value is 178, which means the component will have 178 pixels of height
    height: 178,
    // The width prop is used to set the width of the component
    // The value is 290, which means the component will have 290 pixels of width
    width: 290,
    // The bottom prop is used to set the bottom of the component
    // The value is 0, which means the component will be at the bottom of the screen
    bottom: 0,
    // The left prop is used to set the left of the component
    // The value is 0, which means the component will be at the left of the screen
    left: 0,
    // The position prop is used to set the position of the component
    // The value is 'absolute', which means the component will be positioned absolutely (meaning)
    position: 'absolute',
  },
}); 