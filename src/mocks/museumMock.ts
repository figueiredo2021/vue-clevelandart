import type { MuseumResult } from '@/types/museumTypes';

export const mockResult = (num: Number): MuseumResult => {
  return {
    title: `Test Title ${num}`,
    author: `Test Artist ${num}`,
    year: `Test Date ${num}`,
    culture: `Test Culture ${num}`,
    image: 'https://picsum.photos/200'
  };
};

export const useMuseumMock = () => {
  return {
    results: [],
    loading: false,
    error: null,
    search: () => {
      console.log('called search');
    }
  };
};
