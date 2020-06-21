import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

const Splash = props => {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('SignIn')
        }, 3000);
    }, [])

    return (
        <View>
            <Text>Splash Screen</Text>
        </View>
    )
}

export default Splash
