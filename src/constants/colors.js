import { DefaultTheme, configureFonts } from 'react-native-paper';

export const primary = '#6200EE'
export const primaryDark = '#0400ba'
export const red = '#e74c3c'
export const turqoise = '#1abc9c'
export const accent = '#f1c40f'
export const textLight = '#4d4d4d'

const fontConfig = {
    default: {
      regular: {
        fontFamily: 'regular',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'regular',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'regular',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'regular',
        fontWeight: 'normal',
      },
    },
  };
  

export const theme = {
    ...DefaultTheme,
    roundness: 4,
    fonts: configureFonts(fontConfig),
    colors: {
        ...DefaultTheme.colors,
        primary,
        accent,
        text: '#000',
        surface: '#fff'
    }
}

export const getRandomPinColor = () => {
    const colors = [primary, accent, red, turqoise]
    const randIdx = Math.floor(Math.random() * colors.length)
    return colors[randIdx]
}