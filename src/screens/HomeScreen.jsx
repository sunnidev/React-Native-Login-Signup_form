import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity onPressIn={() => navigation.navigate("Details")}>
                <Text style={{fontSize:30, color:'white' , backgroundColor:'green'}}>HomeScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen