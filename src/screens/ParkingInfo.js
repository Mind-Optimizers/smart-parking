import React, { useState, useRef } from 'react'
import { View, Image, StatusBar, Text } from 'react-native'

//styles
import { ParkingInfoStyles as styles } from '../styles/ParkingInfoStyles'
import { IconButton, FAB } from 'react-native-paper'
import { primary, textLight } from '../constants'


// fetch location data
// import { getParkingSpace } from '../backend/FetchLocations'

import Home from '../screens/Home'
import LoadingDialog from '../components/LoadingDialog'
import BottomSheet from '../components/BottomSheet'
import { lockSlot } from '../backend/ticket'
import ConfirmationDialog from '../components/ConfirmationDialog'


export default ParkingInfo = ({ navigation, route }) => {

    StatusBar.setBackgroundColor('transparent')
    StatusBar.setBarStyle("light-content")



    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const data = route.params

    const bottomSheet = useRef()

    return (
        <View style={ styles.container }>
            <Image 
                source={{uri: data.thumbnail}}
                style={ styles.thumbnails }
            />
            <ConfirmationDialog 
                visible={!!error}
                positiveText="OK"
                onDismiss={() => setError(null)}
                title="Error" 
                body={error} 
                noCancel
                onAccept={() => setError(null)} 
            />
            <LoadingDialog 
            visible={loading}
            title="Checking Availability"
            onDismiss={() => setLoading(false)}
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
                   {data.description}
                </Text>
                <Text style={{
                    marginHorizontal: 20,
                    color: textLight,
                    fontSize: 20,
                    marginTop: 20,
                }}>Slots Available: {data.total_slots - data.slots_occupied}</Text>
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
                onPress={() => bottomSheet.current.open()}
            />

            <BottomSheet 
            innerRef={bottomSheet}
            onChoose={async () => {
                bottomSheet.current.close()
                setLoading(true)
                try {
                    const slotId = await lockSlot(data.id, data.rate)
                    console.log(`${slotId} locked`)
                    console.log(``)
                } catch (error) {
                    console.log(error)
                    setError(error.message)
                }
                setLoading(false)
            }}
            />
        </View>
    )
}
