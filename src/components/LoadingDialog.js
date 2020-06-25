import React from 'react'
import { View } from 'react-native'
import { Portal, Dialog, ActivityIndicator, Text } from 'react-native-paper'

const LoadingDialog = props => {

    const {visible, onDismiss, title, description} = props

    return (
        <Portal>
            <Dialog visible={visible} onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <ActivityIndicator />
                    <Text>{description}</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    )
}

export default LoadingDialog
