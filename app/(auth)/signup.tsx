import { View, Text, Pressable, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

const styles = {
  container: 'flex-1 items-center justify-center bg-neutral-50 px-6',
  card: 'w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm',
  title: 'text-2xl font-semibold text-neutral-900',
  subtitle: 'mt-1 text-sm text-neutral-500',
  input: 'mt-4 rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900',
  button: 'mt-6 items-center rounded-xl bg-neutral-900 px-4 py-3',
  buttonText: 'text-sm font-medium text-white',
  link: 'mt-4 text-center text-sm text-neutral-600',
  linkHighlight: 'font-medium text-neutral-900',
};

export default function Signup() {
  const router = useRouter();

  return (
    <View className={styles.container}>
      <View className={styles.card}>
        <Text className={styles.title}>Create account</Text>
        <Text className={styles.subtitle}>Sign up to start saving recipes</Text>

        <TextInput placeholder="Name" className={styles.input} />

        <TextInput
          placeholder="Email address"
          keyboardType="email-address"
          autoCapitalize="none"
          className={styles.input}
        />

        <TextInput placeholder="Password" secureTextEntry className={styles.input} />

        <Pressable onPress={() => router.replace('/login')} className={styles.button}>
          <Text className={styles.buttonText}>Create account</Text>
        </Pressable>

        <Pressable onPress={() => router.back()}>
          <Text className={styles.link}>
            Already have an account? <Text className={styles.linkHighlight}>Sign in</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
