import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth'
import Splash from './Splash';
import Home from './Home';
import SignIn from './SignIn';
import { loginUser } from '../state/actions';

const Stack = createStackNavigator();

const AppNavigator = props => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            if (user) {
                props.loginUser({
                    name: user.displayName,
                    id: user.uid,
                    email: user.email,
                    dp: user.photoURL
                })
                console.log(props.user)
            }
            if (loading) setLoading(false)
        })

        return unsubscribe
    }, [])

    if (loading) {
        return <Splash />
    }
    const {user} = props;
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                {user.id ?  <Stack.Screen 
                name="Home" 
                component={Home} /> : 
                <Stack.Screen 
                name="SignIn" 
                component={SignIn} />
                }
                
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = ({user}) => ({user})

export default connect(mapStateToProps, {loginUser})(AppNavigator)
