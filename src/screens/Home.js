import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'
import { Text, Appbar } from 'react-native-paper';
import { primary } from '../constants';

const Home = () => {

    StatusBar.setBackgroundColor(primary)

    return (
        <View>
            <Appbar>
                <Text style={styles.heading}>Home</Text>
            </Appbar>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginLeft: 10,
        fontSize: 24,
    }    
})

export default Home
