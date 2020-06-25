import React from 'react'
import { StyleSheet } from 'react-native'

export const ParkingInfoStyles = StyleSheet.create({
    thumbnails: {
        width: '100%',
        height: '30%',
        borderBottomRightRadius: 45
    },
    container: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        height: 805,
        backgroundColor: '#fff'
    },
    locationDetails: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: 600
    },
    description: {
        width: '100%',
        textAlign: 'left',
        height: 100,
        fontSize: 20,
        margin: 20
    },
    locationName: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 40,
        fontWeight: '600'
    },
    locationAddress: {
        textAlign: 'left',
        marginLeft: 20,
        marginTop: 20,
        fontSize: 40,
    },
    durationText: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        fontWeight: '500',
        width: '100%',
        height: 40
    },
    timeText: {
        fontSize: 16,
        fontWeight: '400'
    },
    bookBtnText: {
        fontSize: 20,
        marginLeft: 30
    },
    timeContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: 200,
        margin: 20
    },
    bookBtn: {
        display: 'none',
        fontSize: 20,
        borderRadius: 6,
        padding: 4,
        left: '80%',
        top: '70%',
        position: 'absolute',
        color: '#000',
        zIndex: 21
    },
    backBtn: {
        position: 'absolute',
        left: 20,
        top: 60
    }
})