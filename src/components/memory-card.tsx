import { View, Text, Image, StyleSheet } from 'react-native';
import { tokens } from '../theme/token';

type MemoryCardProps = {
  title: string;
  description: string | null;
  created_at: string;
  type: string;
  place_name: string | null;
};

export default function MemoryCard({
  title,
  description,
  created_at,
  type,
  place_name,
}: MemoryCardProps) {
  const date = new Date(created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const memoryType = type.replace(/_/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());

  // Temporary: no media retrieval implemented yet
  const mediaUrl = null;
  const placeholderUrl =
    'https://i0.wp.com/lostincomposition.com/wp-content/uploads/2026/02/Seattle.jpeg';

  return (
    <View style={styles.card}>
      <Image source={{ uri: mediaUrl ?? placeholderUrl }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.type}>{memoryType} Memory</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <Text style={styles.title}>{title}</Text>

        {description ? <Text style={styles.description}>{description}</Text> : null}

        {place_name ? (
          <View style={styles.locationSection}>
            <Text style={styles.location}>{place_name}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: tokens.colors.surface,
    borderColor: tokens.colors.border,
    borderWidth: 1,
    borderRadius: tokens.radius.md,
    marginHorizontal: tokens.layout.screenGutter,
    marginVertical: tokens.spacing.sm,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 180,
    backgroundColor: tokens.colors.border,
  },

  content: {
    padding: tokens.spacing.base,
    gap: tokens.spacing.sm,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },

  type: {
    color: tokens.colors.electricBlue,
    fontSize: tokens.typography.small,
    fontWeight: '700',
  },

  date: {
    color: tokens.colors.textMuted,
    fontSize: tokens.typography.small,
  },

  title: {
    color: tokens.colors.atlasInk,
    fontSize: tokens.typography.memoryTitle,
    fontWeight: '700',
  },

  description: {
    color: tokens.colors.atlasInk,
    fontSize: tokens.typography.body,
    lineHeight: 24,
  },

  locationSection: {
    borderTopWidth: 1,
    borderTopColor: tokens.colors.border,
    paddingTop: tokens.spacing.sm,
    marginTop: tokens.spacing.xs,
  },

  location: {
    color: tokens.colors.textMuted,
    fontSize: tokens.typography.secondary,
  },
});
