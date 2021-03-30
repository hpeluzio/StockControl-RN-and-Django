import React, { useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { useStore } from '../store/StoreContext'
import ProductItem from './ProductItem'

function List({ navigation }) {
    const { store, setStore } = useStore()

    // console.log('list store:', store.length)
    // console.log('Route:', route)

    // useEffect(() => {
    //     console.log('LIST componente montado')
    //     // console.log('UseEffect Store:', store.length)
    //     console.log('UseEffect route params:', route.params)
    //     // console.log('UseEffect store.length:', store.length)
    //     console.log('UseEffect store.length:', store.length)
    // }, [route])

    function handleBotao() {
        console.log('store LIST: ', store)
    }

    function handleClearProducts() {
        setStore([])
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* <Text>Lista de produtos</Text> */}
                {store.map((product) => {
                    return (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            description={product.description}
                            quantity={product.quantity}
                            navigation={navigation}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default List
