import { View, Text, ActivityIndicator } from 'react-native';

const styles = {
  container: 'flex-1 items-center justify-center bg-neutral-50 px-6',
  card: 'w-full max-w-sm items-center rounded-2xl bg-white p-6 shadow-sm',
  spinner: 'mt-2',
  title: 'mt-4 text-lg font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500 text-center',
};

export default function AppLoadingScreen() {
  return (
    <View className={styles.container}>
      <View className={styles.card}>
        <ActivityIndicator size="large" color="#171717" className={styles.spinner} />

        <Text className={styles.title}>Loading</Text>
        <Text className={styles.subtitle}>Preparing your recipes…</Text>
      </View>
    </View>
  );
}
