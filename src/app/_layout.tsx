import { Stack } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { tokens } from '@/theme/token';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="create-memory"
        options={{
          title: 'Create Memory',
          headerTintColor: tokens.colors.electricBlue,
          headerStyle: {
            backgroundColor: tokens.colors.surface,
          },
        }}
      />
    </Stack>
  );
}
