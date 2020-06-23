import React from 'react'
import { Surface, Button } from 'react-native-paper'
import { Text, View, Image, StatusBar } from 'react-native'

//styles
import { authPageStyles as styles } from '../styles/AuthPageStyles'

//auth
import {onGoogleButtonPress, onFacebookButtonPress} from '../backend/AuthLogin'



const SignIn = (props) => {
    StatusBar.setBackgroundColor('#fff')
    StatusBar.setBarStyle('dark-content')

    const goToHome = () => {
        props.navigation.navigate("Home")
    }

    return (
        <Surface style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Image 
                    style={styles.image}
                    source={require('../../assets/images/signup.png')}
                />
                <Text style={{
                    margin: 20,
                    fontSize: 20,
                    textAlign: 'center',
                    fontWeight: 'bold',
                }}>Welcome to a revolutionary way to park your vehicles</Text>
            </View>
            <View style={{
                marginHorizontal: 20,
            }}> 
                <Button style={styles.button} mode="contained" color="#ea4335" icon="google" onPress={() => onGoogleButtonPress().then(goToHome)}>
                    Sign In With Google
                </Button>
                <Button style={styles.button} mode="contained" color="#3b5998" icon="facebook" onPress={() => onFacebookButtonPress().then(goToHome)}>
                    Sign In With Facebook
                </Button>
            </View>
        </Surface>
    )
}

export default SignIn
