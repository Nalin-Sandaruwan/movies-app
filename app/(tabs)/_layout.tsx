import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, View } from 'react-native'

const TabIcons = ({ focused, icon, title }: any) => {

    if (focused) {
        return (

            <ImageBackground
                source={images.highlight}

                className=' flex flex-row w-full min-w-20 flex-1  min-h-14 justify-center items-center rounded-full overflow-hidden gap-2 mt-4'
            >

                <Image source={icon} style={{ tintColor: '#ffffff' }} />
                {/* <Text className='text-white font-bold'>{title}</Text> */}
            </ImageBackground>

        )
    } else {
        return (
            <View className='size-full justify-center items-center mt-4 rounded-full'>
                <Image source={icon} className='size-5' style={{ tintColor: '#A8B5DB' }} />
                {/* <Text>{title}</Text> */}
            </View>
        )
    }

}

// const TabIcon = ({ focused, icon, title }: any) => {
//     return (
//         <>

//         </>
//     )
// }




const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",

                },
                tabBarStyle: {
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#0f0D23",
                    borderRadius: 50,
                    marginHorizontal: 18,
                    margin: 32,
                    height: 53,
                    position: 'absolute',
                    overflow: "hidden",
                    borderWidth: 1.2,
                    borderColor: '#0f0d23'
                }
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons focused={focused} icon={icons.home} title="Home" />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons focused={focused} icon={icons.person} title="Profile" />
                    )
                }}
            />

            <Tabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons focused={focused} icon={icons.save} title="Saved" />
                    )
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcons focused={focused} icon={icons.search} title="Search" />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout