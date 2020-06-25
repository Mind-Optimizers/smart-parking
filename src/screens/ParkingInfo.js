import React from 'react'
import { View, Image, StatusBar, Text } from 'react-native'

//styles
import { ParkingInfoStyles as styles } from '../styles/ParkingInfoStyles'
import { IconButton, FAB } from 'react-native-paper'
import { primary } from '../constants'


// fetch location data
// import { getParkingSpace } from '../backend/FetchLocations'

import Home from '../screens/Home'


export default ParkingInfo = ({ navigation, route }) => {

    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("light-content")

    const data = route.params

    return (
        <View style={ styles.container }>
            <Image 
                source={{uri: data.thumbnail}}
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
                    {data.loc_name}
                </Text>
                <Text style={styles.description}>
                    gysgkd fkbaj bmbm bfjsd mfhmdgfh dmhfhm sgjhfghmd ghfg shj gjf gshdgfjsgdjf ghjsgjf gjhsg dfg u4t w yru3 ty7r y83y783y8u93
                </Text>
                <View style={styles.timeContainer}>
                    <Text 
                        style={styles.durationText}
                    >Opening Time: </Text>  
                    <Text style={ { marginBottom: 10 }, styles.timeText }>{data.open_time}</Text>
                    <Text 
                        style={styles.durationText}
                    >Closing Time: </Text>  
                    <Text style={ styles.timeText }>{data.close_time}</Text>
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
