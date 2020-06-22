import React from 'react'
import { Surface, Button } from 'react-native-paper'
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native'

const SignIn = (props) => {
    const goToHome = () => {
        props.navigation.navigate("Home")        
    }
    StatusBar.setBackgroundColor('#fff')
    StatusBar.setBarStyle('dark-content')
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
                <Button style={styles.button} mode="contained" color="#ea4335" icon="google" onPress={goToHome}>
                    Sign In With Google
                </Button>
                <Button style={styles.button} mode="contained" color="#3b5998" icon="facebook" onPress={goToHome}>
                    Sign In With Facebook
                </Button>
            </View>
        </Surface>
    )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
    },
    image: {
        width: '100%',
        height: 250,
         
        
    },
    button: {
        marginVertical: 10
    }
})
