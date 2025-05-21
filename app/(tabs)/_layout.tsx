import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; // Adicione esta importação

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="radios"
        options={{
          title: 'Rádios',
          tabBarIcon: ({ color }) => <MaterialIcons name="radio" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about-us"
        options={{
          title: 'Sobre nós',
          tabBarIcon: ({ color }) => <MaterialIcons name="history-edu" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}