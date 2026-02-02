import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from 'context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    await login();
    router.replace('/(app)');
  };

  return (
    <View className="flex-1 items-center justify-center bg-neutral-50 px-6">
      <View className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm">
        <Text className="text-2xl font-semibold text-neutral-900">Welcome back</Text>

        <Text className="mt-1 text-sm text-neutral-500">Sign in to continue</Text>

        <Pressable
          onPress={handleLogin}
          className="mt-6 items-center rounded-xl bg-neutral-900 px-4 py-3">
          <Text className="text-sm font-medium text-white">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
