# React Native Expo Template

A reusable React Native template built with **Expo**, **Expo Router**, and **NativeWind**, focused on **structure, navigation, and state**, not design opinions.

This template is intended to be cloned and adapted for multiple projects.

---

## ✨ Features

- Expo SDK
- Expo Router (file-based navigation)
- Auth vs App route separation
- Persistent authentication (AsyncStorage)
- App readiness / splash gate
- Tabs navigation
- NativeWind (Tailwind-style utilities)
- Web + iOS + Android support
- Clean, predictable project structure
- No enforced UI design system

---

## 📁 Project Structure

```text
app/
  _layout.tsx          # Root layout (providers + splash gate)
  index.tsx            # Entry guard (auth vs app)
  (auth)/              # Authentication flow
    login.tsx
  (app)/               # Protected app routes
    _layout.tsx        # App-level auth guard
    (tabs)/            # Bottom tabs
      _layout.tsx
      index.tsx
      settings.tsx

components/            # Reusable components (project-specific)
context/               # React context (auth, etc.)
constants/             # App constants (storage keys, etc.)
assets/                # Images, icons, splash
global.css             # NativeWind styles
```

---

## 🚀 Getting Started

Install dependencies:

```bash
npm install
npx expo start


```
