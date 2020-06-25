import React from 'react'
import { View, Image, Text, StatusBar } from 'react-native'

//styles
import { ParkingInfoStyles as styles } from '../styles/ParkingInfoStyles'
import { IconButton } from 'react-native-paper'

// fetch location data
// import { getParkingSpace } from '../backend/FetchLocations'

import Home from '../screens/Home'

export default ParkingInfo = () => {
    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("light-content")
    return (
        <View style={ styles.container }>
            <IconButton
                color="#fff"
                icon="chevron-left"
                style={ styles.backBtn }
                size={40}
            />
            <Image 
                source={{uri: 'https://images.unsplash.com/photo-1524214786335-66456317bde6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}}
                style={ styles.thumbnails }
            />
            <View style={ styles.locationDetails }>
                <Text style={ styles.locationName }>
                    Location Name
                </Text>
                <Text style={styles.description}>
                    gysgkd fkbaj bmbm bfjsd mfhmdgfh dmhfhm sgjhfghmd ghfg shj gjf gshdgfjsgdjf ghjsgjf gjhsg dfg u4t w yru3 ty7r y83y783y8u93
                </Text>
                <View style={styles.timeContainer}>
                    <View style={styles.durationText}>
                        <Text style={ styles.timeText }>Opening Time: </Text>  
                        <Text style={ styles.timeText }>23:00:56</Text>
                    </View>
                    <View style={styles.durationText}>
                        <Text style={ styles.timeText }>Closing Time: </Text>  
                        <Text style={ styles.timeText }>12:00:34</Text>
                    </View>
                </View>
            </View>
            {/* <IconButton 
                color="#786372"
                icon="ticket-confirmation"
                style={styles.bookBtn}
                size={20}
            >
                <Text style={styles.bookBtnText}>
                    Book Now
                </Text>
            </IconButton> */}
        </View>
    )
}
