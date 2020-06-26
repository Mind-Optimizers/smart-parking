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
    parking:{
        height:50,
        width:'50%'
    
    },
    icon:{
        padding:15,
        marginLeft:'15%',
        fontFamily:'bold',
    },
    slots:{
        position:"absolute",
        marginLeft:'35%',
        marginTop:15,
        color:primary,
        fontSize:17,
        fontFamily:'bold',
    },
    des:{
        fontFamily:'bold',
        marginHorizontal:20,
        marginTop:'9%',
        fontSize: 19,
    },
    description: {
        textAlign: 'justify',
        fontSize: 17,
        marginHorizontal:20,
        color: textLight,
    },
    locationName: {
        textAlign: 'left',
        paddingLeft:20,
        paddingVertical:10,
        fontSize: 40,
        fontWeight: '700',
        marginBottom: 15,
    },
    locationAddress: {
        textAlign: 'left',
        marginHorizontal: 20,
        marginTop: 20,
        fontSize: 40,
        fontWeight: '500',
        color: textLight,
    },
    both:{
        flex: 1,
        flexDirection: 'row',
    },
    durationText: {
        margin:15,
        color: primary,
        fontFamily:'bold',
    },
    timeText: {
        position:"absolute",
        fontFamily:'bold',
        margin:15,
        alignSelf:"center",
        color:primary,
        paddingLeft:7
    },
    timeContainer: {
        position:"absolute",
        width:'50%',
        left:'50%',
        textAlign:"center",
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
        backgroundColor: primary,
    },
    backBtn: {
        position: 'absolute',
        top: 20,
        left: 0,
    }
})