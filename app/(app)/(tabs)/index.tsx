import { View, Text } from 'react-native';

const styles = {
  title: 'text-2xl font-semibold text-neutral-900',
  body: 'mt-2 text-sm text-neutral-600',
  feature: 'text-sm text-neutral-500',
  footer: 'mt-6 text-xs text-neutral-400',
};

export default function HomeTab() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-50 px-6">
      <View className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
        <Text className={styles.title}>Expo RN Template</Text>

        <Text className={styles.body}>
          This project is a starter template built with Expo, Expo Router, and NativeWind.
        </Text>

        <View className="mt-4 space-y-2">
          <Text className={styles.feature}>• Auth / App route separation</Text>
          <Text className={styles.feature}>• Persistent authentication state</Text>
          <Text className={styles.feature}>• Splash and readiness gating</Text>
          <Text className={styles.feature}>• Tab-based navigation</Text>
          <Text className={styles.feature}>• NativeWind styling</Text>
        </View>

        <Text className={styles.footer}>
          You can safely remove or replace this screen when starting a new project.
        </Text>
      </View>
    </View>
  );
}
