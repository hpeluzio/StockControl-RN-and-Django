import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useStore } from '../store/StoreContext'

function ProductItem(props) {
    const { store, setStore } = useStore()

    function handleDeletePress() {
        Alert.alert(
            // 'Atenção',
            'Caution',
            // 'Você tem certeza que deseja excluir este item?',
            'Are you sure to delete this item?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => {
                        // console.log('DELETED')
                        let newStore = [...store]
                        newStore.map((product, index) => {
                            // console.log('product: ', product)
                            if (props.id == product.id) {
                                // console.log('index: ', index)
                                newStore.splice(index, 1)
                            }
                        })
                        setStore(newStore)
                    },
                },
            ],
            { cancelable: false }
        )
    }

    function handleEditPress() {
        // const item = await Database.getItem(props.id)
        props.navigation.navigate('ProductForm', {
            id: props.id,
            description: props.description,
            quantity: props.quantity,
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.description}</Text>
            <Text style={styles.textItem}>{props.quantity}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={handleDeletePress}
                >
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.editButton}
                    onPress={handleEditPress}
                >
                    <Icon name="edit" color="white" size={18} />
                    {/* <Text style={styles.buttonText} onPress={handleEditPress}>
                        Editar
                    </Text> */}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        width: '95%',
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',

        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 5,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    textItem: {
        fontSize: 20,
    },
})

export default ProductItem
