import { ScrollView, View, Text, Image, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { RECIPES } from 'constants/recipes';
import { useFavorites } from 'hooks/useFavorites';

const styles = {
  screen: 'flex-1 bg-neutral-50',
  image: 'h-64 w-full',
  content: 'px-6 py-6',

  title: 'text-2xl font-semibold text-neutral-900',
  description: 'mt-2 text-sm text-neutral-600',

  metaRow: 'mt-4 flex-row gap-2',
  metaPill: 'rounded-full bg-neutral-100 px-3 py-1',
  metaText: 'text-xs font-medium text-neutral-700',

  section: 'mt-8',
  sectionTitle: 'text-lg font-semibold text-neutral-900',

  listItem: 'mt-3 flex-row',
  bullet: 'mr-3 text-neutral-400',
  itemText: 'flex-1 text-sm text-neutral-700',

  stepNumber: 'mr-3 h-6 w-6 items-center justify-center rounded-full bg-neutral-900',
  stepNumberText: 'text-xs font-semibold text-white',

  button: 'mt-10 items-center rounded-xl bg-neutral-900 px-4 py-3',
  buttonText: 'text-sm font-medium text-white',
};

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const recipe = RECIPES.find((r) => r.id === id);

  const { favorites, save, remove } = useFavorites();
  const isSaved = recipe ? favorites.includes(recipe.id) : false;

  if (!recipe) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Recipe not found</Text>
        <Pressable onPress={() => router.back()}>
          <Text className="mt-4 text-neutral-600">Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView className={styles.screen}>
      <Image source={{ uri: recipe.imageUrl }} className={styles.image} />

      <View className={styles.content}>
        <Text className={styles.title}>{recipe.title}</Text>
        <Text className={styles.description}>{recipe.description}</Text>

        <View className={styles.metaRow}>
          <View className={styles.metaPill}>
            <Text className={styles.metaText}>{recipe.cookTimeMins} mins</Text>
          </View>
          <View className={styles.metaPill}>
            <Text className={styles.metaText}>{recipe.difficulty}</Text>
          </View>
          <View className={styles.metaPill}>
            <Text className={styles.metaText}>{recipe.category}</Text>
          </View>
        </View>

        {/* Ingredients */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>Ingredients</Text>

          {recipe.ingredients.map((item) => (
            <View key={item} className={styles.listItem}>
              <Text className={styles.bullet}>•</Text>
              <Text className={styles.itemText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Steps */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>Steps</Text>

          {recipe.steps.map((step, index) => (
            <View key={`${recipe.id}-${index}`} className={styles.listItem}>
              <View className={styles.stepNumber}>
                <Text className={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text className={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>

        {/* Save button */}
        <Pressable
          className={styles.button}
          onPress={() => (isSaved ? remove(recipe.id) : save(recipe.id))}>
          <Text className={styles.buttonText}>
            {isSaved ? 'Remove from favorites' : 'Save recipe'}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
