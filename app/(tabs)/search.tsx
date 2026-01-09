import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const search = () => {
    return (
        <SafeAreaView>
            <View className=''>
                <Text className='w-full'>search</Text>
                <View className='w-full h-1 bg-slate-600 mt-2 flex flex-row '> 

                    <View className='w-1/2 h-full border-b-2 border-blue-500'></View>
                    <View className='w-1/2 h-full'></View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default search

const styles = StyleSheet.create({})