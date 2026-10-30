import { View, Text, Image } from 'react-native';

export default function MemoryCard() {
  return (
    //Static content for the memory card - temporary placeholder
    <View style={{ flex: 1, borderWidth: 1, borderColor: 'black', padding: 10, margin: 10 }}>
      <Image
        source={{
          uri: 'https://images.contentstack.io/v3/assets/bltba617d00249585dc/blt61ecb49ec5b9fb9b/69976da099cddc000822af62/Sunset-Sc-1440x1440.jpg',
        }}
        style={{ width: '100%', height: 200 }}
      />
      <Text>BEACH VISIT</Text>
      <Text>June 15, 2024</Text>
      <Text>Memories of a fun day at the beach with friends and family.</Text>
      <Text>Location: Malibu, California</Text>
    </View>
  );
}
