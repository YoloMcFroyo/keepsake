import { Stack } from 'expo-router';
import { tokens } from '@/theme/token';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';

export default function Layout() {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkLogin() {
      const result = await supabase.auth.getSession();

      setSignedIn(!!result.data.session);
      setLoading(false);
    }

    checkLogin();

    const listener = supabase.auth.onAuthStateChange((event, session) => {
      setSignedIn(!!session);
    });

    return () => {
      listener.data.subscription?.unsubscribe();
    };
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <Stack>
      <Stack.Protected guard={signedIn} redirectTo="/sign-in">
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
      </Stack.Protected>
      <Stack.Protected guard={!signedIn}>
        <Stack.Screen
          name="sign-in"
          options={{
            title: 'Sign In',
            headerTintColor: tokens.colors.electricBlue,
            headerStyle: {
              backgroundColor: tokens.colors.surface,
            },
          }}
        />
      </Stack.Protected>
    </Stack>
  );
}
