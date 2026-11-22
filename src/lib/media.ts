import type { ImagePickerAsset } from 'expo-image-picker';
import { supabase } from '@/lib/supabase';

export async function uploadMemoryPhoto(
  photo: ImagePickerAsset,
  userId: string,
  momentId: string,
): Promise<string | null> {
  if (!photo.mimeType?.startsWith('image/')) {
    throw new Error('Unsupported photo format');
  }

  const extension = photo.mimeType.split('/')[1].replace('jpeg', 'jpg');
  const storagePath = `${userId}/${momentId}/photo.${extension}`;

  const response = await fetch(photo.uri);
  const imageData = await response.arrayBuffer();

  const { error } = await supabase.storage.from('moment-media').upload(storagePath, imageData, {
    contentType: photo.mimeType,
    upsert: false,
  });

  if (error) {
    throw error;
  }

  return storagePath;
}
