import React, {useState, useEffect} from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,  DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer as PaperDrawer } from 'react-native-paper';
import { connect } from 'react-redux';
import auth from '@react-native-firebase/auth'
import Splash from './Splash';
import Home from './Home';
import SignIn from './SignIn';
import { loginUser, logoutUser } from '../state/actions';
import { useRoute } from '@react-navigation/native';

import ParkingInfo from '../screens/ParkingInfo'
import ConfirmationDialog from '../components/ConfirmationDialog';
import Profile from './Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const CustomContent = props => {
    const route = useRoute();
    const {user, navigation} = props;
    const [logoutDialog, setLogoutDialog] = useState(false)
    return (
        <DrawerContentScrollView {...props}>

            <ConfirmationDialog 
            visible={logoutDialog}
            title="Logout"
            body="Do you want to logout?"
            positiveText="YES"
            negativeText="CANCEL"
            onAccept={async () => {
                setLogoutDialog(false)
                await auth().signOut()
                props.logoutUser()
                console.log('Accept')
            }}
            onCancel={()=> {
                setLogoutDialog(false)
            }}
            onDismiss={() => {
                setLogoutDialog(false)
            }}
            />

            <View style={{
                
                paddingVertical: 10,
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Image 
                    source={{
                        uri: user.dp
                    }}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25
                    }}
                />
                <Text>{user.name}</Text>
            </View>
            <PaperDrawer.Item 
            icon="home"
            label="Home"
            onPress={() => navigation.navigate('HomeStackNaivgator')}
            active={route.name === 'Home'}
            />
            <PaperDrawer.Item 
            icon="face-profile"
            label="Profile"
            onPress={() => navigation.navigate('Profile')}
            active={route.name === 'Profile'}
            />
            <PaperDrawer.Item 
            icon="logout"
            label="Logout"
            onPress={() => setLogoutDialog(true)}
            />
        </DrawerContentScrollView>
    )
}

const FinDrawer = connect(({user}) => ({user}), {logoutUser})(CustomContent)

const HomeStackNaivgator = props => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen 
            name="Home" 
            component={Home}/>
            <Stack.Screen name="Book" component={ParkingInfo} />
        </Stack.Navigator>
    )
}

const HomeNavigation = props => {
    return (
        <Drawer.Navigator
            drawerContent={_props => <FinDrawer {..._props}/>}
        >

            <Drawer.Screen 
            name="HomeStackNavigator" 
            component={HomeStackNaivgator}/>

            <Drawer.Screen 
            name="Profile" 
            component={Profile}/>
        </Drawer.Navigator>
    )
}

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
                {user.id ? <Stack.Screen 
                    name="Home"
                    component={HomeNavigation}
                    /> : 
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
