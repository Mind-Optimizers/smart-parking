import React from 'react'
import { View, Image, StatusBar, Text } from 'react-native'

//styles
import { ParkingInfoStyles as styles } from '../styles/ParkingInfoStyles'
import { IconButton, FAB } from 'react-native-paper'
import { primary } from '../constants'


// fetch location data
// import { getParkingSpace } from '../backend/FetchLocations'

import Home from '../screens/Home'


export default ParkingInfo = ({ navigation }) => {

    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("light-content")

    return (
        <View style={ styles.container }>
            <Image 
                source={{uri: 'https://images.unsplash.com/photo-1524214786335-66456317bde6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}}
                style={ styles.thumbnails }
            />
            <IconButton
                icon="chevron-left"
                style={ styles.backBtn }
                color="#fff"
                size={45}
                onPress={() => navigation.goBack()}
            />
            <View style={ styles.locationDetails }>
                <Text style={ styles.locationName }>
                    Location Name
                </Text>
                <Text style={styles.description}>
                    gysgkd fkbaj bmbm bfjsd mfhmdgfh dmhfhm sgjhfghmd ghfg shj gjf gshdgfjsgdjf ghjsgjf gjhsg dfg u4t w yru3 ty7r y83y783y8u93
                </Text>
                <View style={styles.timeContainer}>
                    <Text 
                        style={styles.durationText}
                    >Opening Time: </Text>  
                    <Text style={ { marginBottom: 10 }, styles.timeText }>23:00:56</Text>
                    <Text 
                        style={styles.durationText}
                    >Closing Time: </Text>  
                    <Text style={ styles.timeText }>12:00:34</Text>
                </View>
            </View>
            <FAB
                backgroundColor={primary}
                icon="ticket-confirmation"
                style={styles.bookBtn}
                size={20} 
                label="Book Now"
                onPress={() => console.log("jsdgj")}
            />
        </View>
    )
}
