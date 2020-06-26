import React from 'react';
import firestore from '@react-native-firebase/firestore';

export async function getParkingSpaces() {
    const parking_spaces = []
    const spaces = await firestore().collection('parking_spaces').get();
    spaces.forEach(document => parking_spaces.push({
        ...document.data(),
        id: document.id
    }));

    return parking_spaces
}

export async function getSlots(location_id) {
    const slotArray = []
    const slots = await firestore().collection(`parking_spaces/${location_id}/slots`).where('occupied', '==', false).get();
    slots.forEach(slot => slotArray.push({
        ...slot.data(),
        id: slot.id
    }));

    console.log(slotArray)

    return slotArray
}

export async function addParkingSpaces(parking_spaces) {
    await firestore().collection('parking_spaces').add({...parking_spaces})
}

export async function addSlots(location_id, slotArray) {
    await firestore().collection(`parking_spaces/${location_id}/slots`).add({...slotArray})
}

export async function getParkingSpace(location_id) {
    const parking_space = (await firestore().collection('parking_spaces').doc(location_id).get()).data()
    return parking_space
}

// getSlots('Ogf9P2p73QzSqq5HA0Xx')


// getParkingSpaces()

// addParkingSpaces(parking_spaces)

// addSlots(location_id, slotArray)

