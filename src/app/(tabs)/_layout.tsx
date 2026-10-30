import { Tabs } from 'expo-router';
import { View } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: `Memory Map`,
          tabBarIcon: ({ color }) => <FontAwesome5 name="map-marked-alt" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scroll-view"
        options={{
          title: `Scroll View`,
          tabBarIcon: ({ color }) => <FontAwesome name="book" size={24} color={color as string} />,
        }}
      />
    </Tabs>
  );
}
