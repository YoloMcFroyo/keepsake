import { Tabs, router } from 'expo-router';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

import { tokens } from '../../theme/token';

const { colors, spacing, radius, typography, layout } = tokens;

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={({ state }) => {
        // Find currently selected tab
        const selectedTabPosition = state.index;
        const selectedTabName = state.routes[selectedTabPosition].name;

        // "index" is the file name of the Map screen
        const isMapSelected = selectedTabName === 'index';
        const isScrollSelected = selectedTabName === 'scroll-view';

        // Selected tabs are blue. Unselected tabs are muted.
        const mapColor = isMapSelected ? colors.electricBlue : colors.textMuted;
        const scrollColor = isScrollSelected ? colors.electricBlue : colors.textMuted;

        return (
          <SafeAreaView edges={['bottom']} style={styles.bar}>
            {/* Memory Map */}
            <Pressable
              style={styles.tab}
              onPress={() => router.navigate('/')}
              accessibilityRole="tab"
              accessibilityState={{ selected: isMapSelected }}
            >
              <FontAwesome5 name="map-marked-alt" size={24} color={mapColor} />
              <Text style={{ fontSize: typography.small, color: mapColor }}>Memory Map</Text>
            </Pressable>

            {/* Create Memory */}
            <Pressable
              style={styles.tab}
              onPress={() => router.push('/create-memory')}
              accessibilityRole="button"
              accessibilityLabel="Create memory"
            >
              <View style={styles.createButton}>
                <Feather name="plus" size={24} color={colors.atlasInk} />
              </View>
              <Text style={{ fontSize: typography.small, color: colors.textMuted }}>Create</Text>
            </Pressable>

            {/* Scroll View */}
            <Pressable
              style={styles.tab}
              onPress={() => router.navigate('/scroll-view')}
              accessibilityRole="tab"
              accessibilityState={{ selected: isScrollSelected }}
            >
              <FontAwesome name="book" size={24} color={scrollColor} />
              <Text style={{ fontSize: typography.small, color: scrollColor }}>Scroll View</Text>
            </Pressable>
          </SafeAreaView>
        );
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Memory Map' }} />
      <Tabs.Screen name="scroll-view" options={{ title: 'Scroll View' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: spacing.sm,
  },

  tab: {
    flex: 1,
    minHeight: layout.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    gap: spacing.xs,
  },

  createButton: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
