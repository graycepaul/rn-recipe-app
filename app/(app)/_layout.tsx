import { useAuth } from 'context/AuthContext';
import { Redirect, Slot } from 'expo-router';

export default function AppLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Slot />;
}
