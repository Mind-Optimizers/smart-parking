import React from 'react'
import { StyleSheet } from 'react-native'
import { primary } from '../constants'

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
        height: '60%',
        marginTop: -60
    },
    description: {
        width: '100%',
        textAlign: 'left',
        height: 100,
        fontSize: 20,
        marginHorizontal: 20
    },
    locationName: {
        textAlign: 'left',
        marginHorizontal: 20,
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 10
    },
    locationAddress: {
        textAlign: 'left',
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 40,
        fontWeight: '500'
    },
    durationText: {
        fontWeight: '500',
        width: '100%',
        fontSize: 20,
        fontWeight: '500'
    },
    timeText: {
        fontSize: 16,
        fontWeight: '400'
    },
    timeContainer: {
        width: '100%',
        height: 200,
        margin: 20
    },
    bookBtn: {
        position: 'absolute',
        fontSize: 20,
        padding: 4,
        left: '52%',
        top: '86%',
        position: 'absolute',
        color: '#000',
        zIndex: 21,
        backgroundColor: primary
    },
    backBtn: {
        position: 'absolute',
        top: 2,
        left: 2
    }
})