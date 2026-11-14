import { ScrollView as RNScrollView } from 'react-native';
import MemoryCard from '../../components/memory-card';

export default function ScrollView() {
  return (
    <>
      <RNScrollView>
        <MemoryCard />
        <MemoryCard />
        <MemoryCard />
      </RNScrollView>
    </>
  );
}
