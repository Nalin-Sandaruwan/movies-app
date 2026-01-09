import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Text } from "@react-navigation/elements";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <Image source={images.bg} className="absolute w-full z-0" />
      {/* <TextInput

          style={{
            position: 'absolute',
            top: 30,
            left: 20,
            right: 20,
            height: 50,
            borderWidth: 0.5,
            borderColor: '#fff',
            backgroundColor: '#1E1C2C',
            color: '#fff',
            paddingHorizontal: 10,
            borderRadius: 25,
            fontSize: 16,
          }}
          placeholder="useless placeholder"
          className="placeholder:text-white"
          // className="bg-[#49027c] px-4  border border-white"
          keyboardType="numeric"> Search </TextInput> */}

      <ScrollView className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 20 }}>

        {/* Content goes here */}
        <View className="mt-3 flex ">
          <Image
            source={icons.logo}
            className=" w-10 h-12 mt-10 mb-5 mx-auto"
          />
          <Text style={{color: 'white', fontWeight:"bold", fontSize: 24 ,textAlign: "center"}} >
            Welcome to MovieApp
          </Text>
          <Text style={{fontWeight:"light", fontSize: 11, marginTop: 4, textAlign: "center", marginHorizontal:10}} className="text-white" >
            Discover a world of movies at your fingertips. Browse, search, and
            save your favorite films all in one place.
          </Text>
        </View>
      </ScrollView>
    </View>


  );

}