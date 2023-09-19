import axios from 'axios';
import type { Ref } from 'vue';
import { ref } from 'vue';
import type { MuseumResult } from '@/types/museumTypes';
const BASE_URL = 'https://openaccess-api.clevelandart.org/api/artworks/';

const makeCall = async (endpoint: string) => {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response.data;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export default function useMuseum() {
  const results: Ref<MuseumResult[]> = ref([]);
  const loading: Ref<boolean> = ref(false);
  const error: Ref<string | null> = ref(null);

  const search = async (query: string, limit = 12) => {
    loading.value = true;
    error.value = null;

    try {
      const queryParams = `?q=${query}&has_image=1&type=Painting&limit=${limit}`;
      const searchData = await makeCall(queryParams);

      // Create a new array with the modified objects
      const transformedData = searchData.data.map((result: any) => ({
        title: result.title,
        author: result.creators[0]?.description || '',
        year: result.creation_date || '',
        culture: result.culture?.[0] || '',
        image: result.images?.web?.url || ''
      })) as MuseumResult[];

      results.value = transformedData;
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      loading.value = false;
    }
  };

  return {
    results,
    loading,
    error,
    search
  };
}
