import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import { LinearGradient } from 'expo-linear-gradient'

import StoreProvider from './store/StoreContext'

import Home from './screens/Home'
import List from './screens/List'
import ProductForm from './screens/ProductForm'
import Notifications from './screens/Notifications'
import Settings from './screens/Settings'

const { Navigator, Screen } = createBottomTabNavigator()

export default function App() {
    return (
        <StoreProvider>
            <NavigationContainer>
                <Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ color, size }) => {
                            let iconName

                            switch (route.name) {
                                case 'Home':
                                    iconName = 'home'
                                    break
                                case 'List':
                                    iconName = 'list'
                                    break
                                case 'ProductForm':
                                    iconName = 'plus'
                                    break
                                case 'Notifications':
                                    iconName = 'bell'
                                    break
                                case 'Settings':
                                    iconName = 'settings'
                                    break
                                default:
                                    iconName = 'circle'
                                    break
                            }

                            return (
                                <Icon
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            )
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#9C27B0',
                        inactiveTintColor: '#777',
                        showLabel: false,
                    }}
                >
                    <Screen name="Home" component={Home} />
                    <Screen name="List" component={List} />
                    <Screen
                        name="ProductForm"
                        component={ProductForm}
                        options={() => ({
                            tabBarIcon: ({ tintColor }) => (
                                <View>
                                    <LinearGradient
                                        style={styles.iconTabRound}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 0, y: 0 }}
                                        colors={['#D500F9', '#4A148C']}
                                    >
                                        <Icon
                                            name="plus"
                                            size={26}
                                            color="#FFF"
                                        />
                                    </LinearGradient>
                                </View>
                            ),
                        })}
                    />
                    <Screen name="Notifications" component={Notifications} />
                    <Screen name="Settings" component={Settings} />
                </Navigator>
            </NavigationContainer>
        </StoreProvider>
        // <View style={styles.container}>
        //     <Text>Open up App.js to start working on your app!</Text>
        //     <StatusBar style="auto" />
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: '#9C27B0',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
})
