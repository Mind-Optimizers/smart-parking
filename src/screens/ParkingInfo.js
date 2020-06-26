import React, { useState, useRef } from 'react'
import { View, Image, StatusBar, Text, ToastAndroid } from 'react-native'

//styles
import { ParkingInfoStyles as styles } from '../styles/ParkingInfoStyles'
import { IconButton, FAB } from 'react-native-paper'
import { primary, textLight } from '../constants'


// fetch location data
// import { getParkingSpace } from '../backend/FetchLocations'

import LoadingDialog from '../components/LoadingDialog'
import BottomSheet from '../components/BottomSheet'
import { lockSlot, generateSlot } from '../backend/ticket'
import ConfirmationDialog from '../components/ConfirmationDialog'
import { connect } from 'react-redux';

const ParkingInfo = ({ navigation, route, user, currentParking }) => {

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
                onPress={() => {
                    if (currentParking.location_name) {
                        ToastAndroid.show('You already have an active booking.', ToastAndroid.LONG) 
                        return
                    }
                    bottomSheet.current.open()
                }}
            />

            <BottomSheet 
            innerRef={bottomSheet}
            onChoose={async (duration) => {
                bottomSheet.current.close()
                setLoading(true)
                try {
                    const slotId = await lockSlot(data.id, data.rate)
                    console.log(`${slotId} locked`)
                    const {ticket, name} = await generateSlot(data.id, slotId, user.id, duration)
                    navigation.navigate('QRPage', {
                        ticket,
                        name,
                        geo: data.geo_location
                    })
                } catch (error) {
                    console.log(error)
                    if (error && error.message)
                        setError(error.message)
                    else
                        setError('Unexpected error. Please try again later.')
                }
                setLoading(false)
            }}
            />
        </View>
    )
}

export default connect(({user, currentParking}) => ({user, currentParking}))(ParkingInfo)