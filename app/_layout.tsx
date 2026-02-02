import '../global.css';
import { Slot } from 'expo-router';
import AppLoadingScreen from 'components/AppLoadingScreen';
import { AuthProvider, useAuth } from 'context/AuthContext';

function AppContent() {
  const { isReady } = useAuth();

  if (!isReady) {
    return <AppLoadingScreen />;
  }

  return <Slot />;
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
