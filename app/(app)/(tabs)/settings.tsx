import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

const styles = {
  screen: 'flex-1 bg-neutral-50 px-6 pt-6',
  card: 'w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm',

  title: 'text-2xl font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',

  section: 'mt-8',
  sectionTitle: 'text-sm font-medium text-neutral-700 mb-2',

  row: 'flex-row items-center justify-between rounded-xl bg-neutral-100 px-4 py-3 mb-2',
  rowText: 'text-sm text-neutral-800',
  rowHint: 'text-xs text-neutral-500',

  infoText: 'text-sm text-neutral-600',

  dangerButton: 'mt-8 items-center rounded-xl bg-red-600 px-4 py-3',
  dangerText: 'text-sm font-medium text-white',
};

export default function SettingsTab() {
  const { logout } = useAuth();

  return (
    <View className={styles.screen}>
      <View className={styles.card}>
        <Text className={styles.title}>Settings</Text>
        <Text className={styles.subtitle}>Manage your preferences and account</Text>

        {/* Profile */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>Profile</Text>

          <View className={styles.row}>
            <Text className={styles.rowText}>User</Text>
            <Text className={styles.rowHint}>Demo Account</Text>
          </View>

          <View className={styles.row}>
            <Text className={styles.rowText}>Email</Text>
            <Text className={styles.rowHint}>demo@cookbook.app</Text>
          </View>
        </View>

        {/* Preferences */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>Preferences</Text>

          <View className={styles.row}>
            <Text className={styles.rowText}>Theme</Text>
            <Text className={styles.rowHint}>System default</Text>
          </View>

          <View className={styles.row}>
            <Text className={styles.rowText}>Measurement units</Text>
            <Text className={styles.rowHint}>Metric</Text>
          </View>
        </View>

        {/* Data */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>Data</Text>

          <View className={styles.row}>
            <Text className={styles.rowText}>Saved recipes</Text>
            <Text className={styles.rowHint}>Stored locally</Text>
          </View>

          <Text className={styles.infoText}>
            Your favorites are stored on this device and are not synced.
          </Text>
        </View>

        {/* About */}
        <View className={styles.section}>
          <Text className={styles.sectionTitle}>About</Text>

          <View className={styles.row}>
            <Text className={styles.rowText}>App</Text>
            <Text className={styles.rowHint}>Cookbook</Text>
          </View>

          <View className={styles.row}>
            <Text className={styles.rowText}>Version</Text>
            <Text className={styles.rowHint}>1.0.0</Text>
          </View>
        </View>

        {/* Account */}
        <Pressable onPress={logout} className={styles.dangerButton}>
          <Text className={styles.dangerText}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}
