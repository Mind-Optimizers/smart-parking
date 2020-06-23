import React, {useState} from 'react'
import { View, StyleSheet, StatusBar, Dimensions, TextInput } from 'react-native'
import { Text, Appbar, IconButton } from 'react-native-paper'
import { primary } from '../constants'
import MapView from 'react-native-maps'


const Home = props => {

    StatusBar.setTranslucent(true)
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("dark-content")


    const {navigation} = props;

    const [text, setText] = useState(null)

    return (
        <View style={styles.container}>
             <MapView style={{flex: 1}}/>
            <View style={styles.searchBar}>
                
                <IconButton 
                icon="menu"
                onPress={() => {
                    navigation.openDrawer()
                }}
                color="#5d5d5d"
                />

                <TextInput 
                style={{
                    height: 40,
                    width: '100%',
                    color: '#000'
                }}
                onChangeText={text => setText(text)} 
                placeholder="Search Parking Zones"/>
            </View>
           
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    heading: {
        marginLeft: 10,
        fontSize: 24,
    },
    container: {
        flex: 1,
        
    },
    searchBar:{
        position: "absolute",
        height: 40,
        borderRadius: 6,
        backgroundColor: "#FFF",
        top: 70,
        width: Dimensions.get('window').width - 30,
        elevation: 4,
        padding: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    }    
})

export default Home
