import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useStore } from '../store/StoreContext'

function Notifications() {
    const { store, setStore } = useStore()

    return (
        <View style={styles.container}>
            <Text>Notifications!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Notifications
