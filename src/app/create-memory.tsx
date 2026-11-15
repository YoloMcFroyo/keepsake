import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Pressable } from 'react-native';
import { tokens } from '../theme/token';

const memoryTypes = ['General', 'Restaurant', 'Reflection', 'Milestone', 'Fish Catch'];

export default function CreateMemory() {
  const [selectedType, setSelectedType] = useState('General');

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerCard}>
        <Text style={styles.eyebrow}>KEEPSAKE / NEW MEMORY</Text>
        <Text style={styles.pageTitle}>Create Memory</Text>
        <Text style={styles.pageSubtitle}>
          Preserve a meaningful moment and place it on your personal atlas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Memory Type</Text>
        <Text style={styles.sectionSubtitle}>Choose the type that best fits this moment.</Text>

        <View style={styles.chipRow}>
          {memoryTypes.map((type) => {
            const selected = selectedType === type;

            return (
              <Pressable
                key={type}
                onPress={() => setSelectedType(type)}
                style={[styles.chip, selected ? styles.chipSelected : styles.chipUnselected]}
              >
                <Text
                  style={[
                    styles.chipText,
                    selected ? styles.chipTextSelected : styles.chipTextUnselected,
                  ]}
                >
                  {type}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Memory Details</Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            placeholder="e.g. Sunset at the pier"
            placeholderTextColor={tokens.colors.textMuted}
            style={styles.input}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            placeholder="What made this moment meaningful?"
            placeholderTextColor={tokens.colors.textMuted}
            multiline
            textAlignVertical="top"
            style={[styles.input, styles.textArea]}
          />
        </View>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Date & Time</Text>
          <TextInput
            placeholder="November 2, 2026 · 7:15 PM"
            placeholderTextColor={tokens.colors.textMuted}
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionSubtitle}>
          Every memory in Keepsake belongs somewhere in the world.
        </Text>

        <View style={styles.fieldGroup}>
          <Text style={styles.label}>Place Name</Text>
          <TextInput
            placeholder="e.g. Pier 67"
            placeholderTextColor={tokens.colors.textMuted}
            style={styles.input}
          />
        </View>

        <View style={styles.locationCard}>
          <View style={styles.locationBeacon} />
          <View style={styles.locationInfo}>
            <Text style={styles.locationTitle}>Map Location Selected</Text>
            <Text style={styles.locationMeta}>Latitude: 47.6136</Text>
            <Text style={styles.locationMeta}>Longitude: -122.3525</Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Choose on Map</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Search Place</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Media</Text>
        <View style={styles.mediaCard}>
          <Text style={styles.mediaTitle}>Photos & Videos</Text>
          <Text style={styles.mediaSubtitle}>
            Attach images or video that help bring this memory back to life.
          </Text>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Add Media</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.footerActions}>
        <Pressable style={styles.primaryButtonLarge}>
          <Text style={styles.primaryButtonText}>Save Memory</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.layout.screenGutter,
    paddingBottom: tokens.spacing.xl * 2,
    backgroundColor: tokens.colors.formBackground,
    gap: tokens.spacing.lg,
  },

  headerCard: {
    backgroundColor: tokens.colors.atlasInk,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    gap: tokens.spacing.sm,
  },

  eyebrow: {
    fontSize: tokens.typography.small,
    fontWeight: '700',
    letterSpacing: 1,
    color: tokens.colors.luminousCyan,
  },

  pageTitle: {
    fontSize: tokens.typography.screenTitle,
    fontWeight: '700',
    color: tokens.colors.surface,
  },

  pageSubtitle: {
    fontSize: tokens.typography.secondary,
    lineHeight: 22,
    color: tokens.colors.surface,
    opacity: 0.8,
  },

  section: {
    backgroundColor: tokens.colors.surface,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    gap: tokens.spacing.base,
  },

  sectionTitle: {
    fontSize: tokens.typography.sectionTitle,
    fontWeight: '700',
    color: tokens.colors.atlasInk,
  },

  sectionSubtitle: {
    fontSize: tokens.typography.secondary,
    lineHeight: 20,
    color: tokens.colors.textMuted,
    marginTop: -6,
  },

  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing.sm,
  },

  chip: {
    paddingVertical: tokens.spacing.sm + 2,
    paddingHorizontal: tokens.spacing.base,
    borderRadius: 999,
    borderWidth: 1,
  },

  chipSelected: {
    backgroundColor: tokens.colors.electricBlue,
    borderColor: tokens.colors.electricBlue,
  },

  chipUnselected: {
    backgroundColor: tokens.colors.background,
    borderColor: tokens.colors.border,
  },

  chipText: {
    fontSize: tokens.typography.secondary,
    fontWeight: '600',
  },

  chipTextSelected: {
    color: tokens.colors.surface,
  },

  chipTextUnselected: {
    color: tokens.colors.atlasInk,
  },

  fieldGroup: {
    gap: tokens.spacing.sm,
  },

  label: {
    fontSize: tokens.typography.secondary,
    fontWeight: '600',
    color: tokens.colors.atlasInk,
  },

  input: {
    backgroundColor: tokens.colors.surface,
    borderWidth: tokens.layout.inputBorderWidth,
    borderColor: tokens.colors.border,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.base,
    paddingVertical: tokens.spacing.md,
    fontSize: tokens.typography.body,
    color: tokens.colors.atlasInk,
  },

  textArea: {
    minHeight: 120,
    paddingTop: tokens.spacing.md,
  },

  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.colors.background,
    borderRadius: tokens.radius.md,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    padding: tokens.spacing.base,
    gap: tokens.spacing.base,
  },

  locationBeacon: {
    width: 18,
    height: 18,
    borderRadius: 999,
    backgroundColor: tokens.colors.beaconCore,
    borderWidth: 4,
    borderColor: tokens.colors.electricBlue,
    shadowColor: tokens.colors.electricBlue,
    shadowOpacity: 0.35,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 0 },
  },

  locationInfo: {
    flex: 1,
    gap: tokens.spacing.xs,
  },

  locationTitle: {
    fontSize: tokens.typography.body,
    fontWeight: '700',
    color: tokens.colors.atlasInk,
  },

  locationMeta: {
    fontSize: tokens.typography.secondary,
    color: tokens.colors.textMuted,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
  },

  secondaryButton: {
    flex: 1,
    minHeight: tokens.layout.minTouchTarget,
    backgroundColor: tokens.colors.surface,
    borderWidth: 1,
    borderColor: tokens.colors.electricBlue,
    borderRadius: tokens.radius.md,
    paddingVertical: tokens.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryButtonText: {
    color: tokens.colors.actionTextBlue,
    fontWeight: '700',
    fontSize: tokens.typography.secondary,
  },

  mediaCard: {
    backgroundColor: tokens.colors.background,
    borderRadius: tokens.radius.md,
    borderWidth: 1,
    borderColor: tokens.colors.border,
    padding: tokens.spacing.base,
    gap: tokens.spacing.sm,
  },

  mediaTitle: {
    fontSize: tokens.typography.body,
    fontWeight: '700',
    color: tokens.colors.atlasInk,
  },

  mediaSubtitle: {
    fontSize: tokens.typography.secondary,
    lineHeight: 20,
    color: tokens.colors.textMuted,
  },

  primaryButton: {
    marginTop: tokens.spacing.xs,
    alignSelf: 'flex-start',
    backgroundColor: tokens.colors.electricBlue,
    borderRadius: tokens.radius.md,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
  },

  primaryButtonLarge: {
    backgroundColor: tokens.colors.electricBlue,
    borderRadius: tokens.radius.md,
    minHeight: tokens.layout.minTouchTarget,
    paddingVertical: tokens.spacing.base,
    alignItems: 'center',
    justifyContent: 'center',
  },

  primaryButtonText: {
    color: tokens.colors.surface,
    fontWeight: '700',
    fontSize: tokens.typography.body,
  },

  footerActions: {
    marginTop: tokens.spacing.xs,
  },
});
