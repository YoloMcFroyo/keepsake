import { ScrollView as RNScrollView , StyleSheet } from 'react-native';
import MemoryCard from '../../components/memory-card';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { tokens } from '@/theme/token';

export default function ScrollView() {
  const [memories, setMemories] = useState<any[]>([]);

  useEffect(() => {
    async function loadMemories() {
      const { data, error } = await supabase
        .from('moments')
        .select('id, title, description, created_at, type, place_name')
        .order('created_at', { ascending: false });

      if (error) {
        console.log(error.message);
        return;
      }

      setMemories(data ?? []);
    }

    loadMemories();
  }, []);

  return (
    <>
      <RNScrollView style={styles.container} contentContainerStyle={styles.content}>
        {memories.map((moment) => (
          <MemoryCard key={moment.id} {...moment} />
        ))}
      </RNScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.background,
  },

  content: {
    paddingVertical: tokens.spacing.md,
  },
});
