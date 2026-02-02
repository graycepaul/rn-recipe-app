import { useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { CATEGORIES, RECIPES, Recipe } from 'constants/recipes';

const styles = {
  screen: 'flex-1 bg-neutral-50',

  headerWrap: 'px-6 pt-6 pb-4',
  title: 'text-2xl font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',

  search: 'mt-5 rounded-2xl bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm',

  chip: 'mr-2 rounded-full bg-white px-4 py-2 shadow-sm',
  chipActive: 'bg-neutral-900',
  chipText: 'text-sm text-neutral-700',
  chipTextActive: 'text-sm text-white',

  card: 'mb-4 overflow-hidden rounded-2xl bg-white shadow-sm',
  image: 'h-44 w-full',
  cardBody: 'p-4',
  cardTitle: 'text-lg font-semibold text-neutral-900',
  cardDesc: 'mt-1 text-sm text-neutral-600',

  metaRow: 'mt-3 flex-row gap-2',
  metaPill: 'rounded-full bg-neutral-100 px-3 py-1',
  metaText: 'text-xs font-medium text-neutral-700',

  emptyWrap: 'px-6 pt-10',
  emptyTitle: 'text-base font-semibold text-neutral-900',
  emptyText: 'mt-1 text-sm text-neutral-500',
};

type Category = (typeof CATEGORIES)[number] | 'All';

export default function HomeTab() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');

  const categories: Category[] = useMemo(() => ['All', ...CATEGORIES], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return RECIPES.filter((r) => {
      const matchesQuery =
        !q || r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q);

      const matchesCategory = category === 'All' || r.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  const openRecipe = (recipe: Recipe) => {
    router.push(`/recipe/${recipe.id}`);
  };

  return (
    <View className={styles.screen}>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        ListHeaderComponent={
          <View className={styles.headerWrap}>
            <Text className={styles.title}>Discover recipes</Text>
            <Text className={styles.subtitle}>Search and save your favorites</Text>

            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Search recipes..."
              autoCapitalize="none"
              className={styles.search}
            />

            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
              {categories.map((c) => {
                const active = c === category;
                return (
                  <Pressable
                    key={c}
                    onPress={() => setCategory(c)}
                    className={`${styles.chip} ${active ? styles.chipActive : ''}`}>
                    <Text className={active ? styles.chipTextActive : styles.chipText}>{c}</Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          </View>
        }
        renderItem={({ item }) => (
          <Pressable onPress={() => openRecipe(item)} className={styles.card}>
            <Image source={{ uri: item.imageUrl }} className={styles.image} />
            <View className={styles.cardBody}>
              <Text className={styles.cardTitle}>{item.title}</Text>
              <Text className={styles.cardDesc}>{item.description}</Text>

              <View className={styles.metaRow}>
                <View className={styles.metaPill}>
                  <Text className={styles.metaText}>{item.cookTimeMins} mins</Text>
                </View>
                <View className={styles.metaPill}>
                  <Text className={styles.metaText}>{item.difficulty}</Text>
                </View>
                <View className={styles.metaPill}>
                  <Text className={styles.metaText}>{item.category}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
        ListEmptyComponent={
          <View className={styles.emptyWrap}>
            <Text className={styles.emptyTitle}>No results</Text>
            <Text className={styles.emptyText}>Try a different search term or category.</Text>
          </View>
        }
      />
    </View>
  );
}
