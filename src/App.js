import React from 'react'
import AppNavigator from './screens'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import { theme, primaryDark } from './constants';
import { StatusBar } from 'react-native';
import { persistor, store } from './state'
import { PersistGate } from 'redux-persist/integration/react'
import RNLocation from 'react-native-location'

const App = () => {
	StatusBar.setBackgroundColor(primaryDark)

	return (
		<Provider store={store}> 
			<PersistGate persistor={persistor}>
				<PaperProvider theme={theme}>
					<AppNavigator />
				</PaperProvider>
			</PersistGate>
		</Provider>
	)
}

export default App