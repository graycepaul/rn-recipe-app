import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { RECIPES } from 'constants/recipes';
import { useFavorites } from 'hooks/useFavorites';

const styles = {
  screen: 'flex-1 bg-neutral-50 px-6 pt-6',
  title: 'text-2xl font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',

  card: 'mt-4 overflow-hidden rounded-2xl bg-white shadow-sm',
  image: 'h-36 w-full',
  body: 'p-4',
  cardTitle: 'text-lg font-semibold text-neutral-900',
  cardDesc: 'mt-1 text-sm text-neutral-600',

  emptyWrap: 'mt-16 items-center',
  emptyTitle: 'text-base font-semibold text-neutral-900',
  emptyText: 'mt-1 text-sm text-neutral-500',
};

export default function FavoritesTab() {
  const router = useRouter();
  const { favorites, isReady } = useFavorites();

  const data = RECIPES.filter((r) => favorites.includes(r.id));

  if (!isReady) return null;

  if (data.length === 0) {
    return (
      <View className={styles.screen}>
        <Text className={styles.title}>Favorites</Text>
        <Text className={styles.subtitle}>Recipes you save will appear here</Text>

        <View className={styles.emptyWrap}>
          <Text className={styles.emptyTitle}>No favorites yet</Text>
          <Text className={styles.emptyText}>Start exploring and save recipes you like.</Text>
        </View>
      </View>
    );
  }

  return (
    <View className={styles.screen}>
      <Text className={styles.title}>Favorites</Text>
      <Text className={styles.subtitle}>Your saved recipes</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/recipe/${item.id}`)} className={styles.card}>
            <Image source={{ uri: item.imageUrl }} className={styles.image} />
            <View className={styles.body}>
              <Text className={styles.cardTitle}>{item.title}</Text>
              <Text className={styles.cardDesc}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
