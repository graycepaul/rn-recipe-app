import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from 'constants/storage';

type User = {
  id: string;
};

type AuthContextType = {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isReady: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  // 🔹 Bootstrap auth from storage
  useEffect(() => {
    const bootstrap = async () => {
      try {
        // ⏳ ARTIFICIAL DELAY — confirm splash/loading screen
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const storedUser = await AsyncStorage.getItem(STORAGE_KEYS.USER);

        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.warn('Failed to restore auth', e);
      } finally {
        setIsReady(true);
      }
    };

    bootstrap();
  }, []);

  const login = async () => {
    const newUser = { id: '1' };
    setUser(newUser);
    await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem(STORAGE_KEYS.USER);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isReady }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return ctx;
}
