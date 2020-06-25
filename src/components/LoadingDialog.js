import React from 'react'
import { View } from 'react-native'
import { Portal, Dialog, ActivityIndicator, Text } from 'react-native-paper'

const LoadingDialog = props => {

    const {visible, onDismiss, title="Loading", description="Please Wait"} = props

    return (
        <Portal>
            <Dialog 
            dismissable={false}
            visible={visible} 
            onDismiss={onDismiss}>
                <Dialog.Title>{title}</Dialog.Title>
                <Dialog.Content style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator size="large"/>
                    <Text style={{
                        marginLeft: 20,
                    }}>{description}</Text>
                </Dialog.Content>
            </Dialog>
        </Portal>
    )
}

export default LoadingDialog
