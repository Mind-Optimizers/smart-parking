import React, { useEffect, useState } from 'react'
import { View, Image, StatusBar } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

//styles
import { splashScreenStyles as styles } from '../styles/SplashScreenStyles'

import AppLogo from '../constants/applogo'

const Splash = props => {


    StatusBar.setBarStyle('light-content')

    return (
        <View style={styles.container}>
            <AppLogo width="150" height="200"/>
            <ActivityIndicator color="#834293" size="large" style={ styles.loader } />
        </View>
    )
}

export default Splash
