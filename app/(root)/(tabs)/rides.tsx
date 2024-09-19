import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

const Rides = () => {
   return (
      <SafeAreaView className="flex h-full items-center justify-between bg-white">
         <TouchableOpacity
            onPress={() => {
               router.replace('/(auth)/sign-up')
            }}
            className="w-full flex justify-end items-end p-5"
         >
            <Text className="text-black text-md font-Jakarta">Skip</Text>
         </TouchableOpacity>
      </SafeAreaView>
   )
}

export default Rides
