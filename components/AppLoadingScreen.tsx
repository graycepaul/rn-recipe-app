import { View, Text, ActivityIndicator } from 'react-native';

const styles = {
  container: 'flex-1 items-center justify-center bg-neutral-50 px-6',
  card: 'w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm items-center',
  title: 'text-lg font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',
};

export default function AppLoadingScreen() {
  return (
    <View className={styles.container}>
      <View className={styles.card}>
        <ActivityIndicator size="large" color="#171717" />

        <Text className={`${styles.title} mt-4`}>Loading</Text>

        <Text className={styles.subtitle}>Preparing your session…</Text>
      </View>
    </View>
  );
}
