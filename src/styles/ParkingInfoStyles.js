import React from 'react'
import { StyleSheet } from 'react-native'
import { primary, textLight } from '../constants'

export const ParkingInfoStyles = StyleSheet.create({
    thumbnails: {
        width: '100%',
        flex: 1,
        borderBottomRightRadius: 45
    },
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    locationDetails: {
        display: 'flex',
        flex: 3,
        marginTop: 40,
        width: '100%',
    },
    description: {
        textAlign: 'left',
        
        fontSize: 20,
        marginHorizontal: 20,
        color: textLight,
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
        fontWeight: '500',
        color: textLight,
    },
    durationText: {
        fontWeight: '500',
        width: '100%',
        fontSize: 20,
        fontWeight: '500',
        color: textLight,
    },
    timeText: {
        fontSize: 16,
        fontWeight: '400',
        color: textLight,
    },
    timeContainer: {
        width: '100%',
        height: 200,
        margin: 20,
        color: textLight,
    },
    bookBtn: {
        position: 'absolute',
        fontSize: 20,
        padding: 4,
        bottom: 20,
        right: 20,
        position: 'absolute',
        color: '#000',
        zIndex: 21,
        backgroundColor: primary
    },
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 0,
    }
})