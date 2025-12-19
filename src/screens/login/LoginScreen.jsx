import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen = () => {
    const [checked, setChecked] = useState(false)
    const navigation = useNavigation()

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 20,
                    justifyContent: 'center'
                }}>

                {/* Header */}
                <View
                    style={{
                        marginBottom: 30
                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 26,
                            fontWeight: '800'
                        }}>
                        Login to your Account ✨
                    </Text>
                    <Text
                        style={{
                            color: '#aaa',
                            fontSize: 15,
                            marginTop: 8
                        }}>
                        Welcome back! Please enter your details.
                    </Text>
                </View>

                {/* Inputs */}
                <View>
                    <Text
                        style={{
                            color: 'white',
                            marginBottom: 6
                        }}>Email</Text>
                    <TextInput
                        placeholder="Enter your email"
                        placeholderTextColor="gray"
                        keyboardType="email-address"
                        style={inputStyle}
                    />

                    <Text
                        style={{
                            color: 'white',
                            marginBottom: 6
                        }}>Password</Text>


                    <TextInput
                        placeholder="Enter your password"
                        placeholderTextColor="gray"
                        secureTextEntry
                        style={inputStyle}
                    />
                </View>

                {/* Remember + Forgot */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20,
                    }}
                >
                    {/* Checkbox */}
                    <TouchableOpacity
                        onPress={() => setChecked(!checked)}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderWidth: 2,
                                borderColor: '#6C63FF',
                                borderRadius: 4,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 8,
                                backgroundColor: checked ? '#6C63FF' : 'transparent',
                            }}
                        >
                            {checked && <Text style={{ color: 'white', fontSize: 14 }}>✓</Text>}
                        </View>

                        <Text style={{ color: '#aaa', fontSize: 14 }}>
                            Remember for 30 days
                        </Text>
                    </TouchableOpacity>

                    {/* Forgot Password */}
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{ color: '#6C63FF', fontSize: 14 }}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Login Button */}
                <TouchableOpacity
                    disabled={!checked}
                    style={{
                        backgroundColor: checked ? '#6C63FF' : '#444',
                        paddingVertical: 14,
                        borderRadius: 12,
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '700'
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>

                {/* Footer */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 20
                    }}>
                    <Text style={{ color: '#aaa' }}>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={{ color: '#6C63FF', fontWeight: '600' }}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const inputStyle = {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: 'white',
    marginBottom: 15,
}

export default LoginScreen
