import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Text, Appbar } from 'react-native-paper'
import { primary } from '../constants'
import MapView from 'react-native-maps'
import { TextInput } from 'react-native'

const Home = () => {

    StatusBar.setTranslucent(true)
    StatusBar.setBarStyle("dark-content")

    return (
        <View style={styles.container}>
            <View style={{marginHorizontal: 20}}>
                <TextInput style={styles.searchBar} onChangeText={text => onChangeText(text)} placeholder="Search Parking Zone" />
            </View>
            <MapView style={{flex: 1}}/>
            
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
        borderRadius: 200,
        backgroundColor: "#FFF",
        top: 70,
        width: "100%",
        elevation: 4,
        padding: 10,
    
    }    
})

export default Home
