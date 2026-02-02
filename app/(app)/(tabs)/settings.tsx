import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../../context/AuthContext';

export default function SettingsTab() {
  const { logout } = useAuth();

  return (
    <View className="flex-1 items-center justify-center bg-neutral-50 px-6">
      <View className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
        <Text className="text-2xl font-semibold text-neutral-900">Settings</Text>

        <Text className="mt-1 text-sm text-neutral-500">Manage your account</Text>

        <Pressable onPress={logout} className="mt-6 items-center rounded-xl bg-red-600 px-4 py-3">
          <Text className="text-sm font-medium text-white">Log out</Text>
        </Pressable>
      </View>
    </View>
  );
}
