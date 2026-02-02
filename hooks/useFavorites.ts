import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAVORITES_KEY } from 'constants/favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const load = async () => {
      const raw = await AsyncStorage.getItem(FAVORITES_KEY);
      setFavorites(raw ? JSON.parse(raw) : []);
      setIsReady(true);
    };

    load();
  }, []);

  const save = async (id: string) => {
    if (favorites.includes(id)) return;

    const updated = [...favorites, id];
    setFavorites(updated);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  const remove = async (id: string) => {
    const updated = favorites.filter((f) => f !== id);
    setFavorites(updated);
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  };

  return {
    favorites,
    isReady,
    save,
    remove,
  };
}
