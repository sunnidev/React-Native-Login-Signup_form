import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const DetailsScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <TouchableOpacity onPressIn={() => navigation.goBack()}>
                <Text style={{fontSize:30, color:'white' , backgroundColor:'red'}}>DetailsScreen</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DetailsScreen