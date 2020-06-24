import React from 'react';
import firestore from '@react-native-firebase/firestore';



export async function getParkingSpaces() {
    const parking_spaces = []
    const spaces = await firestore().collection('parking_spaces').get();
    spaces.forEach(document => parking_spaces.push({
        ...document.data(),
        id: document.id
    }));

    // console.log(parking_spaces)

    return parking_spaces
}

export async function getSlots(location_id) {
    const slotArray = []
    const slots = await firestore().collection(`parking_spaces/${location_id}/slots`).get();
    slots.forEach(slot => slotArray.push({
        ...slot.data(),
        id: slot.id
    }));

    console.log(slotArray)

    return slotArray
}

getSlots('Ogf9P2p73QzSqq5HA0Xx')

getParkingSpaces()