import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const [colorScheme] = useColorScheme();
  const theme = colorScheme || 'light';

  // Add safety check for Colors
  const tintColor = Colors?.[theme]?.tint || '#000000';

  // Returning the component
  return (
    // The Tabs component is used to create a tab bar
    // The screenOptions prop is used to set the options for the component
    <Tabs
      screenOptions={{
        // The tabBarActiveTintColor prop is used to set the active tint color of the component
        // The value is tintColor, which means the component will have the tint color
        tabBarActiveTintColor: tintColor,
        // The headerShown prop is used to set the header of the component
        // The value is false, which means the component will not have a header
        headerShown: false,
        // The tabBarButton prop is used to set the button of the component
        // The value is HapticTab, which means the component will have the HapticTab component
        tabBarButton: HapticTab,
        // The tabBarBackground prop is used to set the background of the component
        // The value is TabBarBackground, which means the component will have the TabBarBackground component
        tabBarBackground: TabBarBackground,
        // The tabBarStyle prop is used to set the style of the component
        // The value is Platform.select({ ios: { position: 'absolute' }, default: {}}), which means the component will have the position absolute on iOS and default on other platforms
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          // The default value is {}, which means the component will have the default style
          default: {},
        }),
      }}>
      {/* The Tabs.Screen component is used to create a tab */}
      <Tabs.Screen
        // The name prop is used to set the name of the tab
        name="index"
        options={{
          // The title prop is used to set the title of the tab
          title: 'Home',
          // The tabBarIcon prop is used to set the icon of the tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        // The name prop is used to set the name of the tab
        name="receipts"
        options={{
          // The title prop is used to set the title of the tab
          title: 'Receipts',
          // The tabBarIcon prop is used to set the icon of the tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="doc.text.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        // The name prop is used to set the name of the tab
        name="warranty"
        options={{
          // The title prop is used to set the title of the tab
          title: 'Warranty',
          // The tabBarIcon prop is used to set the icon of the tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="shield.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          // The title prop is used to set the title of the tab
          title: 'Account',
          // The tabBarIcon prop is used to set the icon of the tab
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
  