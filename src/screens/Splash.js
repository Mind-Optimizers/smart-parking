import React, { useEffect, useState } from 'react'
import { View, Image } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

//styles
import { splashScreenStyles as styles } from '../styles/SplashScreenStyles'

import AppLogo from '../constants/applogo'

const Splash = props => {

    // useEffect(() => {
    //     setTimeout(() => {
    //         props.navigation.navigate('SignIn')
    //     }, 3000);
    // }, [])

    return (
        <View style={styles.container}>
            <AppLogo width="150" height="200"/>
            <ActivityIndicator color="#834293" size="large" style={ styles.loader } />
        </View>
    )
}

export default Splash
