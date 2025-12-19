import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: '#000', flex: 1 }}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1
                }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        color:'white'
                    }}>Wellcome</Text>
                <View
                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                        backgroundColor: '#6C63FF', paddingHorizontal: 10,
                        paddingVertical: 20,
                        borderRadius: 20,
                        width: '90%', marginHorizontal: 20
                    }}>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>Start</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default SplashScreen