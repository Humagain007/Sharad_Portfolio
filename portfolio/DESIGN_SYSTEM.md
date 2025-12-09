# Portfolio Design System
## Color Scheme & Theme Guide for React Native Replication

---

## 🎨 Color Palette

### Primary Colors
```javascript
primary: '#6366f1'      // Indigo - Main brand color
secondary: '#8b5cf6'    // Purple - Accent color
```

### Background Colors
```javascript
darker: '#020617'       // Slate-950 - Main background
dark: '#0f172a'         // Slate-900 - Section backgrounds
darkAlt: '#1e293b'      // Slate-800 - Card backgrounds
```

### Text Colors
```javascript
textPrimary: '#ffffff'      // White - Headings
textSecondary: '#e2e8f0'    // Slate-200 - Body text
textMuted: '#94a3b8'        // Slate-400 - Muted text
```

### Accent Colors
```javascript
success: '#10b981'      // Green
error: '#ef4444'        // Red
warning: '#f59e0b'      // Amber
info: '#3b82f6'         // Blue
```

### Gradient Combinations
```javascript
// Primary gradient
from: '#6366f1' to: '#8b5cf6'

// Service card gradients
blue: from: '#3b82f6' to: '#06b6d4'
purple: from: '#8b5cf6' to: '#ec4899'
orange: from: '#f97316' to: '#ef4444'
green: from: '#10b981' to: '#059669'
```

---

## 🎭 Design Elements

### Glassmorphism Effect
```css
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(16px)
border: 1px solid rgba(255, 255, 255, 0.1)
border-radius: 16px
```

**React Native equivalent:**
```javascript
{
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 16,
  // Use react-native-blur or expo-blur for backdrop effect
}
```

### Gradient Text
```css
background: linear-gradient(to right, #6366f1, #8b5cf6)
-webkit-background-clip: text
-webkit-text-fill-color: transparent
```

**React Native equivalent:**
```javascript
// Use react-native-linear-gradient with MaskedView
import LinearGradient from 'react-native-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'

<MaskedView maskElement={<Text>Your Text</Text>}>
  <LinearGradient colors={['#6366f1', '#8b5cf6']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
    <Text style={{opacity: 0}}>Your Text</Text>
  </LinearGradient>
</MaskedView>
```

---

## 📐 Spacing System

```javascript
spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
  '3xl': 64,
}
```

---

## 🔤 Typography

### Font Family
```javascript
fontFamily: 'Inter'  // Google Font
// Fallback: system-ui, -apple-system, sans-serif
```

**React Native:**
```javascript
// Install: expo install expo-font @expo-google-fonts/inter
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
```

### Font Sizes
```javascript
fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '7xl': 72,
}
```

### Font Weights
```javascript
fontWeight = {
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
}
```

---

## 🎬 Animation Principles

### Timing Functions
```javascript
easing = {
  easeOut: [0.4, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
}
```

### Animation Durations
```javascript
duration = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 800,
}
```

### Common Animations

**Fade In Up:**
```javascript
initial: { opacity: 0, y: 50 }
animate: { opacity: 1, y: 0 }
transition: { duration: 0.8 }
```

**Scale on Hover:**
```javascript
whileHover: { scale: 1.05, y: -5 }
transition: { duration: 0.3 }
```

**Pulse Effect:**
```javascript
animate: { scale: [1, 1.05, 1] }
transition: { repeat: Infinity, duration: 2 }
```

**React Native equivalent (using react-native-reanimated):**
```javascript
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

const animatedStyle = useAnimatedStyle(() => ({
  opacity: withTiming(1, { duration: 800 }),
  transform: [{ translateY: withSpring(0) }],
}))
```

---

## 🎯 Component Patterns

### Card Component
```javascript
{
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: 16,
  padding: 24,
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  // Shadow for depth
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 8, // Android
}
```

### Button Primary
```javascript
{
  backgroundColor: '#6366f1',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 9999, // Fully rounded
  // Gradient version: use LinearGradient
  colors: ['#6366f1', '#8b5cf6'],
}
```

### Button Secondary (Glass)
```javascript
{
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  paddingVertical: 12,
  paddingHorizontal: 32,
  borderRadius: 9999,
}
```

---

## 🌊 Background Effects

### Animated Blobs
```javascript
// Floating gradient circles with blur and pulse animation
{
  position: 'absolute',
  width: 384,
  height: 384,
  backgroundColor: 'rgba(99, 102, 241, 0.2)',
  borderRadius: 9999,
  blur: 96, // Use react-native-blur
  // Animate position and scale
}
```

### Gradient Overlay
```javascript
// Use LinearGradient
colors={['rgba(99, 102, 241, 0.9)', 'rgba(139, 92, 246, 0.9)']}
start={{x: 0, y: 0}}
end={{x: 1, y: 1}}
```

---

## 📱 React Native Package Recommendations

```bash
# Core animation
npm install react-native-reanimated

# Gestures
npm install react-native-gesture-handler

# Gradients
npm install react-native-linear-gradient

# Blur effects
npm install @react-native-community/blur

# Icons
npm install react-native-vector-icons

# Fonts
expo install expo-font @expo-google-fonts/inter

# Navigation (if needed)
npm install @react-navigation/native
```

---

## 🎨 Complete Theme Object for React Native

```javascript
export const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    background: {
      darker: '#020617',
      dark: '#0f172a',
      card: '#1e293b',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e2e8f0',
      muted: '#94a3b8',
    },
    border: 'rgba(255, 255, 255, 0.1)',
    glass: 'rgba(255, 255, 255, 0.05)',
    gradients: {
      primary: ['#6366f1', '#8b5cf6'],
      blue: ['#3b82f6', '#06b6d4'],
      purple: ['#8b5cf6', '#ec4899'],
      orange: ['#f97316', '#ef4444'],
      green: ['#10b981', '#059669'],
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 9999,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
}
```

---

## 🎯 Key Design Principles

1. **Dark Theme First** - Deep slate backgrounds with subtle lighting
2. **Glassmorphism** - Frosted glass effect for cards and overlays
3. **Gradient Accents** - Indigo to purple gradients for emphasis
4. **Smooth Animations** - Fade, slide, and scale transitions
5. **Minimalist** - Clean layouts with generous whitespace
6. **Depth Through Blur** - Layered blur effects for visual hierarchy
7. **Rounded Corners** - Soft, modern feel with 16px+ radius
8. **Hover States** - Scale up and lift on interaction

---

## 💡 Usage Example in React Native

```javascript
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { BlurView } from '@react-native-community/blur'

const GlassCard = ({ children }) => (
  <BlurView blurType="dark" blurAmount={10} style={styles.card}>
    <View style={styles.cardInner}>
      {children}
    </View>
  </BlurView>
)

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  cardInner: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 24,
  },
})
```

---

This design system maintains consistency across web and mobile platforms while adapting to each platform's capabilities.
