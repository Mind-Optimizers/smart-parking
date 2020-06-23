import { DefaultTheme } from 'react-native-paper';

export const primary = '#6200EE'
export const primaryDark = '#0400ba'

export const accent = '#f1c40f'

export const theme = {
    ...DefaultTheme,
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary,
        accent,
        text: '#000',
        surface: '#fff'
    }
}