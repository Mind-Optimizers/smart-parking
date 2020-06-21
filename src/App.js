import React from 'react'
import AppNavigator from './screens'
import { Provider as PaperProvider } from 'react-native-paper';
import { theme, primaryDark } from './constants';
import { StatusBar } from 'react-native';

const App = () => {
	StatusBar.setBackgroundColor(primaryDark)
	return (
		<PaperProvider theme={theme}>
		    <AppNavigator />
		</PaperProvider>
	)
}

export default App