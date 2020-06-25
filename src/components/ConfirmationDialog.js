import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Portal, Dialog, Button, Paragraph } from 'react-native-paper'

const ConfirmationDialog = props => {

    const {title, body, onCancel, onAccept, onDismiss, visible,
        noCancel,
    positiveText,
    negativeText
    } = props

    return (
        <Portal>
            <Dialog
            visible={visible}
            onDismiss={onDismiss}
            >
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{body}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    {!noCancel && <Button onPress={onCancel}>{negativeText}</Button>}
                    <Button onPress={onAccept}>{positiveText}</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    )
}

export default ConfirmationDialog
