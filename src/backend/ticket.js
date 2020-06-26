import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid'
export const lockSlot = async (loc_id, price=25.00) => {
    const parkingLoc = await firestore().collection(`parking_spaces`).doc(loc_id).get()

    const freeSlots = parkingLoc.data()

    if (freeSlots.slots_occupied < freeSlots.total_slots) {
        const slots = await firestore().collection(`parking_spaces/${loc_id}/slots`).where('occupied', '==', false).where('locked', '==', false).limit(1).get()
        let slot;
        slots.forEach(async s => {
            slot = s.ref
            
            await slot.update({
                locked: true
            });
        })

        if (!slot) {
            throw new Error('No Slots left.')
        }
        await parkingLoc.ref.update({
            slots_occupied: firestore.FieldValue.increment(1)
        })
        console.log(slot.id)
        return slot.id
    } else {
        throw new Error('No Slots found.')
    }
}

export const generateSlot = async (loc_id, slotId, userId) => {
    const slot = await firestore().collection(`parking_spaces/${loc_id}/slots`).doc(slotId)
    const location = (await firestore().collection(`parking_spaces`).doc(loc_id).get()).data()
    const ticket = uuid.v4()
    const slotDoc = (await slot.get()).data()
    
    await slot.update({
        ticket,
        assignedTo: userId,
        assignTime: Date.now()
    })

    const user = await firestore().collection(`users`).doc(userId)

    await user.set({
        current: {
            location: loc_id,
            ticket,
            location_name: location.loc_name,
            location_geo_location:location.geo_location,
            slot_id: slotId,
            name: slotDoc.name
        }
    })

    return {
        ticket, 
        name: slotDoc.name
    }
}