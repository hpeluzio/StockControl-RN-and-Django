import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useStore } from '../store/StoreContext'

function ProductForm({ navigation, route }) {
    const { store, setStore } = useStore()
    var [id, setId] = useState(undefined)
    var [description, setDescription] = useState('')
    var [quantity, setQuantity] = useState('')
    // const id = route.params ? route.params.id : undefined

    console.log(route.params)
    useEffect(() => {
        if (!route.params) return
        setId(route.params.id)
        setDescription(route.params.description)
        setQuantity(route.params.quantity)
    }, [route])

    function handleDescriptionChange(description) {
        setDescription(description)
    }

    function handleQuantityChange(quantity) {
        setQuantity(quantity)
    }

    function saveProduct() {
        if (id === undefined) {
            const product = {}
            product.id = new Date().getTime()
            product.description = description
            product.quantity = parseInt(quantity)
            setStore([...store, product])
            setId(undefined)
            setDescription('')
            setQuantity('')
            navigation.navigate('List')
            console.log('saveProduct')
        } else if (id !== undefined) {
            const index = store.findIndex((product) => product.id === id)
            const editedStore = [...store]
            editedStore[index].description = description
            editedStore[index].quantity = quantity

            setStore(editedStore)

            // id = setId(route.params.id)
            // description = setDescription(route.params.description)
            // quantity = setQuantity(route.params.quantity)
            setId(undefined)
            setDescription('')
            setQuantity('')
            console.log('EDIT PRODUCT')
            navigation.navigate('List')
        }
    }

    function handleButtonSave() {
        const product = {}

        product.id = id ? id : new Date().getTime()
        // product.id = new Date().getTime()
        product.quantity = parseInt(quantity)
        product.description = description

        // let newStore = [...store]
        // newStore.push(product)
        // setStore(newStore)

        setStore([...store, product])

        setDescription('')
        setQuantity('')

        console.log('STORE: ', store.length)

        navigation.navigate('List')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                {/* <Text>New Product! {store}</Text> */}
                <TextInput
                    style={styles.input}
                    onChangeText={handleDescriptionChange}
                    placeholder="Digite o nome do produto"
                    clearButtonMode="always"
                    value={description}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuantityChange}
                    placeholder="Digite a quantidade"
                    keyboardType={'numeric'}
                    clearButtonMode="always"
                    value={quantity.toString()}
                />
                <TouchableOpacity style={styles.button} onPress={saveProduct}>
                    <Icon name="save" size={22} color="white" />
                    <Text style={styles.buttonText}> Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        // width: '95%',
        width: '100%',
        padding: 20,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff',
    },
    input: {
        marginTop: 20,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'stretch',
        borderWidth: 0.5,
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
        flexDirection: 'row',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
})

export default ProductForm
